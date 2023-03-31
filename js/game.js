class Game {
  constructor() {
    this.background = new Background();
    this.backgroundImages;
    this.player = new Player();
    this.playerImage;
    this.obstacles = [];
    this.coinImage;
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage("./assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("./assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("./assets/background/plx-3.png"), x: 0, speed: 2 },
      { src: loadImage("./assets/background/plx-4.png"), x: 0, speed: 3 },
      { src: loadImage("./assets/background/plx-5.png"), x: 0, speed: 4 },
    ];

    this.playerImage = loadImage("./assets/player/bb8.gif");
    this.coinImage = loadImage("./assets/coins/tile000.png");
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    // Every x frames we want to push a new coin into the array
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle(this.coinImage));
    }

    // Draw the obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player) || obstacle.x < -obstacle.width) {
        return false;
      } else {
        return true;
      }
    });

    if (this.player.score >= 500) {
      fill("yellow");
      textSize(30);
      text("You won!", 260, 300);
      noLoop();
    }
  }
}
