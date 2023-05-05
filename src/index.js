import PlayerJet from "./scripts/PlayerJet";
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});

document.getElementById("main").appendChild(app.view);

const playerTexture = PIXI.Texture.from("./src/picture/jet.png");

const player = new PlayerJet(
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

app.ticker.add(() => {
  player.handleKeyboard(keys);
});
// import PlayerJet from "./scripts/player_jet";

// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.getElementById("gameCanvas");
//   const ctx = canvas.getContext("2d");

//   const player = new PlayerJet(canvas.width / 2, canvas.height - 50, 50, 50, 5);

//   function gameLoop() {
//     player.update();
//     draw();
//     requestAnimationFrame(gameLoop);
//   }

//   gameLoop();

//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     player.draw(ctx);
//   }
// });
