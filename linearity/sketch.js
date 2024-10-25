let x = 0;
let y = 250;
let prevx = x;
let prevy = y;
let angle = 0;
let freqX, freqY;
let oscX, oscY;

function setup() {
  createCanvas(800, 500);
  background(255);
  stroke(0);
  oscX = new p5.Oscillator();
  oscY = new p5.Oscillator();
  oscX.start();
  oscY.start();
}

function draw() {
  x = x + random(-1, 1.2);
  y = y + random(-1, 1);
  
  if (x < 0) {
    x = 0;
  }
  if (x > width) {
    x = 0;
    prevx = 0;
  }
  if (y < 0) {
    y = 0;
  }
  if (y > height) {
    y = height;
  }
  
  freqX = map(x, 0, width, 100, 800);
  freqY = map(y, 0, height, 200, 800);
  
  angle += 0.05;
  
  let weight = random(0.1, 1);
  strokeWeight(weight);
  line(prevx, prevy, x, y);
  prevx = x;
  prevy = y;
  
  oscX.freq(freqX);
  oscY.freq(freqY);
}
