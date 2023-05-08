import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class EnemyJet extends MovingObject {
  constructor(x, y, texture, app) {
    super(x, y, texture);
    this.speed = 0.5;
    this.app = app;

    // Create a new bullet every 0.5 seconds
    this.bulletInterval = setInterval(() => {
      const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png"); // Update the texture
      const bullet = new Bullet(
        this.sprite.x,
        this.sprite.y + this.sprite.height / 2,
        bulletTexture,
        "down", // Add direction
        app // Add app
      );
      this.app.stage.addChild(bullet.sprite);

      // Add this block to update the enemy bullet's position
      app.ticker.add(() => {
        bullet.move(0, 1); // Update the bullet's position

        // Remove the bullet if it goes beyond the bottom edge of the screen
        if (bullet.sprite.y > app.view.height) {
          app.stage.removeChild(bullet.sprite);
        }
      });
    }, 2000);
  }

  move() {
    this.sprite.x -= this.speed;
  }

  checkBounds(app) {
    if (this.sprite.x < -this.sprite.width) {
      this.destroyed = true;
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
        this.app.stage.removeChild(this.sprite);
        this.app.stage.removeChild(bullet.sprite);
        bullets.splice(i, 1); // Remove the bullet from the bullets array
        clearInterval(this.bulletInterval);
        return true;
      }
    }
    return false;
  }
}

export default EnemyJet;
