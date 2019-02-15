// var pos = 25;
var time = 0,
  currentVideo = 1,
  dis = 0,
  cLevel = 1;
var vid, aud;
var c;
var vs = [];
// var currentVideo;
var playing = false;
// var v =1;

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  vid = createVideo('media/5.mov');
  aud = createAudio('media/3.m4a');
  aud.loop();
  // vid2 = createVideo('2.mp4');
  // vid2.hide();
  // vid.play();
  vid.loop();
  vid.volume(0);
}

function draw() {
  // var cx = windowWidth *0.5;
  // var cy = windowHeight *0.5;
  c = createVector(windowWidth * 0.5, windowHeight * 0.5);
  // background(0);
  if (frameCount % 50 === 0) {
    var q = random(-0.5, 0.5);
    var p = random(-0.5, 0.5);
  }
  vid.position(-mouseX * 0.5 + c.x - 50, -mouseY * 0.5 + c.y);
  dis = dist(mouseX, mouseY, c.x, c.y);


  // vid2.position(-mouseX * 0.2 + 50, -mouseY * 0.2 + 20);
  // vid.play().time(time);
  // ellipse(mouseX * q, mouseY * p, 50, 50);
  // rect(windowWidth * 0.2, pos * -1, 50, 50);
}

function mouseWheel(event) {
  print(time);

  //move the square according to the vertical scroll amount
  time += map(event.delta,-50,50,-0.5,0.5);
  vid.speed(time);
  
  //uncomment to block page scrolling
  //return false;
  // new p5.MediaElement(elt);

}

function mouseMoved() {
  if (dis < c.x * 0.25) {
    if (mouseX < c.x && mouseY < c.y || mouseX > c.x && mouseY > c.y) {
      aud.attribute('src', 'media/1.m4a');
      aud.play();
    } else {
      aud.attribute('src', 'media/-1.m4a');
      aud.play();
    }
  } else if (dis < c.x * 0.5) {
    if (mouseX < c.x && mouseY < c.y || mouseX > c.x && mouseY > c.y) {
      aud.attribute('src', 'media/2.m4a');
      aud.play();
    } else {
      aud.attribute('src', 'media/-2.m4a');
      aud.play();
    }
  } else if (dis < c.x * 0.75) {
    if (mouseX < c.x && mouseY < c.y || mouseX > c.x && mouseY > c.y) {
      aud.attribute('src', 'media/3.m4a');
      aud.play();
    } else {
      aud.attribute('src', 'media/-3.m4a');
      aud.play();
    }
  } else if (dis < c.x) {
    if (mouseX < c.x && mouseY < c.y || mouseX > c.x && mouseY > c.y) {
      aud.attribute('src', 'media/4.m4a');
      aud.play();
    } else {
      aud.attribute('src', 'media/-4.m4a');
      aud.play();
    }
  }
}



function mouseClicked() {
  // vid.style('src','2.mp4');
  for (i = 0; i <= 18; i++) {
    if (currentVideo == i) {
      vid.attribute('src', 'media/' + i + '.mov');
      vid.play();
      vid.loop();
    }
  }
  currentVideo++;
  if (currentVideo > 18) {
    currentVideo = 1;
  }

}