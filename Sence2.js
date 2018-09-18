var sc = 0;
var mic;
var x = 5;
var y = 0;
var xoff = 50;
var yoff = 0.01;
var colH = 150;


function setup() {
  createCanvas(windowWidth, windowWidth * (9 / 16));
  colorMode(HSB, 255);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(30);
}

function draw() {
  var w = width * 0.5;
  var h = height * 0.5;
  var r = random(10);
  var sr = w - 1;
  var z;
  var colS, colB, zoff;
  var col;
  var vol = mic.getLevel();
  var volR1, volR2, volR3, volmin, volmax;


  colH = map(noise(x), 0, 1, 0, 255);
  // colH += map(vol, 0.00001, 0.001, -10, 10);
  col = color(colH, 200, 250);
  // r = map(noise(x), 0, 1, -w * 0.01, w * 0.05);
  // y+= yoff;
  sc = map(sr, 0, w, 0, 1);
  z = map(noise(frameRate * 0.0001), 0, 1, 0, 255);
  // vol = map(vol, 0, 0.1, 0.001, 0.1);
  x += constrain(0.005, 0.01, vol * 10);
  mic.connect();
  volmin = 0.001;
  volmax = 0.01;
  // volR1 = constrain(w * 0.25, w * 0.4, map(vol, volmin, volmax, w * 0.25, w * 0.4));
  // volR2 = constrain(4, 20, map(vol, volmin, volmax, 4, 20));
  // volR3 = constrain(0.0001, 0.05, map(vol, volmin, volmax, 0.0001, 0.05));
  if (vol >= 0.001) {
    volR1 = constrain(w * 0.25, w * 0.4, map(vol, volmin, volmax, w * 0.25, w * 0.4));
    volR2 = constrain(4, 20, map(vol, volmin, volmax, 4, 20));
    volR3 = constrain(0.0001, 0.05, map(vol, volmin, volmax, 0.0001, 0.05));
  }else{
    volR1 = w * 0.25;
    volR2 = 4;
    volR3 = 0.0001;
  }



  background(255);
  noStroke();
  translate(w / 2, h);
  setRect(w, h, volR1, colH, volR2, w * 0.1, -w * 0.1, volR3);
  translate(w, 0);
  setRect(w, h, volR1, colH, volR2, w * 0.1, -w * 0.1, volR3);
}

function setRect(w, h, l, col, ev, waveMax, waveMin, s) {
  for (i = 0; i < l; i++) {
    var offset = map(noise(xoff), 0, 1, waveMin * (i / l), waveMax * (i / l));
    fill(col - i * 0.5, 50 - i * 0.35, 250);
    beginShape();
    vertex(-w / 2 + i, -h + i);
    for (j = 1; j < ev; j++) {
      vertex(((-w / 2 + i) + (w / 2 - i)) * j / ev + (offset * 0.005), -h + i + offset);
    }
    vertex(w / 2 - i, -h + i);
    for (j = 1; j < ev; j++) {
      vertex(w / 2 - i - offset, ((-h + i) + (h - i) * j / ev + (offset * 0.005)));
    }
    vertex(w / 2 - i, h - i);
    for (j = 1; j < ev; j++) {
      vertex(((-w / 2 + i) + (w / 2 - i) * j / ev + (offset * 0.005)), h - i - offset);
    }
    vertex(-w / 2 + i, h - i);
    for (j = 1; j < ev; j++) {
      vertex(-w / 2 + i + offset, ((-h + i) + (h - i) * j / ev + (offset * 0.005)));
    }
    endShape(CLOSE);
    xoff += s;
    // yoff += 0.0001;
  }


}

function windowResized() {
  resizeCanvas(windowWidth, width * (9 / 16));
}