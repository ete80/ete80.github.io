let x, y, z;
let prevX, prevY, prevZ;
let rotX, rotY, rotZ;
let f1, f2, f3;
let osc1, osc2, osc3;
let freqSlider, waveSelect;

function setup() {
  createCanvas(550, 500, WEBGL);
  x = 0;
  y = 0;
  z = 0;
  prevX = x;
  prevY = y;
  prevZ = z;
  rotX = 0.01;
  rotY = 0.3;
  rotZ = 0.02;
  stroke(0);
  strokeWeight(3);
  
  // Add user interface
  freqSlider = createSlider(1000, 5000, 2000, 100);
  waveSelect = createSelect();
  waveSelect.option('triangle');
  waveSelect.option('sawtooth');
  waveSelect.option('square');
  
  // Initialize oscillators
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc1.setType('triangle');
  osc2.setType('triangle');
  osc3.setType('triangle');
  osc1.start();
  osc2.start();
  osc3.start();
}

function draw() {
  orbitControl();

  background(150);
  
  // Get selected waveform and set for all oscillators
  let waveType = waveSelect.value();
  osc1.setType(waveType);
  osc2.setType(waveType);
  osc3.setType(waveType);

  // Apply rotation to the camera
  rotateX(rotX);
  rotateY(rotY);
  rotateZ(rotZ);

  // Draw cube
  noFill();
  stroke(0);
  box(200); 
  
  // Update drawing location based on brownian motion
  prevX = x;
  prevY = y;
  prevZ = z;
  x += random(-20, 20);
  y += random(-20, 20);
  z += random(-20, 20);

  // Limit the drawing location to stay within the cube
  x = constrain(x, -100, 100);
  y = constrain(y, -100, 100);
  z = constrain(z, -100, 100);

  // Draw line from previous location to current location
  stroke(255, 0, 0);
  line(prevX, prevY, prevZ, x, y, z);
  
  // Map the drawing location to frequencies
  f1 = map(x, -100, 100, 1000, 5000);
  f2 = map(y, -100, 100, 1000, 5000);
  f3 = map(z, -100, 100, 1000, 5000);

  // Update oscillator frequencies
  osc1.freq(f1);
  osc2.freq(f2);
  osc3.freq(f3);
  
  // Adjust frequency of oscillators using slider
  //let freqVal = freqSlider.value();
  //osc1.amp(0.5, 0.1);
  //osc1.freq(freqVal);
  //osc2.amp(0.5, 0.1);
  //osc2.freq(freqVal);
  //osc3.amp(0.5, 0.1);
  //osc3.freq(freqVal);
}
