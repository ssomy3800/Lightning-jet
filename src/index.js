import PlayerJet from "./scripts/PlayerJet";
import EnemyJet from "./scripts/EnemyJet";
import Bullet from "./scripts/bullet";

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

const bullets = []; // Define the bullets array

app.ticker.add(() => {
  player.handleKeyboard(keys);

  // Update the bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.move();
    bullet.checkBounds(app);
    if (bullet.destroyed) {
      app.stage.removeChild(bullet.sprite);
      bullets.splice(i, 1);
    }
  }
});

// Spawn two enemy jets on the sides of the screen
const enemyJetTexture = PIXI.Texture.from("./src/picture/jet.png");
const enemyJet1 = new EnemyJet(
  -enemyJetTexture.width,
  Math.random() * app.view.height,
  enemyJetTexture,
  app
);
const enemyJet2 = new EnemyJet(
  app.view.width + enemyJetTexture.width,
  Math.random() * app.view.height,
  enemyJetTexture,
  app
);

app.stage.addChild(enemyJet1.sprite);
app.stage.addChild(enemyJet2.sprite);

app.ticker.add(() => {
  enemyJet1.move();
  enemyJet1.checkBounds(app);
  enemyJet2.move();
  enemyJet2.checkBounds(app);

  const collided =
    enemyJet1.checkCollisions([player, ...bullets]) ||
    enemyJet2.checkCollisions([player, ...bullets]);
  if (collided) {
    console.log("Game over!");
    app.ticker.stop();
  }
});

