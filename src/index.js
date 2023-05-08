import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
//////////////////////////////create gameboard//////////////////////////////////

document.getElementById("main").appendChild(app.view);

const playerTexture = PIXI.Texture.from("./src/picture/playerjet.png");
const playerBullets = [];
const enemyBullets = [];
const player = new PlayerJet(
  app,
  app.view.width / 2,
  app.view.height - 50,
  playerTexture,
  playerBullets
);

app.stage.addChild(player.sprite);

/////////////////////////////added player jet///////////////////////////////

const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

////////////////////////////to set the player can hold on to key to keep moving on the direction/////////////
app.ticker.add(() => {
  player.handleKeyboard(keys);

  // Update the player bullets
  for (let i = playerBullets.length - 1; i >= 0; i--) {
    const bullet = playerBullets[i];
    bullet.move(0, -10); // Move the bullet here
    bullet.checkBounds(app);
    // console.log(playerBullets);
    if (bullet.sprite.y < -bullet.sprite.height || bullet.destroyed) {
      // Remove the bullet if it goes beyond the top edge of the screen or is destroyed
      app.stage.removeChild(bullet.sprite);
      playerBullets.splice(i, 1);
    }
  }
  ////////////////player bullet, will be destroyed once it goes outside the board///////////
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
    enemyJet.move();
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
      "common"
    );
    // console.log(enemyJet.type);
    enemyJets.push(enemyJet);
    app.stage.addChild(enemyJet.sprite);
  }
}

function spawnBossJets() {
  bossJet = new EnemyJet(
    app.view.width,
    (Math.random() * app.view.height) / 3,
    bossJetTexture,
    app,
    "boss"
  );
  app.stage.addChild(bossJet.sprite);
}
let enemySpawnCount = 0;
let enemyKillCount = 0;
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
    enemyJet.move();
    enemyJet.checkBounds();

    // console.log(playerBullets);
    const collided = enemyJet.checkCollisions(playerBullets);
    // console.log(collided);
    if (collided) {
      console.log("Enemy jet destroyed!");
      enemyKillCount++;
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the destroyed enemy jet from the array
    }
  });

  // console.log(enemyDisppeared);
});

app.ticker.add(() => {
  if (bossJet) {
    bossJet.move();
    bossJet.checkBounds();
    let bossHP = 10;
    // console.log(playerBullets);
    const collided = bossJet.checkCollisions(playerBullets, bossHP);
    // console.log(collided);
    if (collided) {
      bossHP--;
    }
    if (bossHP === 0) {
      app.stage.removeChild(bossJet.sprite);
    }
  }
});
