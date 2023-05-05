import MovingObject from "./moving_object";

class PlayerJet extends MovingObject {
  constructor(x, y, width, height, speed) {
    super(x, y, width, height, speed, "blue");
    this.pressedKeys = {
      w: false,
      a: false,
      s: false,
      d: false,
    };
    this.addKeydownEventListener();
    this.addKeyupEventListener();
  }

  // Add any player-specific functionality here

  addKeydownEventListener() {
    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "a") {
        this.pressedKeys.a = true;
      } else if (event.key.toLowerCase() === "d") {
        this.pressedKeys.d = true;
      } else if (event.key.toLowerCase() === "w") {
        this.pressedKeys.w = true;
      } else if (event.key.toLowerCase() === "s") {
        this.pressedKeys.s = true;
      }
    });
  }

  addKeyupEventListener() {
    document.addEventListener("keyup", (event) => {
      if (event.key.toLowerCase() === "a") {
        this.pressedKeys.a = false;
      } else if (event.key.toLowerCase() === "d") {
        this.pressedKeys.d = false;
      } else if (event.key.toLowerCase() === "w") {
        this.pressedKeys.w = false;
      } else if (event.key.toLowerCase() === "s") {
        this.pressedKeys.s = false;
      }
    });
  }

  update() {
    if (this.pressedKeys.a) {
      this.move(-1, 0);
    }
    if (this.pressedKeys.d) {
      this.move(1, 0);
    }
    if (this.pressedKeys.w) {
      this.move(0, -1);
    }
    if (this.pressedKeys.s) {
      this.move(0, 1);
    }
  }
}

export default PlayerJet;
