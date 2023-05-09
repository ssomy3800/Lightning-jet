import MovingObject from "./MovingObject";

class Bullet extends MovingObject {
  constructor(x, y, texture, direction, app, type) {
    super(x, y, texture);
    this.speed = 10;
    this.direction = direction; // Add direction property
    this.app = app; // Add app property
    this.type = type;
  }

  move(dx, dy) {
    super.move(dx, dy);
    this.checkBounds();
  }

  // Update checkBounds to use this.app
  checkBounds() {
    if (this.direction === "up" && this.sprite.y < 0) {
      this.destroyed = true;
    } else if (
      this.direction === "down" &&
      this.sprite.y > this.app.view.height
    ) {
      this.destroyed = true;
    }
  }
}

export default Bullet;
