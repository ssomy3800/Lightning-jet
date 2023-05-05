import MovingObject from "./MovingObject";

class PlayerJet extends MovingObject {
  constructor(x, y, texture) {
    super(x, y, texture);
    this.speed = 5;
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
