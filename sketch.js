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

  positions.kid = [BG_DIM / 2, BG_DIM / 2];
  newPositionForObject("popsicle");
  newPositionForObject("ball");
}

function draw() {
  background(16, 87, 107);
  drawPool();

  if (positions?.popsicle) {
    image(sprites.popsicle, ...positions.popsicle, IMG_DIM, IMG_DIM);
    collision("popsicle");
  }
  if (positions?.ball) {
    image(sprites.ball, ...positions.ball, IMG_DIM, IMG_DIM);
    collision("ball");
  }
  image(sprites.kid, ...positions.kid, IMG_DIM, IMG_DIM);
  move();
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

function move() {
  let [x, y] = positions.kid;

  if (keyIsDown(LEFT_ARROW)) x -= IMG_DIM * 0.05;
  else if (keyIsDown(RIGHT_ARROW)) x += IMG_DIM * 0.05;
  else if (keyIsDown(UP_ARROW)) y -= IMG_DIM * 0.05;
  else if (keyIsDown(DOWN_ARROW)) y += IMG_DIM * 0.05;

  positions.kid[0] = constrain(x, 0, BG_DIM);
  positions.kid[1] = constrain(y, 0, BG_DIM);
}

function hasCollision(object) {
  const [kidX, kidY] = positions.kid;
  const [objX, objY] = positions[object];
  return Math.abs(kidX - objX) <= IMG_DIM && Math.abs(kidY - objY) <= IMG_DIM;
}

function collision(object) {
  if (hasCollision(object)) {
    positions[object] = newPositionForObject(object);
  }
}
