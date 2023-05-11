import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class EnemyJet extends MovingObject {
  constructor(x, y, texture, enemyBullets, app, type, dx, dy) {
    super(x, y, texture);
    this.speed = 0.5;
    this.enemyBullets = enemyBullets;
    this.app = app;
    this.type = type;
    this.dx = dx;
    this.dy = dy;
    this.bossAlive = true;
    if (this.type === "common") {
      this.hp = 1;
    } else if (this.type === "boss") {
      this.hp = 100;
    } else if (this.type === "miniboss") {
      this.hp = 20;
    }
    this.bulletInterval = null;
    this.fireBullet();
    this.moveTicker = null;
  }

  fireBullet() {
    // Create a new bullet every 0.5 seconds
    this.bulletInterval = setInterval(() => {
      const bulletTexture = PIXI.Texture.from("./src/assets/playerbullet.png"); // Update the texture
      const bullet = new Bullet(
        this.sprite.x,
        this.sprite.y + this.sprite.height / 2,
        bulletTexture,
        "down", // Add direction
        this.app // Add app
      );
      this.app.stage.addChild(bullet.sprite);
      this.enemyBullets.push(bullet);

      // Add this block to update the enemy bullet's position
      this.app.ticker.add(() => {
        bullet.move(0, 1); // Update the bullet's position

        // // Remove the bullet if it goes beyond the bottom edge of the screen
      });
    }, 2000);
  }

  move(dx, dy) {
    // Remove the existing ticker function if there's any
    if (this.moveTicker) {
      this.app.ticker.remove(this.moveTicker);
    }

    // Create a new ticker function with the new direction
    this.moveTicker = () => {
      this.sprite.x += this.speed * dx;
      this.sprite.y += this.speed * dy;
    };

    // Add the new ticker function to the app ticker
    this.app.ticker.add(this.moveTicker);
  }
  checkBounds() {
    if (this.type === "common") {
      if (
        this.sprite.y > this.app.view.height + this.sprite.height ||
        this.sprite.x < -this.sprite.width ||
        this.sprite.x > this.app.view.width + this.sprite.width
      ) {
        return true;
      }
      // Move the common enemy jet
      this.move(this.dx, this.dy);
    } else {
      if (
        (this.dx < 0 && this.sprite.x <= 10) ||
        (this.dx > 0 && this.sprite.x >= this.app.view.width)
      ) {
        this.dx *= -1;
      }

      // Move the boss enemy jet
      this.move(this.dx, this.dy);
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
        bullet.direction === "up" &&
        expandedBounds.contains(bullet.sprite.x, bullet.sprite.y)
      ) {
        if (this.hp !== 0) {
          this.app.stage.removeChild(bullet.sprite);
          bullets.splice(i, 1);
          this.hp--;
        } else {
          if (this.type === "boss") {
            this.bossAlive = false;
          }
          this.app.stage.removeChild(this.sprite);
          this.app.stage.removeChild(bullet.sprite);
          bullets.splice(i, 1); // Remove the bullet from the bullets array
          clearInterval(this.bulletInterval);
          return true;
        }
      }
    }
    return false;
  }
}

export default EnemyJet;
