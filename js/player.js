class Player {
  constructor() {
    this.width = 100;
    this.height = 140;
    this.x = 0;
    this.y = 600 - this.height;
    this.velocity = 0;
    this.gravity = 0.2;
    this.score = 0;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= 600 - this.height) {
      this.y = 600 - this.height;
    }

    image(game.playerImage, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.y > 100) {
      this.velocity = -10;
    }
  }

  // grav
}
