import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class PlayerJet extends MovingObject {
  constructor(app, x, y, texture) {
    super(x, y, texture);
    this.speed = 5;
    this.app = app;

    // Create a new bullet every second
    setInterval(() => {
      const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png");
      const bullet = new Bullet(
        this.sprite.x,
        this.sprite.y - this.sprite.height / 2,
        bulletTexture
      );
      app.stage.addChild(bullet.sprite);

      app.ticker.add(() => {
        bullet.move(0, -10); // Update the bullet's position

        // Remove the bullet if it goes beyond the top edge of the screen
        if (bullet.sprite.y < -bullet.sprite.height) {
          app.stage.removeChild(bullet.sprite);
        }
      });
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
