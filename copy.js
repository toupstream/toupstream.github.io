var video;
var img;



function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.id('p5canvas');
  // canvas.position(0,0);
  canvas.style('z-index','-1');
  // img = createImg('0.jpg');

  background(51);
  // video = createCapture(VIDEO);
  video = createVideo('media/1.mp4')
  video.loop();
  video.hide();
  video.size(600, 900);
  // video.hide();
  video.id('p5video');
  // video2 = createVideo('2.mov')
  // video2.loop();
  // video2.hide();
  // video2.size(600, 900);
  // // video.hide();
  // video2.id('p5video2');

  var seriously = new Seriously();
  // var seriously2 = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  // var src2 = seriously2.source('#p5video2');
  // var target2 = seriously2.target('#p5canvas');
  
  
  // var blur = seriously.effect('blur');
  // // blur.amount = '#blur-range';
  // blur.source = src;
  // target.source = blur;
  
  var chroma = seriously.effect('chroma');
  var blur = seriously.effect('blur');
  chroma.source = '#p5video';
  blur.source = '#p5video';
  target.source = blur;
  // if(mouseIsPressed){
  target.source = chroma;
  // }
  // var chroma2 = seriously.effect('chroma');
  // chroma2.source = '#p5video2';
  // target2.source = chroma2;
  var r = 110/255;
  var g = 110/255;
  var b = 130/255;
  chroma.screen = [r,g,b,1];
  chroma.balance = 0;
  // chroma2.screen = [r,g,b,1];
  // chroma2.balance = 0;

  seriously.go();
  // seriously2.go();
}

function draw() {
  // img.hide();
  // if(mouseIsPressed){
  //   // ellipse(mouseX-600,mouseY-450,50);
  //   // image(img, mouseX, mouseY);
  //   img.position(mouseX,mouseY);
    // img.show();
  //   // print('s');
  // }
}

// function