import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class PlayerJet extends MovingObject {
  constructor(app, x, y, texture, playerBullets) {
    super(x, y, texture);
    this.speed = 5;
    this.app = app;

    // Create a new bullet every second
    setInterval(() => {
      const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png");
      const bullet = new Bullet(
        this.sprite.x,
        this.sprite.y - this.sprite.height / 2,
        bulletTexture,
        "up"
      );
      app.stage.addChild(bullet.sprite);
      playerBullets.push(bullet);
    }, 1000);
  }

  handleKeyboard(keys) {
    if (keys["w"] || keys["W"]) {
      this.move(0, -this.speed);
    }
    if (keys["s"] || keys["S"]) {
      this.move(0, this.speed);
    }
    if (keys["a"] || keys["A"]) {
      this.move(-this.speed, 0);
    }
    if (keys["d"] || keys["D"]) {
      this.move(this.speed, 0);
    }
  }
}

export default PlayerJet;
