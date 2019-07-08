var p5canvas;
var basecolor = [];
var mouseLeft = true;

function setup() {
  p5canvas = createCanvas(512, 512);
  p5canvas.position(0, 0);
  p5canvas.style('z-index', '1');
  colorMode(HSB);
}

function draw() {
  // background(220,10);
  fill(noise(frameCount)*300,50,100,0.8);
  noStroke();
  ellipse(mouseX,mouseY,noise(frameCount)*map((mouseX-pmouseX),0,20,10,40),noise(frameCount)*map((mouseX-pmouseX),0,20,10,40));

  if(mouseY > p5canvas.height*0.5){
    mouseLeft = false;
  }else{
    mouseLeft = true;
  }
  if(mouseX > p5canvas.width *0.75){
    NumTimesToSubdivide = 4;
  }else if(mouseX > p5canvas.width *0.5){
    NumTimesToSubdivide = 3;
  }else if(mouseX > p5canvas.width *0.25){
    NumTimesToSubdivide = 2;
  }else{
    NumTimesToSubdivide = 1;
  }
}


function mouseClicked(){
  p5canvas.clear();
}