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

const enemyJets = Array(40)
  .fill(null)
  .map(
    () =>
      new EnemyJet(
        Math.random() * app.view.width + app.view.width,
        Math.random() * app.view.height,
        enemyJetTexture,
        app
      )
  );

// Add enemy jets to the stage
enemyJets.forEach((enemyJet) => app.stage.addChild(enemyJet.sprite));

app.ticker.add(() => {
  // ...

  enemyJets.forEach((enemyJet) => {
    enemyJet.move();
    enemyJet.checkBounds(app);

    const collided = enemyJet.checkCollisions([player, ...bullets]);
    if (collided) {
      console.log("Game over!");
      app.ticker.stop();
    }
  });
});
