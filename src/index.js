import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});

document.getElementById("main").appendChild(app.view);

const playerTexture = PIXI.Texture.from("./src/picture/playerjet.png", {
  alphaMode: PIXI.ALPHA_MODES.PREMULTIPLIED,
});

const player = new PlayerJet(
  app,
  app.view.width / 2,
  app.view.height - 50,
  playerTexture
);

app.stage.addChild(player.sprite);

const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

const playerBullets = [];
const enemyBullets = [];

app.ticker.add(() => {
  player.handleKeyboard(keys);

  // Update the player bullets
  for (let i = playerBullets.length - 1; i >= 0; i--) {
    const bullet = playerBullets[i];
    bullet.move();
    bullet.checkBounds(app);
    if (bullet.destroyed) {
      app.stage.removeChild(bullet.sprite);
      playerBullets.splice(i, 1);
    }
  }

  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const bullet = enemyBullets[i];
    bullet.move();
    bullet.checkBounds(app);
    if (bullet.destroyed) {
      app.stage.removeChild(bullet.sprite);
      enemyBullets.splice(i, 1);
    }
  }
});

const enemyJetTexture = PIXI.Texture.from("./src/picture/jet.png");

const enemyJets = [];

// Add this function to spawn a group of 5 enemy jets
function spawnEnemyJets() {
  for (let i = 0; i < 5; i++) {
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

// Call spawnEnemyJets function every 10 seconds
let spawnInterval = setInterval(() => {
  spawnEnemyJets();
}, 10000);

// Spawn the first group of enemy jets
spawnEnemyJets();

app.ticker.add(() => {
  // ...

  enemyJets.forEach((enemyJet, i) => {
    enemyJet.move();
    enemyJet.checkBounds(app);

    const collided = enemyJet.checkCollisions(playerBullets);
    if (collided) {
      console.log("Enemy jet destroyed!");
      app.stage.removeChild(enemyJet.sprite);
      enemyJets.splice(i, 1); // Remove the destroyed enemy jet from the array
    }
  });
});
