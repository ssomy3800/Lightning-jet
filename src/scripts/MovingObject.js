class MovingObject {
  constructor(x, y, texture) {
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.anchor.set(0.5);
    this.sprite.x = x;
    this.sprite.y = y;
  }

  setPosition(x, y) {
    this.sprite.x = x;
    this.sprite.y = y;
  }

  move(dx, dy) {
    this.sprite.x += dx;
    this.sprite.y += dy;
  }
}

export default MovingObject;
