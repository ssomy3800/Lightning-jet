import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

let gameStarted = false;
let defeat = false;

function startGame() {
  const bgm = document.querySelector("#bgm");
  const bossBgm = document.querySelector("#bossBgm");

  // Start playing the BGM when the game starts
  bgm.play();

  const muteButton = document.getElementById("muteButton");

  muteButton.addEventListener("click", () => {
    const isMuted = bgm.muted || bossBgm.muted;

    if (isMuted) {
      bgm.muted = false;
      bossBgm.muted = false;
      muteButton.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          width="30px"
          viewBox="0 0 640 512"
        >
          <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
        </svg>
      `;
    } else {
      bgm.muted = true;
      bossBgm.muted = true;
      muteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 576 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>`;
    }
  });
  const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
  });
  //////////////////////////////create gameboard//////////////////////////////////
  document.getElementById("main").appendChild(app.view);
  async function setup() {
    const bgTextures = [
      await PIXI.Assets.load("./src/assets/bg1.png"),
      await PIXI.Assets.load("./src/assets/bg2.png"),
      await PIXI.Assets.load("./src/assets/bg3.png"),
    ];

    const baseBackground = new PIXI.Sprite(bgTextures[0]);
    app.stage.addChild(baseBackground);

    const changingBackgrounds = [
      new PIXI.Sprite(bgTextures[1]),
      new PIXI.Sprite(bgTextures[2]),
    ];

    changingBackgrounds.forEach((bg, index) => {
      bg.alpha = index === 0 ? 1 : 0;
      app.stage.addChild(bg);
    });

    let fadeIn = true;
    let currentBgIndex = 0;
    let nextBgIndex = 1;

    app.ticker.add(() => {
      if (fadeIn) {
        changingBackgrounds[nextBgIndex].alpha += 0.005;
        if (changingBackgrounds[nextBgIndex].alpha >= 1) {
          fadeIn = false;
          currentBgIndex = (currentBgIndex + 1) % changingBackgrounds.length;
          nextBgIndex = (currentBgIndex + 1) % changingBackgrounds.length;
        }
      } else {
        changingBackgrounds[currentBgIndex].alpha -= 0.005;
        if (changingBackgrounds[currentBgIndex].alpha <= 0) {
          fadeIn = true;
        }
      }
    });
  }

  setup();
  ///////////////fading background///////////////////////
  const playerTexture = PIXI.Texture.from("./src/assets/playerjet.png");
  const playerBullets = [];
  const enemyBullets = [];
  const score = {
    enemyKillCount: 0,
  };

  let player = new PlayerJet(
    app,
    app.view.width / 2,
    app.view.height - 50,
    playerTexture,
    playerBullets,
    score,
    5
  );
  const keys = {};
  let isPaused = false;
  function isAudioPlaying(audio) {
    return (
      audio.currentTime > 0 &&
      !audio.paused &&
      !audio.ended &&
      audio.readyState > 2
    );
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "P" || e.key === "p") {
      if (isPaused) {
        app.ticker.start();
        resumeGame(); // Resumes game logic
        if (isAudioPlaying(bossBgm)) {
          bossBgm
            .play()
            .catch((error) => console.error("Playback failed due to: ", error));
        } else if (!isAudioPlaying(bgm)) {
          if (bossJet) {
            bossBgm
              .play()
              .catch((error) =>
                console.error("Playback failed due to: ", error)
              );
          } else {
            bgm
              .play()
              .catch((error) =>
                console.error("Playback failed due to: ", error)
              );
          }
        }
      } else {
        app.ticker.stop();
        pauseGame(); // Pauses game logic
        if (isAudioPlaying(bossBgm)) {
          bossBgm.pause();
        } else if (isAudioPlaying(bgm)) {
          bgm.pause();
        }
      }
      isPaused = !isPaused;
      gamePaused = isPaused; // Syncs isPaused with gamePaused
    } else {
      keys[e.key] = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });
  let bossJet = null;
  function checkGameState() {
    if (defeat) {
      app.ticker.stop();
      displayDefeatPicture();
      bossBgm.pause();
      bgm
        .play()
        .catch((error) => console.error("Playback failed due to: ", error));
    } else if (bossJet) {
      if (!bossJet.bossAlive) {
        app.ticker.stop();
        displayVictoryPicture();
        bossBgm.pause();
        bgm
          .play()
          .catch((error) => console.error("Playback failed due to: ", error));
      }
    }
  }

  function displayDefeatPicture() {
    let gameContainer = document.getElementById("gameContainer");

    // clear the gameContainer
    gameContainer.innerHTML = "";

    // create a new container for the image and text
    let imageContainer = document.createElement("div");
    imageContainer.style.position = "relative";
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    imageContainer.style.width = "100%";
    imageContainer.style.height = "100%";

    // create the defeat image
    let defeatImage = document.createElement("img");
    defeatImage.src = "./src/assets/defeat.png";
    defeatImage.alt = "Defeat";
    defeatImage.style.display = "block";
    defeatImage.style.width = "100%";
    defeatImage.style.height = "auto";

    // create the defeat message
    let defeatMessage = document.createElement("h2");
    defeatMessage.innerHTML = "Defeat...<br>Press Y to restart";
    defeatMessage.style.position = "absolute";
    defeatMessage.style.textAlign = "center";
    defeatMessage.style.zIndex = "1";
    defeatMessage.style.fontFamily = "'Orbitron', sans-serif";
    defeatMessage.style.fontSize = "48px";
    defeatMessage.style.color = "white";
    defeatMessage.style.textShadow =
      "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff3300, 0 0 30px #ff3300, 0 0 40px #ff3300";

    // append elements to the gameContainer
    imageContainer.appendChild(defeatImage);
    imageContainer.appendChild(defeatMessage);
    gameContainer.appendChild(imageContainer);
  }
  function displayVictoryPicture() {
    let gameContainer = document.getElementById("gameContainer");

    // clear the gameContainer
    gameContainer.innerHTML = "";

    // create a new container for the image and text
    let imageContainer = document.createElement("div");
    imageContainer.style.position = "relative";
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    imageContainer.style.width = "100%";
    imageContainer.style.height = "100%";

    // create the victory image
    let victoryImage = document.createElement("img");
    victoryImage.src = "./src/assets/victory.png";
    victoryImage.alt = "Victory";
    victoryImage.style.display = "block";
    victoryImage.style.width = "100%";
    victoryImage.style.height = "auto";

    // create the victory message
    let victoryMessage = document.createElement("h2");
    victoryMessage.innerHTML = "Victory!!!<br>Press Y to restart";
    victoryMessage.style.position = "absolute";
    victoryMessage.style.textAlign = "center";
    victoryMessage.style.zIndex = "1";
    victoryMessage.style.fontFamily = "'Orbitron', sans-serif";
    victoryMessage.style.fontSize = "48px";
    victoryMessage.style.color = "white";
    victoryMessage.style.textShadow =
      "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff3300, 0 0 30px #ff3300, 0 0 40px #ff3300";

    // append elements to the gameContainer
    imageContainer.appendChild(victoryImage);
    imageContainer.appendChild(victoryMessage);
    gameContainer.appendChild(imageContainer);
  }
  ////////////////////////////to set the player can hold on to key to keep moving on the direction/////////////
  app.ticker.add(() => {
    if (!player.destroyed) {
      player.handleKeyboard(keys);
      app.stage.addChild(player.sprite);
    }

    /////////////////////////////added player jet///////////////////////////////
  });
  ///////////////////remove enemy jet if it got hit by player bullet//////////////
  const enemyJetTexture = PIXI.Texture.from("./src/assets/jet.png");
  const miniBossJetTexture = PIXI.Texture.from("./src/assets/miniboss.png");
  const bossJetTexture = PIXI.Texture.from("./src/assets/boss.png");

  const enemyJets = [];

  function spawnMiniBoss() {
    const miniBossJet = new EnemyJet(
      app.view.width,
      app.view.height / 4,
      miniBossJetTexture,
      enemyBullets,
      app,
      "miniboss",
      -1,
      0
    );
    app.stage.addChild(miniBossJet.sprite);
    enemyJets.push(miniBossJet);
  }

  function spawnBossJets() {
    bossJet = new EnemyJet(
      app.view.width,
      -50,
      bossJetTexture,
      enemyBullets,
      app,
      "boss",
      -1,
      0
    );
    app.stage.addChild(bossJet.sprite);
    enemyJets.push(bossJet);
  }

  let gamePaused = false;
  let timeoutHandles = [];

  function scheduleTask(ms, fn) {
    if (gamePaused) {
      return;
    }
    let handle = setTimeout(() => {
      fn();
      timeoutHandles = timeoutHandles.filter((h) => h !== handle);
    }, ms);
    timeoutHandles.push(handle);
  }

  function pauseGame() {
    gamePaused = true;
    // Clears all existing timeouts
    timeoutHandles.forEach((handle) => clearTimeout(handle));
    timeoutHandles = [];
  }

  function resumeGame() {
    gamePaused = false;
    // Restart the game from where it left off
    generateJets();
  }

  function generateJets() {
    const scheduleEnemyJets = (time, quantity, direction, includeMiniBoss) => {
      scheduleTask(time, () => {
        for (let i = 0; i < quantity; i++) {
          scheduleTask(i * 2000, () => {
            spawnEnemyJets(direction);
            if (includeMiniBoss && i === includeMiniBoss - 1) {
              spawnMiniBoss();
            }
          });
        }
      });
    };

    scheduleEnemyJets(3000, 5, "left");
    scheduleEnemyJets(8000, 5, "right");
    scheduleEnemyJets(13000, 5, "left", 3);
    scheduleEnemyJets(23000, 10, "right");
    scheduleEnemyJets(33000, 10, "left", 5);

    // Schedule boss spawn
    scheduleTask(43000, () => {
      spawnBossJets();
      bgm.pause();
      bossBgm
        .play()
        .catch((error) => console.error("Playback failed due to: ", error));
    });
  }

  generateJets();

  function spawnEnemyJets(direction) {
    for (let i = 0; i < 1; i++) {
      const enemyJet = new EnemyJet(
        direction === "right" ? app.view.width : 0,
        (Math.random() * app.view.height) / 3,
        enemyJetTexture,
        enemyBullets,
        app,
        "common",
        direction === "right" ? -1 : 1,
        0
      );
      enemyJets.push(enemyJet);
      app.stage.addChild(enemyJet.sprite);
    }
  }

  // Modify the spawnBossJets function to spawn from the top.

  app.ticker.add(() => {
    enemyJets.forEach((enemyJet, i) => {
      const killed = enemyJet.checkCollisions(playerBullets);

      if (killed) {
        score.enemyKillCount++;
        // document.getElementById("scoreValue").innerHTML = score.enemyKillCount;
        document.getElementById(
          "scoreValue"
        ).innerText = `Score: ${score.enemyKillCount}`;

        player.upgradeWeapon();

        // Remove the destroyed enemy jet from the array
        enemyJets.splice(i, 1);

        // Remove the enemy jet sprite
        app.stage.removeChild(enemyJet.sprite);
        clearInterval(enemyJet.bulletInterval);
        // Add explosion animation
        const spriteSheet = PIXI.Texture.from(
          "./src/assets/enemyExplosion.png"
        );
        const frameWidth = 192;
        const frameHeight = 192;
        const numRows = 4;
        const numCols = 5;
        const explosionTextures = [];

        for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols; col++) {
            const frameTexture = new PIXI.Texture(
              spriteSheet,
              new PIXI.Rectangle(
                col * frameWidth,
                row * frameHeight,
                frameWidth,
                frameHeight
              )
            );
            explosionTextures.push(frameTexture);
          }
        }

        const explosionSprite = new PIXI.AnimatedSprite(explosionTextures);
        explosionSprite.anchor.set(0.5);
        explosionSprite.loop = true;
        explosionSprite.animationSpeed = 0.1;
        explosionSprite.visible = true;
        explosionSprite.position.set(enemyJet.sprite.x, enemyJet.sprite.y);
        app.stage.addChild(explosionSprite);
        explosionSprite.play();

        // Remove explosion animation after 1 second
        setTimeout(() => {
          app.stage.removeChild(explosionSprite);

          if (bossJet) {
            checkGameState();
          }
        }, 1000);
      } else if (killed === false) {
        // If the enemy was hit but not killed, we create a smaller explosion.
        const spriteSheet = PIXI.Texture.from(
          "./src/assets/enemyExplosion.png"
        );
        const frameWidth = 192;
        const frameHeight = 192;
        const numRows = 4;
        const numCols = 5;
        const explosionTextures = [];

        for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols; col++) {
            const frameTexture = new PIXI.Texture(
              spriteSheet,
              new PIXI.Rectangle(
                col * frameWidth,
                row * frameHeight,
                frameWidth,
                frameHeight
              )
            );
            explosionTextures.push(frameTexture);
          }
        }

        const explosionSprite = new PIXI.AnimatedSprite(explosionTextures);
        explosionSprite.anchor.set(0.5);
        explosionSprite.loop = true;
        explosionSprite.animationSpeed = 0.1;
        explosionSprite.visible = true;
        explosionSprite.position.set(enemyJet.sprite.x, enemyJet.sprite.y);
        explosionSprite.scale.set(0.2);
        app.stage.addChild(explosionSprite);
        explosionSprite.play();

        // Remove explosion animation after 1 second
        setTimeout(() => {
          app.stage.removeChild(explosionSprite);

          if (bossJet) {
            checkGameState();
          }
        }, 1000);
      }

      if (enemyJet.checkBounds()) {
        app.stage.removeChild(enemyJet.sprite);
        enemyJets.splice(i, 1); // Remove the enemy jet from the enemyJets array
        clearInterval(enemyJet.bulletInterval);
      }
    });

    const playerCollided = player.checkCollisions(enemyBullets);

    if (playerCollided) {
      player.destroyed = true;
      app.stage.removeChild(player.sprite);
      clearInterval(player.currentWeapon);

      const spriteSheet = PIXI.Texture.from("./src/assets/enemyExplosion.png");
      const frameWidth = 192;
      const frameHeight = 192;
      const numRows = 4;
      const numCols = 5;
      const explosionTextures = [];

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const frameTexture = new PIXI.Texture(
            spriteSheet,
            new PIXI.Rectangle(
              col * frameWidth,
              row * frameHeight,
              frameWidth,
              frameHeight
            )
          );
          explosionTextures.push(frameTexture);
        }
      }

      const explosionSprite = new PIXI.AnimatedSprite(explosionTextures);
      explosionSprite.anchor.set(0.5);
      explosionSprite.loop = true;
      explosionSprite.animationSpeed = 0.1;
      explosionSprite.visible = true;
      explosionSprite.position.set(player.sprite.x, player.sprite.y);

      app.stage.addChild(explosionSprite);
      explosionSprite.play();

      // Remove explosion animation after 1 second
      setTimeout(() => {
        app.stage.removeChild(explosionSprite);
        checkGameState();
      }, 1000);
      if (player.hp !== 0) {
        player = player.spawnNewPlayerJet();
      } else {
        defeat = !defeat;
      }
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (!gameStarted) {
      gameStarted = true;
      startGame();
      document.getElementById("startScreen").style.display = "none";
    }
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "y") {
    location.reload();
  }
});
///////////////////hide startpage, start the game/////////////////////////////
