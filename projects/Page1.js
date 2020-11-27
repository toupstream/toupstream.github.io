var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img;
var img3_0;
var of = 0;
var og = 0;
var lifespan = 255;
var lifespan2 = 255;
var lifespan3 = 255;
var lifespan4 = 255;
var lifespan5 = 255;
var s = "结终是不并亡死，的是";
var s2 = "这不是生物本能嘛？";
var s3 = "I guess that’s just nature of creatures.";

function preload() {
  //loadimages
  img = loadImage("Images/InterP1/0.png");
  img1 = loadImage("Images/InterP1/1.png");
  img2 = loadImage("Images/InterP1/2.png");
  img3 = loadImage("Images/InterP1/3.png");
  img4 = loadImage("Images/InterP1/4.png");
  img5 = loadImage("Images/InterP1/5.png");
  img6 = loadImage("Images/InterP1/6.png");
  img7 = loadImage("Images/InterP1/7.png");
  img2_1 = loadImage("Images/InterP1/2-1.png");
  img2_2 = loadImage("Images/InterP1/2-2.png");
  img2_3 = loadImage("Images/InterP1/2-3.png");
  img2_4 = loadImage("Images/InterP1/2-4.png");
  img2_5 = loadImage("Images/InterP1/2-5.png");
  img2_6 = loadImage("Images/InterP1/2-6.png");
  img2_7 = loadImage("Images/InterP1/2-7.png");
  img2_8 = loadImage("Images/InterP1/2-8.png");
  img3_0 = loadImage("Images/InterP1/3-0.png");
  img3_1 = loadImage("Images/InterP1/3-1.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 5.5);
  c1 = loadFont('/Font/c1.ttf');
  c11 = loadFont('/Font/c11.ttf');
  e1 = loadFont('/Font/e1.otf');
  e0 = loadFont('/Font/e0.otf');
  imageMode(CENTER);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // link = createA('/page2.html', 'next page');
}

function draw() {
  of += 0.01;
  background(0);
  var link = select('#img');
  var x = 0;
  var y = 0;
  var x1 = windowWidth * 0.00005 * mouseX;
  var y1 = windowHeight * 0.00005 * mouseY;
  var r1 = random(- +windowWidth * 0.0008);
  var r2 = random(- +windowWidth * 0.0008);
  var r3 = random(- +windowWidth * 0.0008);
  var r4 = random(- +windowWidth * 0.0008);
  var p = img7.height / windowHeight;
  var p2 = img7.width / windowWidth;
  // var p3 = img7.height / windowHeight

  if (p > 1) {
    p = windowWidth / img7.width;
    image(img7, windowWidth * 0.5, windowHeight * 0.5, img7w, windowHeight);
    // image(img2_8, windowWidth * 0.5, windowHeight * 0.5, img2_8w, windowHeight);
  }

  if (p2 > 1) {
    p2 = windowWidth / img7.width;
  }
  //make the iamges' sizes responsive
  var img1w = img1.width * p * 1.2;
  var img1h = img1.height * p * 1.2;
  var img7w = img7.width * p2;
  var img7h = img7.height * p;
  var img2w = img2.width * p * 1.1;
  var img2h = img2.height * p * 1.1;
  var img3w = img3.width * p * 1.2;
  var img3h = img3.height * p * 1.2;
  var img4w = img4.width * p * 1.2;
  var img4h = img4.height * p * 1.2;
  var img5w = img5.width * p * 1.2;
  var img5h = img5.height * p * 1.2;
  var img6w = img6.width * p;
  var img6h = img6.height * p;
  var img7y = img7h / 2;


  image(img7, windowWidth * 0.5, img7y, windowWidth, img7h);


  //tittle

  if (mouseY < windowHeight * 0.2) {
    while (x < img.width) {
      var r = random(15, 30);
      var i = 20;
      while (i < r) {
        copy(img, x, 0, 1 + random(5), img.height, x1 + random(5), y + random(1), 1 + random(5), img.height);
        x1++;
        i++;
      }
      x = x + random(1, 2.5);
    }
  }
  var img1x = img7w * 0.45 + x1 + r1;
  var img1y = windowHeight * 0.23 + y1 + r2;
  var img2x = img7w * 0.58 - x1 + r3;
  var img2y = windowHeight * 0.43 + y1 + r4;
  var img3x = img7w * 0.59 + y1 - r2;
  var img3y = windowHeight * 0.68 - x1 - r1;
  var img4x = img7w * 0.59 - y1 - r4;
  var img4y = windowHeight * 0.84 - x1 - r3;
  var img5x = img7w * 0.76 - x1 + r2;
  var img5y = img7y * 0.42 + x1 - r1;

  //Refresh lifspan

  if (mouseX >= img1x - img1w / 2 && mouseX < img1x + img1w / 2) {
    if (mouseY >= img1y - img1h / 2 && mouseY < img1y + img1h / 2)
      lifespan = 255;
  }
  if (mouseX >= img2x - img2w / 2 && mouseX < img2x + img2w / 2) {
    if (mouseY >= img2y - img1h / 2 && mouseY < img2y + img1h / 2)
      lifespan2 = 255;
  }
  if (mouseX >= img3x - img3w / 2 && mouseX < img3x + img3w / 2) {
    if (mouseY >= img3y - img3h / 2 && mouseY < img3y + img3h / 2)
      lifespan3 = 255;
  }
  if (mouseX >= img4x - img4w / 2 && mouseX < img4x + img4w / 2) {
    if (mouseY >= img4y - img4h / 2 && mouseY < img4y + img4h / 2)
      lifespan4 = 255;
  }
  if (mouseX >= img5x - img5w / 2 && mouseX < img5x + img5w / 2) {
    if (mouseY >= img5y - img5h / 2 && mouseY < img5y + img5h / 2)
      lifespan5 = 255;
  }




  //display P1 images
  tint(255, lifespan);
  image(img1, img1x, img1y, img1w, img1h);
  noTint();
  tint(255, lifespan2);
  image(img2, img2x, img2y, img2w, img2h);
  noTint();
  tint(255, lifespan3);
  image(img3, img3x, img3y, img3w, img3h);
  noTint();
  tint(255, lifespan4);
  image(img4, img4x, img4y, img4w, img4h);
  noTint();
  tint(255, lifespan5);
  image(img5, img5x, img5y, img5w, img5h);
  noTint();
  lifespan = lifespan - random(8);
  lifespan2 = lifespan2 - random(6);
  lifespan3 = lifespan3 - random(8);
  lifespan4 = lifespan4 - random(6);
  lifespan5 = lifespan5 - random(2);
  image(img6, windowWidth * 0.25 + x1, img7y * 0.58 - y1, img6w, img6h);



  //resize P2
  var p2_1 = windowHeight / img2_8.height;
  var p2_2 = windowWidth / img2_8.width;
  var img2_1w = img2_1.width * p2_1 * 1.2;
  var img2_1h = img2_1.height * p2_1 * 1.2;
  var img2_2w = img2_2.width * p2_1 * 1.2;
  var img2_2h = img2_2.height * p2_1 * 1.2;
  var img2_3w = img2_3.width * p2_1 * 1.2;
  var img2_3h = img2_3.height * p2_1 * 1.2;
  var img2_4w = img2_4.width * p2_1 * 1.2;
  var img2_4h = img2_4.height * p2_1 * 1.2;
  var img2_5w = img2_5.width * p2_1;
  var img2_5h = img2_5.height * p2_1;
  var img2_6w = img2_6.width * p2_1 * 1.2;
  var img2_6h = img2_6.height * p2_1 * 1.2;
  var img2_7w = img2_7.width * p2_1 * 1.2;
  var img2_7h = img2_7.height * p2_1 * 1.2;
  var img2_8w = img2_8.width * p2_2;
  var img2_8h = img2_8.height / p2_1;
  var img2_3w2 = img2_3.width * p2_1 * 1.5;
  var img2_3h2 = img2_3.height * p2_1 * 1.5;


  if (p2_1 < 1) {
    p2_1 = windowWidth / img2_8.width;
  }

  if (p2_2 > 1) {
    p2_2 = windowWidth / img2_8.width;
  }

  //displayP2
  translate(0, img7.height);
  image(img2_8, windowWidth * 0.5, windowHeight * 0.8, windowWidth, img2_8h);
  image(img2_1, img2_8w * 0.37 + x1 + r1, windowHeight * 0.58 + y1 + r2, img2_1w, img2_1h);
  image(img2_2, img2_8w * 0.45 - x1 + r3, windowHeight * 0.42 + y1 + r4, img2_2w, img2_2h);
  image(img2_3, img2_8w * 0.49 + y1 - r2, windowHeight * 0.88 - x1 - r1, img2_3w, img2_3h);
  image(img2_4, img2_8w * 0.64 - y1 - r4, windowHeight * 0.89 - x1 - r3, img2_4w, img2_4h);
  image(img2_5, windowWidth * 0.5, windowHeight * 0.8, windowWidth, img2_8h);
  image(img2_6, img2_8w * 0.48 + x1, windowHeight * 0.8 - y1, img2_6w, img2_6h);
  image(img2_7, img2_8w * 0.32, windowHeight * 0.95, img2_7w, img2_7h);

  //content reformat
  translate(0, -img7.height);
  if (mouseIsPressed) {
    image(img7, windowWidth * 0.5, img7y, windowWidth, img7h);
    image(img2_8, windowWidth * 0.5, windowHeight * 0.8 + img7.height, windowWidth, img2_8h);
    filter(INVERT);
    // fill(random(200, 210), 215, random(210, 220));
    // noStroke();
    // rect(img7w * 0.45 - 10 + x1 + r1, windowHeight * 0.2 - 38 + y1 + r2, 530, 50);
    // rect(img7w * 0.45 - 10 + x1 + r1, windowHeight * 0.26 - 38 + y1 + r2, 350, 50);
    textFont(c11, 30);
    fill(random(50, 60), 40, 30);
    textAlign(LEFT);
    push();
    rotate(noise(45 + of) * -PI / 9);
    push();
    rotate(noise(25 + of) * PI / 36);
    text("原来，你的其他族人都已经……", img7w * 0.45 + x1 + r1 + noise(61 + of) * 5, windowHeight * 0.3 + y1 + r2);
    pop();
    push();
    rotate(noise(10 + of) * PI / 45);
    text("长老，你不要太悲伤。", img7w * 0.45 + x1 + r1 - noise(6 + of) * 5, windowHeight * 0.36 + y1 + r2);
    pop();
    textFont(e1, 30);
    rotate(noise(3 + of) * -PI / 90);
    text("Master, I know your same kind are almost extinct.", img7w * 0.45 + x1 + r1 + noise(8 + of) * 2, windowHeight * 0.42 + y1 + r2);
    translate(noise(2 + of) * 2, noise(1 + of));
    rotate(noise(6 + of) * PI / 45);
    text("I’m sorry about that.", img7w * 0.45 + x1 + r1, windowHeight * 0.46 + y1 + r2);
    pop();
    push();
    rotate(noise(65 + of) * PI / 9);
    textFont(c1, 22);
    text("不必替我悲伤，生活在三维的地球人。死亡并不是终结。", img7w * 0.21 + x1 + r1, windowHeight * 0.25 + y1 + r2);
    textFont(e0, 18);
    rotate(noise(7 + of) * PI / 60);
    text("Don’t be sorry, terran from three-dimensional earth. Death is not the end.", img7w * 0.21 + x1 + r1, windowHeight * 0.26 + y1 + r2);
    pop();
    textAlign(RIGHT);
    textFont(c11);
    // text("是的，死亡并不是终结", img7w * 0.65 + x1 + r1, windowHeight * 0.56 + y1 + r2);
    var u = img7w * 0.035;
    var sx = img7w * 0.65 + x1 + r1;
    og += 0.01;
    for (i = 0; i < s.length; i++) {
      var cd = s.charAt(i);
      textSize(20 + noise(og) * 20);
      text(cd, sx, windowHeight * 0.52 + y1 + r2 + noise(6 + of) * u);
      sx = sx - textWidth(cd) + map(noise(og), -1, 1, -200, 50);
    }
    textFont(e1, 30);
    text("Right,death is not he end.", img7w * 0.65 + x1 + r1, windowHeight * 0.56 + y1 + r2 + noise(12 + of) * u);
    // textAlign(CENTER);
    push();
    textFont(c1, 22);
    rotate(noise(13 + of) * -PI / 90);
    text("不，我的意思是，死亡才是生命的圆满。", img7w * 0.51 + x1 + r1, windowHeight * 0.68 + y1 + r2);
    rotate(noise(16 + of) * -PI / 90);
    text("宇宙里还有很多像地球人一样的种族，始终没有找到生命的归宿。", img7w * 0.51 + x1 + r1, windowHeight * 0.72 + y1 + r2);
    rotate(noise(18 + of) * PI / 90);
    text("所以才漫无目的的存在，用尽手段让种族延续下去。", img7w * 0.51 + x1 + r1, windowHeight * 0.76 + y1 + r2);
    textFont(e0, 18);
    rotate(noise(22 + of) * -PI / 80);
    text("No. What I mean is death is the sublime of a complete life. We leave when we end it. ", img7w * 0.51 + x1 + r1, windowHeight * 0.79 + y1 + r2);
    rotate(noise(27 + of) * PI / 60);
    text("Most species living in the space are just like human being, which never found their belonging. ", img7w * 0.51 + x1 + r1, windowHeight * 0.815 + y1 + r2);
    rotate(noise(31 + of) * PI / 75);
    text("You are all living without destinations, yet striving for breeding. ", img7w * 0.51 + x1 + r1, windowHeight * 0.84 + y1 + r2);
    // textAlign(CENTER);
    pop();
    textFont(c11);
    // text("这不是生物本能嘛？", img7w * 0.28 + x1 + r1, windowHeight * 2.37 + y1 + r2);
    var sx1 = img7w * 0.28 + x1 + r1;
    for (j = 0; j < s2.length; j++) {
      var cd1 = s2.charAt(j);
      fill(map(noise(og + j), 0, 1, 0, 200));
      textSize(10 + noise(og + j * 0.5) * 30);
      text(cd1, sx1, windowHeight * 2.37 + y1 + r2);
      sx1 = sx1 + textWidth(cd1) + map(noise(og + j * 0.5), -1, 1, -100, 50);
    }
    textFont(e1, 30);
    text("I guess that’s just nature of creatures.", img7w * 0.48 + x1 + r1, windowHeight * 2.43 + y1 + r2);
    textFont(c1, 22);
    text("这是浪费资源。", img7w * 0.47 + x1 + r1, windowHeight * 2.62 + y1 + r2);
    textFont(e0, 18);
    text("That’s wasting resources.", img7w * 0.47 + x1 + r1, windowHeight * 2.65 + y1 + r2);
  }

  //end
  translate(0, img7.height);
  translate(0, img2_8.height);
  image(img2_3, img2_8w * 0.45 + x1 + r2, windowHeight * 0.85 - y1 - r1, img2_3w2, img2_3h2);
  var x_2 = 0;
  var y_2 = 0;

  link.position((img7w * 0.45 - link.width / 2) + x1 + r1, height * 0.92 + y1 + r2);
  //待续及章节名

  while (x_2 < img3_0.width) {
    var i_2 = 20;
    var r_2 = random(15, 30);
    while (i_2 < r_2) {
      copy(img3_0, x_2, 0, 1 + random(5), img3_0.height, windowWidth * 0.5 - img3_0.width * 0.75 + x1 + random(5), y_2 + windowHeight * 0.85 + random(1), 1 + random(5), img3_0.height);
      x1++;
      i_2++;
    }
    x_2 = x_2 + random(1.5, 4);
  }
  if (mouseIsPressed) {
    image(img3_1, windowWidth * 1.6 - x1, windowHeight * 1.85 - y1 * 3 + r2);

  }
  // frameRate(20);
  // } else {
  //   frameRate(30);
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 5.5);
  background(0);
}

// function mousePressed() {
//   background(100);
//   frameRate(30);
// }

// function mouseDragged() {
//   background(100);
// }

// function mouseReleased() {

//   background(0);
// }




// function mouseMoved() {
//     image(img7, windowWidth * 0.5, windowHeight * 0.5);
// }