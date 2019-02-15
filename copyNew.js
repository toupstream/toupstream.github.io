var txt = [];
var cx, cy;
var img;
var col;
var speed;
// var scratches = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  txt[0] = 'Fear', txt[1] = 'Sympathy', txt[2] = 'Change', txt[3] = 'Stay';
  for (var i = 0; i < txt.length; i++) {
    window['bt' + i] = createButton(txt[i]);
    // window['bt' + i].size(200,200);
  }
  cx = windowWidth * 0.5;
  cy = windowHeight * 0.5;
  sl = createSlider(0, 1, 0.5, 0.05);
  sl.position(200, 300);
  ck = createCheckbox();
  ck.position(cx, cy);
  sel = createSelect();
  sel.position(cx, cy * 0.3);
  sel.option('principle');
  sel.option('decision');
  sel.option('execute');
  img = createImg('media/1.png');
  img.style('z-index', '-1');
  col = createVector(random(255), random(255), random(255));
  // createColorPicker('#fff000');
  // for (var i = 0; i < 20; i++) {
  //   scratches[i] = new Scratch();
  // }
}

function bi() {
  bt3.attribute('disabled', '');
  col = createVector(random(255), random(255), random(255));

}

function bi1() {
  bt2.attribute('disabled', '');
}

//I need a position block, random smooth mover, random generator, random event creator and connector

function draw() {

  var d = createVector((cx - mouseX) * 0.8, (cy - mouseY) * 0.8);
  var q = sin(frameCount * 0.02) * 0.5;
  var n = map(0.01 + noise(frameCount * 0.01) * 0.1, 0, 1, log(1) / 1, log(5) / 1);
  background(0);
  fill(col.x, col.y, col.z);
  noStroke();
  ellipse(sl.value() * cx + cx * 0.5, sl.value() * cy * 2, 200, 200);
  img.position(cx * -0.45 + d.x, cy * -1.5 - d.y);
  // if(bt0.mousePressed){
  // bt0.attribute('disabled', '');
  // // print('sth');
  // }

//showing scratches 

  // for (var sNumber = 0; sNumber < scratches.length; sNumber++) {
  //   scratches[sNumber].update();
  //   scratches[sNumber].move();
  //   // print(0);
  // }
  // if (frameCount % 50 === 0) {
  //   // createShadows(-1, 0, 0);
  //   speed = random(30, 50);
  // }
  // for (var sNumber2 = 0; sNumber2 < scratches.length; sNumber2++) {
  //   // scratches[sNumber2].checkEdge();
  //   scratches[sNumber2].show();
  // }

  // bi = function(bt){
  //   bt.attribute('disabled', '')
  // }

  bt2.mousePressed(bi);
  bt3.mousePressed(bi1);
  bt2.size(200, 200);
  bt2.position(cx  + 200, cy * 0.5 - 100);
  bt3.position(cx * 0.5, cy * 0.5 - 10);
  bt0.position(cx * 0.2 + d, cy * 0.2 + d);
  bt1.position(cx * 1.7 + q, cy * 0.2 + q);
  // bt1.value = true;
  // bt.attribute('value','');
  // bt1.attribute('disabled', '');
  //bt.position bt.size
  //interactive buttons, by clicking, change other button's color,position,content and etc.
}