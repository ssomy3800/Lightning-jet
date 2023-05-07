import MovingObject from "./MovingObject";
import Bullet from "./bullet";

class EnemyJet extends MovingObject {
  constructor(x, y, texture, app) {
    super(x, y, texture);
    this.speed = 2;
    this.app = app;

    // Create a new bullet every 0.5 seconds
    setInterval(() => {
      const bulletTexture = PIXI.Texture.from("./src/picture/playerbullet.png");
      const bullet = new Bullet(
        this.sprite.x,
        this.sprite.y + this.sprite.height / 2,
        bulletTexture,
        "down"
      );
      this.app.stage.addChild(bullet.sprite);
    }, 500);
  }

  move() {
    this.sprite.x -= this.speed;
  } 

  checkBounds(app) {
    if (this.sprite.x < -this.sprite.width) {
      this.setPosition(
        app.view.width + this.sprite.width,
        Math.random() * app.view.height
      );
    }
  }

  checkCollisions(objects) {
    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      if (
        object instanceof Bullet &&
        object.direction === "up" &&
        this.sprite.getBounds().contains(object.sprite.x, object.sprite.y)
      ) {
        app.stage.removeChild(this.sprite);
        app.stage.removeChild(object.sprite);
        return true;
      }
    }
    return false;
  }
}

export default EnemyJet;
