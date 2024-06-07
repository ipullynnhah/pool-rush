const IMG_DIM = 64;
const BG_DIM = 640;

const sprites = {};
const positions = {};
const intervals = {};

function preload() {
  sprites.pool = loadImage("assets/pool.png");
  sprites.kid = loadImage("assets/kid.png");
  sprites.ball = loadImage("assets/ball.png");
  sprites.popsicle = loadImage("assets/popsicle.png");
}

function setup() {
  createCanvas(BG_DIM, BG_DIM);
}

function draw() {
  background(16, 87, 107);
  drawPool();
}

function drawPool() {
  for (let x = 0; x < BG_DIM; x += IMG_DIM) {
    for (let y = 0; y < BG_DIM; y += IMG_DIM) {
      image(sprites.pool, x, y, IMG_DIM, IMG_DIM);
    }
  }
}
