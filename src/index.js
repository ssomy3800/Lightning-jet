import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

let gameStarted = false;
function startGame() {
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
    3
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
  const bossJetTexture = PIXI.Texture.from("./src/assets/boss.png");

  const enemyJets = [];
  let bossJet = null;
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

  function spawnBossJets() {
    bossJet = new EnemyJet(
      app.view.width,
      (Math.random() * app.view.height) / 4,
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
      clearInterval(spawnInterval);
    }
  }, 1000);

  app.ticker.add(() => {
    enemyJets.forEach((enemyJet, i) => {
      const collided = enemyJet.checkCollisions(playerBullets);

      if (collided) {
        console.log("Enemy jet destroyed!");
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
      }, 1000);
      if (player.hp !== 0) {
        player = player.spawnNewPlayerJet();
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
