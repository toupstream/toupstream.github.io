var img;
var tex;
var tex1;
var tex2;
var tex3;
var tex4;
var tex5;
// var inc = 0.01;
var img2;
var maskImage;
var t = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;
var canvas;
var trigger = false;

// function preload() {
//   img = loadImage("images/logotype.png");
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // imageMode(CENTER);
  colorMode(HSB, 255);
  img = loadImage("Images/Hyper/logotype2.jpg");
  tex = loadImage("Images/Hyper/tex6.jpg");
  tex1 = loadImage("Images/Hyper/tex2-5.jpg");
  tex2 = loadImage("Images/Hyper/tex8.jpg");
  tex3 = loadImage("Images/Hyper/tex9.jpg");
  tex4 = loadImage("Images/Hyper/tex10.jpg");
  tex5 = loadImage("Images/Hyper/tex2.jpg");
  img2 = loadImage("Images/Hyper/beforebg.jpg");
  type1 = createImg('Images/Hyper/title8.png');
  type2 = createImg('Images/Hyper/subtitle1.png');
  text1_2 = createImg('Images/Hyper/text1-02.png');
  text1_3 = createImg('Images/Hyper/text1-03.png');
  text1_6 = createImg('Images/Hyper/text1-06.png');
  text1_4 = createImg('Images/Hyper/text1-04.png');
  text1_5 = createImg('Images/Hyper/text1-05.png');
  text1_1 = createImg('Images/Hyper/text1-01.png');
  dia4 = createImg('Images/Hyper/d4.png');
  dia1 = createImg('Images/Hyper/diagram1.png');
  dia2 = createImg('Images/Hyper/diagram2.png');
  dia1_1 = createImg('Images/Hyper/d1-1.png');
  dia1_2 = createImg('Images/Hyper/d1-2.png');
  dia1_3 = createImg('Images/Hyper/d1-3.png');
  dia1_4 = createImg('Images/Hyper/d1-4.png');
  dia1_5 = createImg('Images/Hyper/d1-5.png');
  dia1_6 = createImg('Images/Hyper/d1-6.png');
  dia1_7 = createImg('Images/Hyper/d1-7.png');
  dia1_8 = createImg('Images/Hyper/d1-8.png');
  dia1_9 = createImg('Images/Hyper/d1-9.png');
  dia1_10 = createImg('Images/Hyper/d1-10.png');
  dia1_11 = createImg('Images/Hyper/d1-11.png');
  dia1_12 = createImg('Images/Hyper/d1-12.png');
  dia2_1 = createImg('Images/Hyper/d2-1.png');
  dia2_2 = createImg('Images/Hyper/d2-2.png');
  dia2_3 = createImg('Images/Hyper/d2-3.png');
  dia2_4 = createImg('Images/Hyper/d2-4.png');
  dia2_5 = createImg('Images/Hyper/d2-5.png');
  dia2_6 = createImg('Images/Hyper/d2-6.png');
  dia2_7 = createImg('Images/Hyper/d2-7.png');
  dia2_8 = createImg('Images/Hyper/d2-8.png');
  dia2_9 = createImg('Images/Hyper/d2-9.png');
  dia2_10 = createImg('Images/Hyper/d2-10.png');
  dia2_11 = createImg('Images/Hyper/d2-11.png');
  dia2_12 = createImg('Images/Hyper/d2-12.png');
  dia2_13 = createImg('Images/Hyper/d2-13.png');
  dia2_14 = createImg('Images/Hyper/d2-14.png');
  dia3 = createImg('Images/Hyper/d3.png');
  dia4_1 = createImg('Images/Hyper/d4_1.png');
  dia4_2 = createImg('Images/Hyper/d4_2.png');
  r5_17 = createImg('Images/Hyper/R5-17.png');
  r5_16 = createImg('Images/Hyper/R5-16.png');
  r5_15 = createImg('Images/Hyper/R5-15.png');
  r5_14 = createImg('Images/Hyper/R5-14.png');
  r7 = createImg('Images/Hyper/R7.png');
  r5_8 = createImg('Images/Hyper/R5-8.png');
  r5_2 = createImg('Images/Hyper/R5-2.png');
  r6 = createImg('Images/Hyper/R6.png');
  r5_13 = createImg('Images/Hyper/R5-13.png');
  r5_12 = createImg('Images/Hyper/R5-12.png');
  r5_11 = createImg('Images/Hyper/R5-11.png');
  r5_10 = createImg('Images/Hyper/R5-10.png');
  r5_9 = createImg('Images/Hyper/R5-9.png');
  r5_7 = createImg('Images/Hyper/R5-7.png');
  r5_6 = createImg('Images/Hyper/R5-6.png');
  r5_5 = createImg('Images/Hyper/R5-5.png');
  r5_4 = createImg('Images/Hyper/R5-4.png');
  r5_3 = createImg('Images/Hyper/R5-3.png');
  r5_1 = createImg('Images/Hyper/R5-1.png');
  r4 = createImg('Images/Hyper/R4.png');
  r3 = createImg('Images/Hyper/R3.png');
  r2 = createImg('Images/Hyper/R2.png');
  r1 = createImg('Images/Hyper/R1.png');
  r8 = createImg('Images/Hyper/R8.png');
  r9 = createImg('Images/Hyper/R9.png');
  r10 = createImg('/Images/Hyper/R10.png');
  // calYau = createImg('/Images/Calabi.png')
  m2 = createImg('Images/Hyper/m2.png');
  m1 = createImg('Images/Hyper/m1.png');
  m4 = createImg('Images/Hyper/m4.png');
  m3 = createImg('Images/Hyper/m3.png');
  m6 = createImg('Images/Hyper/m6.png');
  m5 = createImg('Images/Hyper/m5.png');
  m8 = createImg('Images/Hyper/m8.png');
  m7 = createImg('Images/Hyper/m7.png');
  m10 = createImg('Images/Hyper/m10.png');
  m9 = createImg('Images/Hyper/m9.png');
  m12 = createImg('Images/Hyper/m12.png');
  m11 = createImg('Images/Hyper/m11.png');
  m14 = createImg('Images/Hyper/m14.png');
  m13 = createImg('Images/Hyper/m13.png');
  m16 = createImg('Images/Hyper/m16.png');
  m15 = createImg('Images/Hyper/m15.png');
  en2 = createImg('Images/Hyper/En2.png');
  en1 = createImg('Images/Hyper/En1.png');
  en7 = createImg('Images/Hyper/En7.png');
  en6 = createImg('Images/Hyper/En6.png');
  enex = createImg('Images/Hyper/EnEx.gif');
  enex2 = createImg('Images/Hyper/EnEx2.gif');
  en3 = createImg('Images/Hyper/En3.png');
  ex3 = createImg('Images/Hyper/Ex3.png');
  ex2 = createImg('Images/Hyper/Ex2.png');
  ex1 = createImg('Images/Hyper/Ex1.png');
  ex6 = createImg('Images/Hyper/Ex6.png');
  ex7 = createImg('Images/Hyper/Ex7.png');
  ex8 = createImg('Images/Hyper/Ex8.png');

  background(0);
  text1 = createElement('h1', '');
  // image(img, 300, 200, img.width, img.height);

}

