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

  positions.kid = getPosition();
  newPositionForObject("popsicle");
  newPositionForObject("ball");
}

function draw() {
  background(16, 87, 107);
  drawPool();

  if (positions?.popsicle) {
    image(sprites.popsicle, ...positions.popsicle, IMG_DIM, IMG_DIM);
  }
  if (positions?.ball) {
    image(sprites.ball, ...positions.ball, IMG_DIM, IMG_DIM);
  }
  image(sprites.kid, ...positions.kid, IMG_DIM, IMG_DIM);
}

function drawPool() {
  for (let x = 0; x < BG_DIM; x += IMG_DIM) {
    for (let y = 0; y < BG_DIM; y += IMG_DIM) {
      image(sprites.pool, x, y, IMG_DIM, IMG_DIM);
    }
  }
}

function randint(start, stop) {
  return Math.floor(Math.random() * (stop - start)) + start;
}

function getPosition() {
  return [
    randint(0, BG_DIM / IMG_DIM) * IMG_DIM,
    randint(0, BG_DIM / IMG_DIM) * IMG_DIM
  ];
}

function newPositionForObject(object) {
  if (intervals[object]) {
    clearInterval(intervals[object]);
  }
  intervals[object] = setInterval(() => {
    positions[object] = getPosition();
    setTimeout(() => {
      positions[object] = [-IMG_DIM, -IMG_DIM];
    }, 5000);
  }, randint(6, 10) * 1000);
}
