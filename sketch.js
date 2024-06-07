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
}
