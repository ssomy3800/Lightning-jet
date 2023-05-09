import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class PlayerJet extends MovingObject {
  constructor(app, x, y, texture, playerBullets, score) {
    super(x, y, texture);
    this.speed = 5;
    this.app = app;
    this.score = score;
    this.upgradeWeapon();
    this.playerBullets = playerBullets;
  }

  upgradeWeapon() {
    const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png");
    // Create a new bullet every second
    if (this.score.enemyKillCount > 5) {
    } else if (this.score.enemyKillCount > 3) {
    } else if (this.score.enemyKillCount > 1) {
    } else {
      setInterval(() => {
        const bullet = new Bullet(
          this.sprite.x,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up"
        );
        this.app.stage.addChild(bullet.sprite);
        this.playerBullets.push(bullet);
      }, 1000);
    }
  }

  handleKeyboard(keys) {
    if ((keys["w"] || keys["W"]) && this.sprite.y - this.speed > 0) {
      this.move(0, -this.speed);
    }

    if (
      (keys["s"] || keys["S"]) &&
      this.sprite.y + this.speed < this.app.view.height
    ) {
      this.move(0, this.speed);
    }
    if ((keys["a"] || keys["A"]) && this.sprite.x - this.speed > 0) {
      this.move(-this.speed, 0);
    }

    if (
      (keys["d"] || keys["D"]) &&
      this.sprite.x + this.speed < this.app.view.width
    ) {
      this.move(this.speed, 0);
    }
  }
}

export default PlayerJet;
