import PlayerJet from "./scripts/player_jet";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const player = new PlayerJet(canvas.width / 2, canvas.height - 50, 50, 50, 5);

  function gameLoop() {
    player.update();
    draw();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
  }
});
