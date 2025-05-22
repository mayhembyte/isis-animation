let totalFrames = 1000;
let t;

let cor1 = '#37827B';
let cor2 = '#2C6AAE';
let verde = '#37827B';

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  smooth();
  noFill();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  t = frameCount / totalFrames;

  // Teste simples para ver se está funcionando
  stroke(cor1);
  strokeWeight(2);
  line(0, -200, 0, 200);
}
