import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
//////////////////////////////create gameboard//////////////////////////////////

document.getElementById("main").appendChild(app.view);

const playerTexture = PIXI.Texture.from("./src/picture/playerjet.png", {
  alphaMode: PIXI.ALPHA_MODES.PREMULTIPLIED,
});
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
    enemyJet.checkBounds(app);
    if (enemyJet.destroyed) {
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the enemy jet from the enemyJets array
    }
  }
});
///////////////////remove enemy jet if it got hit by player bullet//////////////
const enemyJetTexture = PIXI.Texture.from("./src/picture/jet.png");

const enemyJets = [];

// Add this function to spawn a group of 5 enemy jets
function spawnEnemyJets() {
  for (let i = 0; i < 1; i++) {
    const enemyJet = new EnemyJet(
      Math.random() * app.view.width + app.view.width,
      (Math.random() * app.view.height) / 3,
      enemyJetTexture,
      app
    );
    enemyJets.push(enemyJet);
    app.stage.addChild(enemyJet.sprite);
  }
}
let enemySpawnCount = 0;
let enemyKillCount = 0;
const enemyCount = 3;

// Call spawnEnemyJets function every 10 seconds
const spawnInterval = setInterval(() => {
  if (enemySpawnCount < enemyCount) {
    spawnEnemyJets();
    enemySpawnCount++;
  } else {
    clearInterval(spawnInterval);
  }
}, 1000);

app.ticker.add(() => {
  enemyJets.forEach((enemyJet, i) => {
    enemyJet.move();
    enemyJet.checkBounds(app);
    // console.log(playerBullets);
    const collided = enemyJet.checkCollisions(playerBullets);
    // console.log(collided);
    if (collided) {
      console.log("Enemy jet destroyed!");
      enemyKillCount++;
      if (enemyKillCount === enemyCount) {
        console.log("you win!");
      }
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the destroyed enemy jet from the array
    }
  });
});
