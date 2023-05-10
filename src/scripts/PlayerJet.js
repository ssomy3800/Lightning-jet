import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class PlayerJet extends MovingObject {
  constructor(app, x, y, texture, playerBullets, score) {
    super(x, y, texture);
    this.speed = 5;
    this.app = app;
    this.score = score;
    this.playerBullets = playerBullets;
    this.currentWeapon = null;
    this.upgradeWeapon();
    this.fireBullet();
  }
  fireBullet() {
    this.app.ticker.add(() => {
      for (let i = this.playerBullets.length - 1; i >= 0; i--) {
        const bullet = this.playerBullets[i];
        if (bullet.type === "top-left") {
          bullet.move(-3, -10);
        } else if (bullet.type === "top-right") {
          bullet.move(3, -10);
        } else {
          bullet.move(0, -10);
        }

        bullet.checkBounds(this.app);
        if (bullet.sprite.y < -bullet.sprite.height || bullet.destroyed) {
          // Remove the bullet if it goes beyond the top edge of the screen or is destroyed
          this.app.stage.removeChild(bullet.sprite);
          this.playerBullets.splice(i, 1);
        }
      }
    });
  }
  upgradeWeapon() {
    const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png");

    // Create a new bullet every second
    if (this.score.enemyKillCount > 5) {
      clearInterval(this.currentWeapon);
      this.currentWeapon = setInterval(() => {
        const bullet1 = new Bullet(
          this.sprite.x - this.sprite.width / 3,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up",
          this.app,
          "top-left"
        );
        const bullet2 = new Bullet(
          this.sprite.x,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up",
          this.app,
          "straight-top"
        );
        const bullet3 = new Bullet(
          this.sprite.x + this.sprite.width / 3,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up",
          this.app,
          "top-right"
        );

        this.app.stage.addChild(bullet1.sprite, bullet2.sprite, bullet3.sprite);
        this.playerBullets.push(bullet1, bullet2, bullet3);
      }, 700);
    } else if (this.score.enemyKillCount > 3) {
      clearInterval(this.currentWeapon);
      this.currentWeapon = setInterval(() => {
        const bullet = new Bullet(
          this.sprite.x + this.sprite.width / 3,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up"
        );
        const bullet2 = new Bullet(
          this.sprite.x - this.sprite.width / 3,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up"
        );
        this.app.stage.addChild(bullet.sprite, bullet2.sprite);
        this.playerBullets.push(bullet, bullet2);
      }, 700);
    } else if (this.score.enemyKillCount > 1) {
      clearInterval(this.currentWeapon);
      this.currentWeapon = setInterval(() => {
        const bullet = new Bullet(
          this.sprite.x,
          this.sprite.y - this.sprite.height / 2,
          bulletTexture,
          "up"
        );
        this.app.stage.addChild(bullet.sprite);
        this.playerBullets.push(bullet);
      }, 700);
    } else {
      clearInterval(this.currentWeapon);
      this.currentWeapon = setInterval(() => {
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
  checkCollisions(bullets) {
    const padding = 30; // Add padding to expand the range

    for (let i = 0; i < bullets.length; i++) {
      const bullet = bullets[i];
      const expandedBounds = new PIXI.Rectangle(
        this.sprite.getBounds().x - padding / 2,
        this.sprite.getBounds().y,
        this.sprite.getBounds().width + padding,
        this.sprite.getBounds().height
      );

      if (
        bullet.direction === "down" &&
        expandedBounds.contains(bullet.sprite.x, bullet.sprite.y)
      ) {
        this.app.stage.removeChild(bullet.sprite);
        bullets.splice(i, 1);
        return true;
      } else if (bullet.sprite.y > this.app.view.height) {
        this.app.stage.removeChild(bullet.sprite);
        bullets.splice(i, 1);
      }
    }
    return false;
  }
}

export default PlayerJet;