function draw() {
  //image size: 281*54
  /*  background(50);
      stroke(255);
      fill(127);
      beginShape();
      texture(img);
      vertex(200, 200,0,0);
      vertex(400, 200,281,0);
      vertex(400, 250,281,54);
      vertex(200, 250,0,54);
      endShape(CLOSE);
  */


  var locY = (mouseY / windowHeight - 0.5) * (-2);
  var locX = (mouseX / windowWidth - 0.5) * 2;
  var x;
  var y;
  var ratio_w = windowWidth / 800;
  if (windowWidth >= 800) {
    x = 281;
    y = 54;
  } else {

    x = 281 * ratio_w;
    y = 54 * ratio_w;
  }
  //increments
  var b = 0.1;
  var increase = map(sin(b + frameCount * 0.01), -1, 1, -50, 50);
  b += 0.1;
  var c = 1.3;
  var increase2 = map(sin(c + frameCount * 0.01), -1, 1, -50, 50);
  c += 0.1;
  var d = 2.8;
  var increase3 = map(sin(d + frameCount * 0.01), -1, 1, -50, 50);
  d += 0.1;
  var h2 = map(sin(b + frameCount * 0.01), -1, 1, 0, 255);
  var h3 = map(sin(c + frameCount * 0.01), -1, 1, 0, 255);
  var h4 = map(sin(d + frameCount * 0.01), -1, 1, 0, 255);
  var q1 = map(sin(b + frameCount * 0.01), -1, 1, -5, 5);
  // var q = frameCount * q1;
  var i1 = sin(b + q1);
  var i2 = sin(c + q1);
  if (i1 < random(0.3, 0.5) || i1 > random(-0.3, -0.5)) {
    q1 = q1 * -1;
  }
  // background(0);
  texture(img2);
  push();
  translate(0, 0, -height);
  plane(width * 2.2, height * 2.2);
  pop();

  // img2 = createImage(windowWidth,windowHeight);
  // var yoff = 0;
  // img2.loadPixels();
  // for (var y1 = 0; y1 < height; y1++) {
  //   var xoff = 0;
  //   for (var x1 = 0; x1 < width; x1++) {
  //     var index = (x1 + y1 * width) * 4;
  //     var r = noise(xoff, yoff) * 255;
  //     pixels[index + 0] = r;
  //     pixels[index + 1] = r;
  //     pixels[index + 2] = r;
  //     pixels[index + 3] = 255;
  //     xoff += inc;
  //   }
  //   yoff += inc;
  // }
  // img2.updatePixels();
  // image(img2)

  for (var a = 0; a < TWO_PI; a += 0.1) {
    var h = map(sin(a + frameCount * 0.01), -1, 1, 0, 255);
    // ambientLight(h, 100, 200);
  }
  var q = sin(frameCount * 0.05);
  var q2 = sin(frameCount * 0.03);
  var q3 = sin(frameCount * 0.05 + 1);
  var q4 = sin(frameCount * 0.03 + 1);
  var q5 = sin(frameCount * 0.05 + 2);
  var q6 = sin(frameCount * 0.03 + 2);
  var q7 = sin(frameCount * 0.05 + 3);
  var q8 = sin(frameCount * 0.03 + 3);


  push();
  translate(windowWidth / -3, windowHeight / -2.5);
  rotateX((mouseX + mouseY) * 0.001 + frameCount * 0.03);
  rotateZ(QUARTER_PI * 0.3);
  texture(img);
  //Plane#1
  push();
  rotateX(PI);
  plane(x, y);
  pop();

  //Plane#2
  push();
  translate(0, 0.5 * y, 0.5 * y);
  rotateX(HALF_PI);
  plane(x, y);
  pop();

  //Plane#3
  push();
  translate(0, 0, y);
  plane(x, y);
  pop();

  //Plane#4
  push();
  translate(0, -0.5 * y, 0.5 * y);
  rotateX(PI + HALF_PI);
  plane(x, y);
  pop();
  pop();

  push();
  ambientLight(h4, 150, 200);
  pointLight(h, 200, 100, 0.8, 0.7);
  directionalLight(h2, 200, 5);
  pointLight(h3, 200, 200, -0.8, -0.7);
  texture(tex);
  pop();

  var boxw = 800 * 0.7;
  var conew = 800 * 0.3;
  var coneh = 800 * 0.6;
  var spherew = 800 * 0.1;
  var planew = 800 * 0.4;
  var ellipsoidw = 800 * 0.1;
  var torusw = 800 * 0.03;
  var torush;
  if (windowWidth < 1600) {
    boxw = windowHeight * 0.7;
    conew = windowHeight * 0.3;
    coneh = windowHeight * 0.6;
    spherew = windowHeight * 0.1;
    planew = windowHeight * 0.4;
    ellipsoidw = windowHeight * 0.1;
    torusw = windowHeight * 0.03;
    if (windowWidth / windowHeight > 1.2) {
      boxw = windowHeight * 0.7 * 0.7;
      conew = windowHeight * 0.3 * 0.7;
      coneh = windowHeight * 0.6 * 0.7;
      spherew = windowHeight * 0.1 * 0.7;
      planew = windowHeight * 0.4 * 0.7;
      ellipsoidw = windowHeight * 0.1 * 0.7;
      torusw = windowHeight * 0.03 * 0.7;
    }
  }


  //position variables
  var click = true;
  var PosZ = 0;
  var boxPosZ = 0;
  var conePosX = -windowWidth * 0.08;
  var conePosY = windowWidth * 0.2;
  var conePosZ = windowWidth * 0.15;
  var coneRotX = -QUARTER_PI;
  var coneRotY = 0;
  var coneRotY2 = frameCount * 0.03;
  var coneRotZ = 0.5;
  var spherePosX = windowWidth * 0.05;
  var spherePosY = -windowWidth * 0.17;
  var spherePosZ = windowWidth * 0.15;
  var torusPosZ = -windowWidth * 0.35 + q1;

  //mousecontrol

  if (t < 400) {
    t += 10;
  }
  if (t2 < 600) {
    t2 += 20;
  }
  if (t3 < 800) {
    t3 += 30;
  }
  if (t4 < 800) {
    t4 += 30;
  }

  if (t5 < 1200) {
    t5 += 30;
  }

  text1.html('');
  text1.position(windowWidth * 0.4, windowHeight * 0.05);


  text1_3.hide();
  text1_2.hide();
  text1_1.hide();
  text1_6.hide();
  text1_4.hide();
  text1_5.hide();
  //button1
  if (mouseX > windowWidth * 0.02 && mouseX < windowWidth * 0.06) {
    if (mouseY > windowHeight * 0.75 && mouseY < windowHeight * 0.79) {
      // if (frameCount < 100) {
      click = false;
      var inc = 0;
      // var det = true;
      // var q = frameCount % 30;
      // inc = map(q, 0, 30, width * 0.01, width * 0.3);
      boxw = boxw + t;
      PosZ = PosZ + t;
      // text1.html('Game Licensing Agreed');
      text1_3.show();
      text1_3.position(windowWidth * 0.18 + (q2 * 5), windowHeight * 0.76 + (q3 * 5));
      text1_2.show();
      text1_2.position(windowWidth * 0.2 + (q4 * 5), windowHeight * 0.62 + (q5 * 5));
      text1_1.show();
      text1_1.position(windowWidth * 0.45 + (q6 * 5), windowHeight * 0.5 + (q7 * 5));
      text1_6.show();
      text1_6.position(windowWidth * 0.2 + (q3 * 5), windowHeight * 0.04 + (q4 * 5));
      text1_4.show();
      text1_4.position(windowWidth * 0.195 + (q5 * 5), windowHeight * 0.39 + (q6 * 5));
      text1_5.show();
      text1_5.position(windowWidth * 0.29 + (q7 * 5), windowHeight * 0.24 + (q8 * 5));
      // text1_4.show();
      // text1_4.position(windowWidth * 0.27, windowHeight * 0.03);
      // img2 = tex;
      noStroke;
      // fill(100);
      ellipse(windowWidth * -0.45, windowHeight * -0.27, windowHeight * 0.075, windowHeight * 0.075);
    } else {
      t = 0;
      click = true;
      // img2 = loadImage("images/beforebg.png");
    }
  } else {
    t = 0;
    click = true;
    // img2 = loadImage("images/beforebg.png");
  }

  dia4.hide();
  dia1.hide();
  dia1_1.hide();
  dia1_2.hide();
  dia1_3.hide();
  dia1_4.hide();
  dia1_5.hide();
  dia1_6.hide();
  dia1_7.hide();
  dia1_8.hide();
  dia1_9.hide();
  dia1_10.hide();
  dia1_11.hide();
  dia1_12.hide();
  dia2.hide();
  dia2_1.hide();
  dia2_2.hide();
  dia2_3.hide();
  dia2_4.hide();
  dia2_5.hide();
  dia2_6.hide();
  dia2_7.hide();
  dia2_8.hide();
  dia2_9.hide();
  dia2_10.hide();
  dia2_11.hide();
  dia2_12.hide();
  dia2_13.hide();
  dia2_14.hide();
  dia3.hide();
  dia4_1.hide();
  dia4_2.hide();

  var keyctrl = true;
  //botton2
  if (mouseX > windowWidth * 0.05 && mouseX < windowWidth * 0.09) {
    if (mouseY > windowHeight * 0.8 && mouseY < windowHeight * 0.84) {
      // if (frameCount < 100) {
      click = false;
      var inc2 = 0;

      conew = conew + t2;
      coneh = coneh + t2;
      conePosX = conePosX - windowWidth * 0.4;
      conePosY = conePosY - windowWidth * 0.2;
      conePosZ = conePosZ - windowWidth * 0.2;
      coneRotY = -frameCount * 0.01 + (mouseX + mouseY) * 0.001;
      coneRotX = 0;
      coneRotZ = 0;
      coneRotY2 = frameCount * 0.01 + (mouseX + mouseY) * 0.001;
      // diagrams
      if (keyIsPressed) {
        if (keyCode == 17) {
          keyctrl = !keyctrl;
        }
      }


      if (!keyctrl) {
        dia4_2.show();
        dia4_2.position(windowWidth * 0.215 + (q2 * 50), windowHeight * 0.57 + (q3 * 50));
        dia1.show();
        dia1.position(windowWidth * 0.133 + (q4 * 5), windowHeight * 0.108 + (q5 * 5));
        dia2_1.show();
        dia2_1.position(windowWidth * 0.38 + (q8 * 5), windowHeight * 0.05 + (q7 * 5));
        dia2_2.show();
        dia2_2.position(windowWidth * 0.38 + (q6 * 5), windowHeight * 0.1 + (q5 * 5));
        dia2_3.show();
        dia2_3.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.147 + (q3 * 5));
        dia2_4.show();
        dia2_4.position(windowWidth * 0.38 + (q2 * 5), windowHeight * 0.197 + (q4 * 5));
        dia2_5.show();
        dia2_5.position(windowWidth * 0.38 + (q3 * 5), windowHeight * 0.247 + (q6 * 5));
        dia2_6.show();
        dia2_6.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.297 + (q7 * 5));
        dia2_7.show();
        dia2_7.position(windowWidth * 0.38 + (q5 * 5), windowHeight * 0.344 + (q8 * 5));
        dia2_8.show();
        dia2_8.position(windowWidth * 0.38 + (q3 * 5), windowHeight * 0.394 + (q * 5));
        dia2_11.show();
        dia2_11.position(windowWidth * 0.38 + (q5 * 5), windowHeight * 0.441 + (q2 * 5));
        dia2_12.show();
        dia2_12.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.491 + (q6 * 5));
        dia2_13.show();
        dia2_13.position(windowWidth * 0.38 + (q6 * 5), windowHeight * 0.538 + (q2 * 5));
        dia2_14.show();
        dia2_14.position(windowWidth * 0.38 + (q7 * 5), windowHeight * 0.588 + (q * 5));
        dia4_1.show();
        dia4_1.position(windowWidth * 0.17 + (q8 * 50), windowHeight * 0.5 + (q4 * 50));
        // dia2_13.show();
        // dia2_13.position(windowWidth * 0.38 + (q2 * 5), windowHeight * 0.635 + (q3 * 5));
        // dia2_14.show();
        // dia2_14.position(windowWidth * 0.38 + (q2 * 5), windowHeight * 0.685 + (q3 * 5));
      } else {
        dia4.show();
        dia4.position(windowWidth * 0.215 + (q2 * 50), windowHeight * 0.57 + (q3 * 50));
        dia2.show();
        dia2.position(windowWidth * 0.163 + (q4 * 5), windowHeight * 0.148 + (q5 * 5));
        dia1_1.show();
        dia1_1.position(windowWidth * 0.38 + (q8 * 5), windowHeight * 0.05 + (q7 * 5));
        dia1_2.show();
        dia1_2.position(windowWidth * 0.38 + (q6 * 5), windowHeight * 0.1 + (q5 * 5));
        dia1_3.show();
        dia1_3.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.147 + (q3 * 5));
        dia1_4.show();
        dia1_4.position(windowWidth * 0.38 + (q2 * 5), windowHeight * 0.197 + (q4 * 5));
        dia1_5.show();
        dia1_5.position(windowWidth * 0.38 + (q3 * 5), windowHeight * 0.247 + (q6 * 5));
        dia1_6.show();
        dia1_6.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.297 + (q7 * 5));
        dia1_7.show();
        dia1_7.position(windowWidth * 0.38 + (q5 * 5), windowHeight * 0.344 + (q8 * 5));
        dia1_8.show();
        dia1_8.position(windowWidth * 0.38 + (q3 * 5), windowHeight * 0.394 + (q * 5));
        dia1_9.show();
        dia1_9.position(windowWidth * 0.38 + (q5 * 5), windowHeight * 0.441 + (q2 * 5));
        dia1_10.show();
        dia1_10.position(windowWidth * 0.38 + (q4 * 5), windowHeight * 0.491 + (q6 * 5));
        dia1_11.show();
        dia1_11.position(windowWidth * 0.38 + (q6 * 5), windowHeight * 0.538 + (q2 * 5));
        dia1_12.show();
        dia1_12.position(windowWidth * 0.38 + (q7 * 5), windowHeight * 0.588 + (q * 5));
        dia3.show();
        dia3.position(windowWidth * 0.17 + (q8 * 50), windowHeight * 0.5 + (q4 * 50));
      }

      noStroke;
      ellipse(windowWidth * -0.42, windowHeight * -0.32, windowHeight * 0.075, windowHeight * 0.075);
    } else {
      t2 = 0;
      // img2 = loadImage("images/beforebg.png");
    }
  } else {
    t2 = 0;
    // img2 = loadImage("images/beforebg.png");
  }

  r1.hide();
  r2.hide();
  r3.hide();
  r4.hide();
  r5_1.hide();
  r5_2.hide();
  r5_3.hide();
  r5_4.hide();
  r5_5.hide();
  r5_6.hide();
  r5_7.hide();
  r5_8.hide();
  r5_9.hide();
  r5_10.hide();
  r5_11.hide();
  r5_12.hide();
  r5_13.hide();
  r5_14.hide();
  r5_15.hide();
  r5_16.hide();
  r5_17.hide();
  r6.hide();
  r7.hide();
  r8.hide();
  r9.hide();
  r10.hide();

  //botton3
  if (mouseX > windowWidth * 0.08 && mouseX < windowWidth * 0.12) {
    if (mouseY > windowHeight * 0.85 && mouseY < windowHeight * 0.89) {
      // if (frameCount < 100) {
      click = false;
      boxPosZ += t5;
      conePosY += t5;
      torusPosZ -= t5;
      spherew = spherew + t3;
      spherePosX -= -windowWidth * 0.05;
      spherePosY += windowWidth * 0.1;
      spherePosZ -= windowWidth * 0.2;
      r5_17.show();
      r5_16.show();
      r5_15.show();
      r5_14.show();
      r7.show();
      r5_8.show();
      r5_2.show();
      r6.show();
      r5_13.show();
      r5_12.show();
      r5_11.show();
      r5_10.show();
      r5_9.show();
      r5_7.show();
      r5_6.show();
      r5_5.show();
      r5_4.show();
      r5_3.show();
      r5_1.show();
      r4.show();
      r3.show();
      r2.show();
      r1.show();
      dia4_2.position(windowWidth * 0.215 + (q2 * 5), windowHeight * 0.57 + (q3 * 5));
      r1.position(windowWidth * 0.35 + (q3 * 5), windowHeight * 0.57 + (q6 * 5));
      r2.position(windowWidth * 0.344 + (q4 * 5), windowHeight * 0.11 + (q7 * 5));
      r3.position(windowWidth * 0.248 + (q * 5), windowHeight * 0.42 + (q8 * 5));
      r4.position(windowWidth * 0.35 + (q3 * 5), windowHeight * 0.267 + (q5 * 5));
      r5_1.position(windowWidth * 0.335 + (q * 5), windowHeight * 0.49 + (q * 5));
      r5_2.position(windowWidth * 0.37 + (q7 * 5), windowHeight * 0.61 + (q2 * 5));
      r5_3.position(windowWidth * 0.24 + (q6 * 5), windowHeight * 0.16 + (q3 * 5));
      r5_4.position(windowWidth * 0.45 + (q7 * 5), windowHeight * 0.39 + (q6 * 5));
      r5_5.position(windowWidth * 0.215 + (q3 * 5), windowHeight * 0.35 + (q8 * 5));
      r5_6.position(windowWidth * 0.25 + (q2 * 5), windowHeight * 0.05 + (q3 * 5));
      r5_7.position(windowWidth * 0.64 + (q5 * 5), windowHeight * 0.415 + (q7 * 5));
      r5_8.position(windowWidth * 0.48 + (q8 * 5), windowHeight * 0.52 + (q4 * 5));
      r5_9.position(windowWidth * 0.16 + (q6 * 5), windowHeight * 0.13 + (q * 5));
      r5_10.position(windowWidth * 0.355 + (q6 * 5), windowHeight * 0.315 + (q6 * 5));
      r5_11.position(windowWidth * 0.356 + (q7 * 5), windowHeight * 0.39 + (q2 * 5));
      r5_12.position(windowWidth * 0.466 + (q6 * 5), windowHeight * 0.37 + (q5 * 5));
      r5_13.position(windowWidth * 0.355 + (q3 * 5), windowHeight * 0.45 + (q4 * 5));
      r5_14.position(windowWidth * 0.54 + (q2 * 5), windowHeight * 0.135 + (q6 * 5));
      r5_15.position(windowWidth * 0.62 + (q4 * 35), windowHeight * 0.27 + (q8 * 5));
      r5_16.position(windowWidth * 0.615 + (q3 * 5), windowHeight * 0.4 + (q7 * 5));
      r5_17.position(windowWidth * 0.52 + (q5 * 5), windowHeight * 0.23 + (q5 * 5));
      r6.position(windowWidth * 0.052 + (q * 5), windowHeight * 0.3 + (q * 5));
      r7.position(windowWidth * 0.2 + (q3 * 5), windowHeight * -0.05 + (q3 * 5));
      r8.position(windowWidth * 0.18 + (q * 5), windowHeight * 0.65 + (q * 5));
      r9.position(windowWidth * 0.18 + (q7 * 5), windowHeight * 0.69 + (q2 * 5));
      r10.position(windowWidth * 0.215 + (q3 * 5), windowHeight * 0.65 + (q3 * 5));
      if (keyIsPressed) {
        r8.show();
        r9.show();
      } else {
        r10.show();
      }

      noStroke;
      ellipse(windowWidth * -0.39, windowHeight * -0.37, windowHeight * 0.075, windowHeight * 0.075);
    } else {
      t3 = 0;
      t5 = 0;
      // img2 = loadImage("images/beforebg.png");
    }
  } else {
    t3 = 0;
    t5 = 0;
    // img2 = loadImage("images/beforebg.png");
  }

  // calYau.hide();
  m1.hide();
  m2.hide();
  m3.hide();
  m4.hide();
  m5.hide();
  m6.hide();
  m7.hide();
  m8.hide();
  m9.hide();
  m10.hide();
  m11.hide();
  m12.hide();
  m13.hide();
  m14.hide();
  m15.hide();
  m16.hide();

  //botton4
  if (mouseX > windowWidth * 0.12 && mouseX < windowWidth * 0.15) {
    if (mouseY > windowHeight * 0.9 && mouseY < windowHeight * 0.94) {
      click = false;
      trigger = true;
      torusw = torusw + t4;
      torusPosZ = torusPosZ + windowWidth * 0.5 + q1;
      m1.show();
      m2.show();
      m3.show();
      m4.show();
      m5.show();
      m6.show();
      m7.show();
      m8.show();
      m9.show();
      m10.show();
      m11.show();
      m12.show();
      m13.show();
      m14.show();
      m15.show();
      m16.show();
      m1.position(windowWidth * 0.33 + (q2 * 5), windowHeight * 0.07 + (q5 * 5));
      m2.position(windowWidth * 0.325 + (q4 * 5), windowHeight * 0.05 + (q2 * 5));
      m3.position(windowWidth * 0.238 + (q6 * 5), windowHeight * 0.13 + (q5 * 5));
      m4.position(windowWidth * 0.23 + (q8 * 5), windowHeight * 0.115 + (q3 * 5));
      m5.position(windowWidth * 0.08 + (q7 * 5), windowHeight * 0.3 + (q6 * 5));
      m6.position(windowWidth * 0.08 + (q3 * 5), windowHeight * 0.28 + (q2 * 5));
      m7.position(windowWidth * 0.08 + (q5 * 5), windowHeight * 0.335 + (q6 * 5));
      m8.position(windowWidth * 0.08 + (q2 * 5), windowHeight * 0.32 + (q3 * 5));
      m9.position(windowWidth * 0.19 + (q * 5), windowHeight * 0.45 + (q7 * 5));
      m10.position(windowWidth * 0.175 + (q2 * 5), windowHeight * 0.43 + (q8 * 5));
      m11.position(windowWidth * 0.63 + (q * 5), windowHeight * 0.26 + (q7 * 5));
      m12.position(windowWidth * 0.63 + (q7 * 5), windowHeight * 0.26 + (q5 * 5));
      m13.position(windowWidth * 0.5 + (q * 5), windowHeight * 0.8 + (q3 * 5));
      m14.position(windowWidth * 0.5 + (q3 * 5), windowHeight * 0.78 + (q * 5));
      m15.position(windowWidth * 0.5 + (q5 * 5), windowHeight * 0.825 + (q4 * 5));
      m16.position(windowWidth * 0.5 + (q8 * 5), windowHeight * 0.81 + (q6 * 5));
      noStroke;
      // fill(100);
      ellipse(windowWidth * -0.36, windowHeight * -0.42, windowHeight * 0.075, windowHeight * 0.075);
    } else {
      t4 = 0;
      // img2 = loadImage("images/beforebg.png");
    }
  } else {
    t4 = 0;
    // img2 = loadImage("images/beforebg.png");
  }

  torush = torusw * 0.8;
  //Box@MainObject
  push();
  translate(0, 0, PosZ);
  rotateY(frameCount * 0.01 + (mouseX + mouseY) * 0.001);
  push();
  translate(0, 0, boxPosZ);
  box(boxw);
  pop();
  texture(tex2);
  //Cone
  push();
  rotateY(coneRotY);
  translate(conePosX, conePosY, conePosZ);
  rotateX(coneRotX);
  rotateZ(coneRotZ);
  rotateY(coneRotY2);
  cone(conew, coneh);
  pop();

  texture(tex4);
  //Sphere
  push();
  translate(spherePosX, spherePosY, spherePosZ);
  rotateY(PI + i1);
  rotateX(i2);
  sphere(spherew);
  pop();

  // specularMaterial(h,120,200,150);
  texture(tex3);
  //Plane
  push();
  rotateX(0.3 + -h * random(0.15) * 0.002);
  rotateY(0.5 + -h * random(0.15) * 0.002);
  translate(-windowWidth * 0.2, -windowWidth * 0.2, windowWidth * 0.05);
  plane(planew);
  pop();

  texture(tex1);
  //Ellipsoid
  push();
  translate(-windowWidth * 0.2, -windowWidth * 0.02, windowWidth * 0.005);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ellipsoid(ellipsoidw + increase3, ellipsoidw + increase, ellipsoidw + increase3);
  pop();

  texture(tex5);
  //torus
  push();
  translate(0, 0, torusPosZ);
  rotateX(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  rotateY(frameCount * 0.005);
  torus(torusw, torush);
  pop();
  pop();

  //intereaction&content
  push();
  normalMaterial();
  translate(-windowWidth * 0.45, windowHeight * 0.27);
  rotateX(q * 0.5);
  rotateY(q2 * 0.3);
  torus(windowWidth * 0.003, windowWidth * 0.003);
  pop();

  push();
  translate(-windowWidth * 0.42, windowHeight * 0.32);
  rotateX(q3 * 0.5);
  rotateY(q4 * 0.3);
  torus(windowWidth * 0.003, windowWidth * 0.003);
  pop();

  push();
  translate(-windowWidth * 0.39, windowHeight * 0.37);
  rotateX(q5 * 0.5);
  rotateY(q6 * 0.3);
  torus(windowWidth * 0.003, windowWidth * 0.003);
  pop();

  push();
  translate(-windowWidth * 0.36, windowHeight * 0.42);
  rotateX(q7 * 0.5);
  rotateY(q8 * 0.3);
  torus(windowWidth * 0.003, windowWidth * 0.003);
  pop();


  type1.hide();
  type2.hide();
  en1.hide();
  en2.hide();
  en3.hide();
  ex3.hide();
  en7.hide();
  en6.hide();
  enex.hide();
  ex1.hide();
  ex2.hide();
  ex6.hide();
  ex7.hide();
  ex8.hide();
  enex2.hide();

  if (mouseIsPressed) {
    if (click) {
      if (trigger) {
        enex2.show();
        enex2.position(windowWidth * 0.7, windowHeight * 0.65);
      } else {
        enex.show();
        enex.position(windowWidth * 0.1, windowHeight * 0.55);
      }
    
    type1.show();
    type1.position(windowWidth * 0.26, windowHeight * 0.05);
    type2.show();
    type2.position(windowWidth * 0.7, windowHeight * 0.3);
    // calYau.show();
    // calYau.position(windowWidth * 0.26 + (q2 * 5), windowHeight * 0.135 + (q6 * 5));
    }
  }
  if (keyIsPressed) {
    if (keyCode == 13) {
      enex.hide();
      enex2.hide();
      en3.show();
      en3.position(windowWidth * 0.35 + (q5 * 5), windowHeight * 0.5 + (q4 * 5));
      en1.show();
      en1.position(windowWidth * 0.46 + (q3 * 5), windowHeight * 0.45 + (q6 * 5));
      en2.show();
      en2.position(windowWidth * 0.46 + (q6 * 5), windowHeight * 0.45 + (q3 * 5));
      if (mouseX > windowWidth * 0.46 + (q3 * 5) && mouseX < windowWidth * 0.54 + (q3 * 5)) {
        if (mouseY > windowHeight * 0.45 + (q6 * 5) && mouseY < windowHeight * 0.57 + (q6 * 5)) {
          en1.hide();
          en2.hide();
          en3.hide();
          en7.show();
          en7.position(windowWidth * 0.1 + (q3 * 5), windowHeight * 0.45 + (q6 * 5));
          en6.show();
          en6.position(windowWidth * 0.1 + (q6 * 5), windowHeight * 0.7 + (q3 * 5));
        }
      }
    } else if (keyCode == 27) {
      enex.hide();
      enex2.hide();
      ex3.show();
      ex2.show();
      ex2.position(windowWidth * 0.46 + (q6 * 5), windowHeight * 0.45 + (q3 * 5));
      ex3.position(windowWidth * 0.55 + (q5 * 5), windowHeight * 0.5 + (q4 * 5));
      ex1.show();
      ex1.position(windowWidth * 0.44 + (q3 * 5), windowHeight * 0.42 + (q6 * 5));
      if (mouseX > windowWidth * 0.46 + (q3 * 5) && mouseX < windowWidth * 0.54 + (q3 * 5)) {
        if (mouseY > windowHeight * 0.45 + (q6 * 5) && mouseY < windowHeight * 0.57 + (q6 * 5)) {
          ex3.hide();
          ex1.hide();
          ex2.hide();
          ex7.show();
          ex7.position(windowWidth * 0.1 + (q3 * 5), windowHeight * 0.2 + (q6 * 5));
          ex8.show();
          ex8.position(windowWidth * 0.2 + (q3 * 5), windowHeight * 0.45 + (q6 * 5));
          ex6.show();
          ex6.position(windowWidth * 0.8 + (q6 * 5), windowHeight * 0.4 + (q3 * 5));
        }
      }
    }

    // ellipse(windowWidth * -0.45, windowHeight * -0.3, windowHeight * 0.1, windowHeight * 0.1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

// function mouseMoved() {
// rotateY(mouseX + mouseY);
// }