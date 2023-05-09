import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
//////////////////////////////create gameboard//////////////////////////////////
document.getElementById("main").appendChild(app.view);
async function setup() {
  const bg1Texture = await PIXI.Assets.load("./src/picture/bg1.png");
  const bg2Texture = await PIXI.Assets.load("./src/picture/bg2.png");

  const bg1 = new PIXI.Sprite(bg1Texture);
  const bg2 = new PIXI.Sprite(bg2Texture);

  bg2.alpha = 0;

  app.stage.addChild(bg1);
  app.stage.addChild(bg2);

  let fadeIn = true;

  app.ticker.add(() => {
    if (fadeIn) {
      bg2.alpha += 0.01;
      if (bg2.alpha >= 3) {
        fadeIn = false;
      }
    } else {
      bg2.alpha -= 0.01;
      if (bg2.alpha <= 0) {
        fadeIn = true;
      }
    }
  });
}

setup();

const playerTexture = PIXI.Texture.from("./src/picture/playerjet.png");
const playerBullets = [];
const enemyBullets = [];
const score = {
  enemyKillCount: 0,
};

const player = new PlayerJet(
  app,
  app.view.width / 2,
  app.view.height - 50,
  playerTexture,
  playerBullets,
  score
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
  player.handleKeyboard(keys);
  app.stage.addChild(player.sprite);

  /////////////////////////////added player jet///////////////////////////////

  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const bullet = enemyBullets[i];
    bullet.move();
    bullet.checkBounds(app);
    if (bullet.destroyed) {
      app.stage.removeChild(bullet.sprite);
      enemyBullets.splice(i, 1);
    }
  }
  ////////////////enemy bullet, will be destroyed once it goes outside the board///////////
  for (let i = enemyJets.length - 1; i >= 0; i--) {
    const enemyJet = enemyJets[i];
    // enemyJet.move();
    enemyJet.checkBounds();
    if (enemyJet.destroyed) {
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the enemy jet from the enemyJets array
    }
  }
});
///////////////////remove enemy jet if it got hit by player bullet//////////////
const enemyJetTexture = PIXI.Texture.from("./src/picture/jet.png");
const bossJetTexture = PIXI.Texture.from("./src/picture/boss.png");

const enemyJets = [];
let bossJet = null;
// Add this function to spawn a group of 5 enemy jets
function spawnEnemyJets() {
  for (let i = 0; i < 1; i++) {
    const enemyJet = new EnemyJet(
      app.view.width,
      (Math.random() * app.view.height) / 3,
      enemyJetTexture,
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
    app,
    "boss",
    -1,
    0
  );
  app.stage.addChild(bossJet.sprite);
}
let enemySpawnCount = 0;

const enemyCount = 1;

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
      player.upgradeWeapon();
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the destroyed enemy jet from the array
    }
  });
});

app.ticker.add(() => {
  if (bossJet) {
    bossJet.checkBounds();
    let bossHP = 10;
    const collided = bossJet.checkCollisions(playerBullets, bossHP);
    if (collided) {
      bossHP--;
    }
    if (bossHP === 0) {
      app.stage.removeChild(bossJet.sprite);
    }
  }
});
