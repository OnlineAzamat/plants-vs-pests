const canvas = document.getElementById("canvas");
const button1 = document.querySelector("button");

const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 700;

let gameFrame = 0;

class Pea {
  constructor() {
    this.spriteWidth = 644;
    this.spriteHeight = 616;
    this.scale = 0.1;
    this.x = 150;
    this.y = 100;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.image = new Image();
    this.image.src = "assets/pea-shooter.png"
  }
  update() {
    if (gameFrame % 50 == 0) {
      this.frame++;

      if(this.frame >= 7) this.frame = 0;
      if(this.frame == 6) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
    }
  }
  draw() {
    const scaledWidth = this.spriteWidth * this.scale;
    const scaledHeight = this.spriteHeight * this.scale;

    ctx.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      scaledWidth,
      scaledHeight
    );
  }
}

const pea = new Pea();

class PeaGrain {
  constructor() {
    this.spriteWidth = 109;
    this.spriteHeight = 103;
    this.scale = 0.2;
    this.x = pea.x + (pea.spriteWidth * 0.1) - 15;
    this.y = pea.y + 10;
    this.frame = 0;
    this.image = new Image();
    this.image.src = "assets/pea-grain.png";
  }
  draw() {
    ctx.drawImage(
      this.image, 
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.spriteWidth * this.scale,
      this.spriteHeight * this.scale
    )
  }
}
const peaGrain = new PeaGrain();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pea.draw();
  pea.update();
  peaGrain.draw();


  gameFrame++;

  requestAnimationFrame(animate);
}
animate();