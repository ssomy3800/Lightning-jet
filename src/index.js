import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

let gameStarted = false;
let defeat = false;
function startGame() {
  const bgm = document.querySelector("#bgm");
  const bossBgm = document.querySelector("#bossBgm");

  // Start playing the BGM when the game starts
  bgm.play();

  // bossBgm.pause();
  // bgm.play();
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
    2
  );
  const keys = {};
  let isPaused = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === "P" || e.key === "p") {
      if (isPaused) {
        app.ticker.start();
      } else {
        app.ticker.stop();
      }
      isPaused = !isPaused;
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
      bgm.play();
    } else if (bossJet) {
      if (!bossJet.bossAlive) {
        app.ticker.stop();
        displayVictoryPicture();
        bossBgm.pause();
        bgm.play();
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
  const minoBossJetTexture = PIXI.Texture.from("./src/assets/miniboss.png");
  const bossJetTexture = PIXI.Texture.from("./src/assets/boss.png");

  const enemyJets = [];

  // Add this function to spawn a group of 5 enemy jets
  function spawnEnemyJets() {
    for (let i = 0; i < 1; i++) {
      const enemyJet = new EnemyJet(
        app.view.width,
        (Math.random() * app.view.height) / 3,
        enemyJetTexture,
        enemyBullets,
        app,
        "common",
        -1,
        0
      );
      enemyJets.push(enemyJet);
      app.stage.addChild(enemyJet.sprite);
    }
  }
  function spawnMiniBoss() {
    bossJet = new EnemyJet(
      app.view.width,
      app.view.height / 4,
      bossJetTexture,
      enemyBullets,
      app,
      "miniboss",
      -1,
      0
    );
    app.stage.addChild(bossJet.sprite);
    enemyJets.push(bossJet);
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
  let enemySpawnCount = 0;

  const enemyCount = 10;

  // Call spawnEnemyJets function every 10 seconds
  const spawnInterval = setInterval(() => {
    if (enemySpawnCount < enemyCount) {
      spawnEnemyJets();
      enemySpawnCount++;
    } else {
      spawnBossJets();
      bgm.pause();
      bossBgm.play();
      clearInterval(spawnInterval);
    }
  }, 1000);

  app.ticker.add(() => {
    enemyJets.forEach((enemyJet, i) => {
      const collided = enemyJet.checkCollisions(playerBullets);

      if (collided) {
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
