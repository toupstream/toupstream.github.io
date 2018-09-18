var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var se;
var pic = true;
var of = 0;
var an = 0;

function preload() {
  img = loadImage("/Images/InterP2/0.png");
  img1 = loadImage("/Images/InterP2/1.png");
  img2 = loadImage("/Images/InterP2/2.png");
  img3 = loadImage("/Images/InterP2/3.png");
  img4 = loadImage("/Images/InterP2/4.png");
  img5 = loadImage("/Images/InterP2/5.png");
  img6 = loadImage("/Images/InterP2/6.png");
  img7 = loadImage("/Images/InterP2/7.png");
  img1_1 = loadImage("/Images/InterP2/1-1.png");
  img1_2 = loadImage("/Images/InterP2/1-2.png");
  img1_3 = loadImage("/Images/InterP2/1-3.png");
  img1_4 = loadImage("/Images/InterP2/1-4.png");
  img1_5 = loadImage("/Images/InterP2/1-5.png");
  img2_1 = loadImage("/Images/InterP2/2-1.png");
  img2_2 = loadImage("/Images/InterP2/2-2.png");
  img2_3 = loadImage("/Images/InterP2/2-3.png");
  img2_4 = loadImage("/Images/InterP2/2-4.png");
  img2_5 = loadImage("/Images/InterP2/2-5.png");
  img3_1 = loadImage("/Images/InterP2/3-1.png");
  img3_2 = loadImage("/Images/InterP2/3-2.png");
  img3_3 = loadImage("/Images/InterP2/3-3.png");
  img3_4 = loadImage("/Images/InterP2/3-4.png");
  img3_0 = loadImage("/Images/InterP2/3-0.png");
  img3_01 = loadImage("/Images/InterP2/3-01.png");
  se = loadSound("Sounds/1.wav");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 2.5);
  c1 = loadFont('/Font/c1.ttf');
  c11 = loadFont('/Font/c11.ttf');
  c0 = loadFont('/Font/c0.ttf');
  e111 = loadFont('/Font/e111.otf');
  e11 = loadFont('/Font/e11.otf');
  e1 = loadFont('/Font/e1.otf');
  e0 = loadFont('/Font/e0.otf');
  e00 = loadFont('/Font/e00.otf');
  imageMode(CENTER);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
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
  var r1p = random(windowWidth * 0.0008);
  var r2p = random(windowWidth * 0.0008);
  var r3p = random(windowWidth * 0.0008);
  var r1m = random(- +windowWidth * 0.0008);
  var r2m = random(- +windowWidth * 0.0008);
  var r3m = random(- +windowWidth * 0.0008);
  var r4m = random(- +windowWidth * 0.0008);
  var rt = abs(windowHeight * map(dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2), windowWidth / 2, windowHeight / 2, 0, 1));
  var rt2 = abs(windowWidth * map(dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2), mouseX - windowWidth / 2, mouseY - windowHeight / 2, 0, 0.5));
  var p = img.height / windowHeight;
  var p1 = img.height / rt;
  var p2 = (img.width * 1.5) / windowWidth;
  var p3 = (img.width * 1.5) / rt2;

  if (p > 1) {
    p = windowWidth / img.width;
    p1 = rt2 / img.width;
    // image(img, windowWidth * 0.5, windowHeight * 0.5, imgw, windowHeight);

  }
  if (p2 > 1) {
    p2 = windowWidth / (img.width * 1.5);
    p3 = rt2 / (img.width * 1.5);
  }
  var pp = p / 1.5
  var imgw = img.width * p2;
  var imgh = img.height * pp;
  var imgy = imgh / 2;
  var img1w = img1.width * pp;
  var img1h = img1.height * pp;
  var img2w = img2.width * pp;
  var img2h = img2.height * pp;
  var img3w = img3.width * pp;
  var img3h = img3.height * pp;
  var img4w = img4.width * pp;
  var img4h = img4.height * pp;

  var imgh1 = img.height * (p / 1.5);
  var imgw1 = img.width * p2;
  var img4x1 = img.width * p2 * 0.87 - ((y1 - r4) * 0.05);
  var img4y1 = imgh1 * 0.83 - ((x1 - r3) * 0.05);
  var img4w1 = img4.width * (p / 1.5);
  var img4h1 = img4.height * (p / 1.5);

  of += 0, 01;
  an += -PI / 180
  var s1 = sin(an);

  //position

  var img1x = imgw * 0.85 + ((x1 + r1) * 0.15);
  var img1y = imgh * 0.82 + ((y1 + r2) * 0.15);
  var img2x = imgw * 0.9 - x1 + r3;
  var img2y = imgh * 0.8 + y1 + r4;
  var img3x = imgw * 0.81 + ((y1 - r2) * 0.5);
  var img3y = imgh * 0.76 - ((x1 - r1) * 0.5);
  var img4x = imgw * 0.87 - ((y1 - r4) * 0.05);
  var img4y = imgh * 0.83 - ((x1 - r3) * 0.05);

  image(img, windowWidth * 0.5, imgy, windowWidth / 1.5, imgh);
  image(img1, img1x, img1y, img1w, img1h);
  image(img2, img2x, img2y, img2w, img2h);
  image(img3, img3x, img3y, img3w, img3h);
  image(img4, img4x, img4y, img4w, img4h);
  translate(0, imgh / 2);
  //top layer
  var img5w = img5.width * pp;
  var img5h = img5.height * pp;
  var img6w = img6.width * pp;
  var img6h = img6.height * pp;
  var img7w = img7.width * pp;
  var img7h = img7.height * pp;
  var img1_1w = img1_1.width * pp;
  var img1_1h = img1_1.height * pp;
  var img1_2w = img1_2.width * pp;
  var img1_2h = img1_2.height * pp;
  var img1_3w = img1_3.width * pp;
  var img1_3h = img1_3.height * pp;
  var img1_4w = img1_4.width * pp;
  var img1_4h = img1_4.height * pp;
  var img1_5w = img1_5.width * pp;
  var img1_5h = img1_5.height * pp;
  var img2_1w = img2_1.width * pp;
  var img2_1h = img2_1.height * pp;
  var img2_2w = img2_2.width * pp;
  var img2_2h = img2_2.height * pp;
  var img2_3w = img2_3.width * pp;
  var img2_3h = img2_3.height * pp;
  var img2_4w = img2_4.width * pp;
  var img2_4h = img2_4.height * pp;
  var img2_5w = img2_5.width * pp;
  var img2_5h = img2_5.height * pp;
  var img3_1w = img3_1.width * pp;
  var img3_1h = img3_1.height * pp;
  var img3_2w = img3_2.width * pp;
  var img3_2h = img3_2.height * pp;
  var img3_3w = img3_3.width * pp;
  var img3_3h = img3_3.height * pp;
  var img3_4w = img3_4.width * pp;
  var img3_4h = img3_4.height * pp;
  // translate(0, imgh / 2);
  image(img6, imgw * 0.245 + x1 + r3, imgh * 1.15 - y1 + r4, img6w, img6h);
  image(img5, imgw * 0.67 + x1 + r1, imgh * 0.93 + y1 + r2, img5w, img5h);
  image(img7, imgw * 1.2 + y1 - r2, imgh * 1.2 - x1 - r1, img7w, img7h);
  image(img1_1, imgw * 0.87 + x1 * 0.8 + r1 + r1m, imgh * 0.65 + y1 * 0.6 + r2 + r2m, img1_1w, img1_1h);
  image(img2_1, imgw * 0.87 + x1 * 0.6 + r1 - r3m, imgh * 0.65 + y1 * 0.5 + r2 - r4m, img2_1w, img2_1h);
  image(img1_2, imgw * 0.6 + x1 * 0.5 + r1 - r1m, imgh * 0.75 + y1 * 0.3 + r2 - r2m, img1_2w, img1_2h);
  image(img2_2, imgw * 0.6 + x1 * 0.3 + r1 + r3m, imgh * 0.75 + y1 * 0.2 + r2 + r4m, img2_2w, img2_2h);
  image(img1_3, imgw * 0.515 + x1 * 0.6 + r1 + r1m, imgh * 0.98 + y1 * 0.8 + r2 + r2m, img1_3w, img1_3h);
  image(img2_3, imgw * 0.45 + x1 * 0.4 + r1 - r3m, imgh * 0.975 + y1 * 0.7 + r2 - r4m, img2_3w, img2_3h);
  image(img1_4, imgw * 0.89 + x1 * 1.2 + r1 + r1m, imgh * 1.2 + y1 * 0.6 + r2 + r2m, img1_4w, img1_4h);
  image(img2_4, imgw * 0.89 + x1 + r1 - r3m, imgh * 1.2 + y1 * 0.5 + r2 - r4m, img2_4w, img2_4h);
  image(img1_5, imgw * 0.615 + x1 * 0.9 + r1 + r1m, imgh * 1.35 + y1 * 0.7 + r2 + r2m, img1_5w, img1_5h);
  image(img2_5, imgw * 0.615 + x1 * 0.7 + r1 - r3m, imgh * 1.35 + y1 * 0.6 + r2 - r4m, img2_5w, img2_5h);
  image(img3_1, imgw * 0.72 + x1 * 1.1 + r1 - r1m, imgh * 0.48 + y1 * 0.7 + r2 + r2m, img3_1w, img3_1h);
  image(img3_2, imgw * 0.7 + x1 * 0.9 + r1 - r1m, imgh * 0.9 + y1 * 0.78 + r2 + r2m, img3_2w, img3_2h);

  image(img3_4, imgw * 0.54 + x1 * 0.6 + r1 - r3m, imgh + y1 * 0.5 + r2 - r4m, img3_4w, img3_4h);
  if (pic) {
    image(img3_3, imgw * 0.64 + x1 * 0.6 + r1 - r3m, imgh * 0.98 + y1 * 0.5 + r2 - r4m, img3_3w, img3_3h);
  }
  if (mouseIsPressed) {
    image(img3_1, windowWidth * 3.2 - x1 * 2.5, windowHeight * 1.5 - y1 * 3 + r2);
    frameRate(3);
  } else {
    frameRate(30);
  }


  if (mouseIsPressed) {
    filter(INVERT);
    textFont(e111, 36);
    fill(random(50, 60), 40, 30);
    text("Report of 'Vxwge' extreme horrible disaster", imgw * 0.415 + x1 + r1, rt * 0.12 - imgh / 2 + y1 + r2);

    textFont(e1, 12);
    push();
    rotate(noise(12 + of) * -PI / 36);
    translate(noise(65 + of) * imgh * 0.1, 0);
    applyMatrix(1, 0, -s1 * 0.2, 1, 0, 0);
    p1 = 'Digest: The irresistible super natural all-plane-covered horrible disaster Vxwge destroy almost the whole plane and did killed almost all creatures. Now we conclude the possible inducement, for further searches and discovers.'
    text(p1, (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 1.1 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();


    push();
    rotate(noise(12 + of) * PI / 36);
    translate(noise(135 + of) * imgh * 0.1, 0);
    applyMatrix(1, 0, s1 * 0.5, 1, 0, 0);
    textFont(e11, 16);
    text("The process of Vxwge", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.97 + y1 + r2);

    textFont(e1, 12);
    ellipse((img4x - imgw / 1.52) + x1 + r1, img4y - imgh * 0.94 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw / 1.52) + x1 + r1, img4y - imgh * 0.89 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw / 1.52) + x1 + r1, img4y - imgh * 0.84 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw / 1.52) + x1 + r1, img4y - imgh * 0.77 + y1 + r2, 4.5, 4.5);
    p1 = 'C Hs chmu, southwest of jSIULY suddenly had been suffered from erosion and transform. After 30mu it slows down and moves to GIUpj area.'
    text(p1, (img4x - imgw / 1.55) + x1 + r1, img4y - imgh * 0.95 + y1 + r2, img4w / 1.55, img4h / 2);
    p1 = 'F Hs wsmu, the boundary of bHAWTIN and  uLOWjc suffered from erosion and transform, about 3542ium active area disappeared in 20mu.'
    text(p1, (img4x - imgw / 1.55) + x1 + r1, img4y - imgh * 0.9 + y1 + r2, img4w / 1.55, img4h / 2);
    p1 = 'T Hs tgmu, GeOjd, Me52F, c7dDd, piNKe, dAjkSHId, Q2zk7, bErII and 62KjB both suffered from erosion and transform in less than 10mu,  in the meantime this fatal energy spread quickly, affected area increased in no time.'
    text(p1, (img4x - imgw / 1.55) + x1 + r1, img4y - imgh * 0.85 + y1 + r2, img4w / 1.55, img4h / 2);
    p1 = 'V Hs dnmu, Except xx1 and ZnCshinTEMPLE area, other spots both had been transformed severely and return to dust.'
    text(p1, (img4x - imgw / 1.55) + x1 + r1, img4y - imgh * 0.78 + y1 + r2, img4w / 1.55, img4h / 2);
    p1 = 'Nearly 97% of culture heritage, 98% of organic entity and 99.8% of arranging particle-like plane had been transformed.'
    text(p1, (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.73 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();
    push();
    rotate(noise(7 + of) * -PI / 36);
    translate(-noise(29 + of) * imgh * 0.1, 0);
    applyMatrix(1 - s1 * 0.3, 0, 0, 1, 0, 0);
    textFont(e11, 16);
    text("The cause of Vxwge", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.63 + y1 + r2);
    textFont(e1, 12);
    p1 = 'For all the time, “plane crevice” theory have worldwide acceptation. SdfmdHIULCA first said instead of an entire whole plane, our plane is consist of many broken planes. There are imperceptible void exist between different planes. When adjacent planes moving apart, undetectable energy spread and force the disaster[1] .But is fair to argue with it when this unprecedented terrible disaster appeared. If we look through this catastrophe, we will notice some differences from former events. Most obvious is the progressive relationship between time and extent.'
    text(p1, (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'After calculating, I would say that there is a possible of external intervention. This unpredictable impactful outside power could be the main cause of this horrible disaster.Even more, this unknowable power could be the source of the “plane crevice” phenomenon.'
    text(p1, (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.47 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();
    push();
    rotate(noise(8 + of) * PI / 24);
    translate(noise(2 + of) * imgh * 0.15, 0);
    applyMatrix(1, s1 * 0.25, -0.1 * s1, 1, 0, 0);
    textFont(e11, 16);
    text("Observed record", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.34 + y1 + r2);
    textFont(e1, 12);
    text("This record is given by Spontaneous Intelligence. It maintains the conventional obscure properties.", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.31 + y1 + r2);
    text("2017/03/01", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.28 + y1 + r2);
    text("Coordinate: H-5046128, 205567", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.26 + y1 + r2);
    text("Target 1, by controlling guttural muscles, to generate quiver.", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.24 + y1 + r2);
    p1 = 'When the quiver spread, inside the inter-dimensional joint of H-504,205, appeared an interval short wave valued as 36db, which disturb the atmosphere around it.'
    text(p1, (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.23 + y1 + r2, img4w / 1.5, img4h / 2);
    text("1305/2/6", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.16 + y1 + r2);
    text("Number 8520675", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.14 + y1 + r2);
    text("Inside the plane,", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.12 + y1 + r2);
    text("C Hs chmu, southwest of jSIULY, 500 dpA, 821sE j6;", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.1 + y1 + r2);
    text("C Hs cv, FdvS, 7s0 dpA, 2bv j6;", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.08 + y1 + r2);
    text("C Hs bda, GIUpj, 8ew dpA, 26w j6;", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.06 + y1 + r2);
    text("F Hs wsmu, bHAWTIN, v41gs dpA, 4fds j6;", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.04 + y1 + r2);
    text("F Hs wsmu, uLOWjc, 72ghc dpA, 8df j6;", (img4x - imgw / 1.5) + x1 + r1, img4y - imgh * 0.02 + y1 + r2);
    text("T Hs tgmu, GeOjd, 341gf dpA, 12d j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + y1 + r2);
    text("T Hs tgmu, Me52F, 27hnt dpA, 36fgv j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.02 + y1 + r2);
    text("T Hs tgmu, c7dDd, 2360begr dpA, 5fdv j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.04 + y1 + r2);
    text("T Hs tgmu, piNKe, 51bdfn dpA, 1f2 j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.06 + y1 + r2);
    text("T Hs tgmu, dAjkSHId, 84fgvf dpA, 51fgs j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.08 + y1 + r2);
    text("T Hs tgmu, Q2zk7, 125bv dpA, 60as j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.1 + y1 + r2);
    text("T Hs tgmu, bErII, 50bsd dpA, 92hjn j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.12 + y1 + r2);
    text("T Hs tgmu, 62KjB, 15y dpA, 5mf j6;", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.14 + y1 + r2);
    text("V Hs dnmu, cO|ahq, 50qox dpA, 89cx j6.", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.16 + y1 + r2);
    pop();
    push();
    rotate(noise(61 + of) * PI / 90);
    applyMatrix(1, 0, -s1 * 0.5, 1, 0, 0);
    text("DmMnefAGN, academician of Super Natural Institute", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.24 + y1 + r2);

    text("References:", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.28 + y1 + r2);
    textFont(e0, 10);
    text("[1] leieLEsdD. Brief causes of common super natural disaster [J].Super Natural Science，Excmd，16(1)：21-23.", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.3 + y1 + r2);
    text("[2] CouoGJbqnA，khE.xsZueWQ Research[M].J丝利：press by SqDbuRT，Genmd：15-18，31.", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.32 + y1 + r2);
    text("……", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.34 + y1 + r2);
    text("Appendix: Translate Rate", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.38 + y1 + r2);
    text("A ratio directly came from Spontaneous Intelligence(SI), waiting to be unveil.", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.4 + y1 + r2);
    text("A Hs(two-dimensional) = 10:29:59:85(three dimensional)", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.42 + y1 + r2);
    text("1 Hs(two-dimensional) = 0.05second(three dimensional)", (img4x - imgw / 1.5) + x1 + r1, img4y + imgh * 0.44 + y1 + r2);
    pop();
    textFont(e111, 24);
    text("i don't think so.", (img4x1 - imgw1 * 0.07) + x1 + r1, img4y1 - imgh1 * 0.23 + y1 + r2);
    text("wait, let me tell u", (img4x1 - imgw1 * 0.45) + x1 + r1, img4y1 - imgh1 * 0.16 + y1 + r2);
    text("[voice message]", (img4x1 - imgw1 * 0.47) + x1 + r1, img4y1 + imgh1 * 0.1 + y1 + r2);
    text("what?", img4x1 + x1 + r1, img4y1 + imgh1 * 0.3 + y1 + r2);
    text("lol, that was an accident", (img4x1 - imgw1 * 0.5) + x1 + r1, img4y1 + imgh1 * 0.45 + y1 + r2);
    textFont(c11, 36);
    text("“Vxwge终I级不可抗灾劫（转化还原）”灾情报告", imgw * 0.38 + x1 + r1, rt * 0.08 - imgh / 2 + y1 + r2);






    push();
    rotate(noise(2 + of) * -PI / 36);
    translate(0, noise(4 + of) * imgh * 0.1);
    applyMatrix(1, 0, s1, 1, 0, 0);
    textFont(c1, 12);
    p1 = '摘要：发生在整个面的终i级不可抗超自然灾劫“Vxwge”，几乎将全x面摧毁殆尽，屠尽生灵。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 1.1 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '现特总结其及可能的成因，以供将来的研究参考。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.9 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();
    // rotate(noise(2 + of) * -PI / 9);
    push();
    rotate(noise(6 + of) * -PI / 36);
    translate(0, noise(4 + of) * imgh * 0.1);
    applyMatrix(1, s1 * 0.1, 0, 1, 0, 0);
    textFont(c11, 16);
    text("灾劫过程", (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.99 + y1 + r2);
    textFont(c1, 12);
    ellipse((img4x - imgw * 0.09) + x1 + r1, img4y - imgh * 0.95 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw * 0.09) + x1 + r1, img4y - imgh * 0.9 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw * 0.09) + x1 + r1, img4y - imgh * 0.87 + y1 + r2, 4.5, 4.5);
    ellipse((img4x - imgw * 0.09) + x1 + r1, img4y - imgh * 0.82 + y1 + r2, 4.5, 4.5);
    p1 = 'C时chmu，j丝利地区以西南部为中心被快速侵蚀/转化，30mu内灾害（隐形I能量扩散） 蔓延到久pj地带并减速。'
    text(p1, (img4x - imgw * 0.08) + x1 + r1, img4y - imgh * 0.97 + 6 + y1 + r2, img4w / 2, img4h / 2);
    p1 = 'F时wsmu，b华钿与u锣jc交界处遭到侵蚀/转化，20mu内共3542ium活动面积消失无踪。'
    text(p1, (img4x - imgw * 0.08) + x1 + r1, img4y - imgh * 0.92 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T时tgmu，个噢jd,麻52傅,c7点多,贫克e,答jk湿的,去zK夕呃,bEr我,62KjB等地区在10mu'
    text(p1, (img4x - imgw * 0.08) + x1 + r1, img4y - imgh * 0.89 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '内先后遭到侵蚀/转化，同时造成破坏的能量极速扩散，影响范围呈几何增长。'
    text(p1, (img4x - imgw * 0.08) + x1 + r1, img4y - imgh * 0.87 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'V时dnmu，除xx1地区， 中C心神庙地区未被转化外，其余地区均基本重度转化还原。'
    text(p1, (img4x - imgw * 0.08) + x1 + r1, img4y - imgh * 0.84 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '此次灾劫中，共计97%文化遗产，98%有机生命，99.8%粒子排列面，被转化还原。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.81 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();
    textFont(c11, 16);
    push();
    rotate(noise(8 + of) * -PI / 36);
    translate(noise(2 + of) * imgh * 0.1, 0);
    applyMatrix(1, -s1 * 0.2, -0.1 * s1, 1, 0, 0);
    text("灾劫成因", (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.7 + y1 + r2);
    textFont(c1, 12);
    p1 = '很长时以来，学界普遍认同sdfmd卢户卡首先提出的“裂面”假说。即全面并非一块完整的面，'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.68 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '而是分裂的多个面。面之间存在着不可感知的虚空。面产生的异向运动会导致隐形i能量扩散，'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.66 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '形成灾劫（注1）。但很显然，该假说难以合理解释这次的灾劫。尤其是这次灾劫中，可以'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.64 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '明显发现在程度和时间之间，存在着极强烈的递进的关系。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.62 + 6 + y1 + r2, img4w / 1.5, img4h / 2);

    p1 = '经过计算，我认为，此次灾劫，存在外部干涉介入的可能。这种冲击性的不可知外力是导致'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.59 + 6 + y1 + r2, img4w / 2, img4h / 2);
    p1 = '这次灾劫的主要原因。甚至，可以合理的推测，这种外力同样是导致了面与面之间的异向运动。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.57 + 6 + y1 + r2, img4w / 2, img4h / 2);
    p1 = '的原因。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.55 + 6 + y1 + r2, img4w / 2, img4h / 2);
    pop();

    push();
    rotate(noise(12 + of) * -PI / 36);
    translate(noise(10 + of) * imgh * 0.1, 0);
    applyMatrix(1, 0, -s1 * 0.2, 1, 0, 0);
    textFont(c11, 16);
    text("观察报告", (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.48 + y1 + r2);
    textFont(c1, 12);
    p1 = '此处提供的照例是来自自发智能作出的一如既往难以理解的超自然观察报告：'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.46 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '2017/03/01'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.43 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '坐标：H-5046128, 205567'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.41 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '目标一号，通过控制喉部的肌肉，使其产生了震动。'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.39 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '这个震动，导致H-的三维空间交汇口，出现了值为36分贝的一股脉冲短波'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.37 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '这股脉冲短波扰动了周围的气流'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.35 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '1305/2/6'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.32 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '编号：8520675'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.3 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '1305/2/6'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.29 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '二维空间中，'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.27 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'C 时 chmu, 西南部 j丝利, 500 dpA, 821sE j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.25 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'C 时 cv, 珐vs, 7s0 dpA, 2bv j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.23 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'C 时 bda, 久pj, 8ew dpA, 26w j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.21 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'F 时 wsmu, b华钿, v41gs dpA, 4fds j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.19 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'F 时 wsmu, u锣jc, 72ghc dpA, 8df j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.17 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 个噢jd, 341gf dpA, 12d j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.15 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 麻52傅, 27hnt dpA, 36fgv j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.13 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, c7点多, 2360begr dpA, 5fdv j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.11 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 贫克e, 51bdfn dpA, 1f2 j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.09 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 答jk湿的, 84fgvf dpA, 51fgs j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.07 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 去zK夕呃, 125bv dpA, 60as j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.05 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, bEr我, 50bsd dpA, 92hjn j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.03 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'T 时 tgmu, 62KjB, 15y dpA, 5mf j6;'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y - imgh * 0.01 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'V 时 dnmu, 从|锕或q, 50qox dpA, 89cx j6.'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.01 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    pop();
    push();
    rotate(noise(74 + of) * -PI / 36);
    translate(-noise(19 + of) * imgh * 0.1, 0);
    applyMatrix(1 - s1 * 0.1, 0, 0, 1, 0, 0);

    p1 = '奛閍  超自然科学院院士'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.09 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '参考文献：'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.13 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    textFont(c0, 12);
    p1 = '[1] 里LE斯迪. 常见超自然灾害成因简析[J].超自然S学科，Excmd，16(1)：21-23.'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.15 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '[2] C哦GJ北南，可和.嘘阵WQ研究[M].J丝利：丝帝RT出版社，Genmd：15-18，31.'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.17 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '……'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.19 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '附：换算率'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.23 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '此为AI推导出的一则换算公式，未明其意，摘抄如下'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.25 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = 'A时（二维的）=10:29:59:85（三维的）'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.27 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
    p1 = '1时（二维的）=0.05秒（三维的）'
    text(p1, (img4x - imgw * 0.1) + x1 + r1, img4y + imgh * 0.29 + 6 + y1 + r2, img4w / 1.5, img4h / 2);
  }
  link.position(imgw * 0.5 + x1 + r1, height * 0.92 + y1 + r2);

  var x_2 = 0;
  var y_2 = 0;

  while (x_2 < img3_0.width) {
    var i_2 = 20;
    var r_2 = random(15, 30);
    while (i_2 < r_2) {
      copy(img3_0, x_2, 0, 1 + random(5), img3_0.height, windowWidth * 0.5 - img3_0.width * 0.75 + x1 + random(5), y_2 + windowHeight * 1.5 + random(1), 1 + random(5), img3_0.height);
      x1++;
      i_2++;
    }
    x_2 = x_2 + random(1.5, 4);
  }
  if (mouseIsPressed) {
    image(img3_01, windowWidth * 3.2 - x1 * 2.5, windowHeight * 1.8 - y1 * 3 + r2);
    frameRate(3);
  } else {
    frameRate(30);
  }
  var se1 = true;

  if (mouseX > -imgw * 0.55 + x1 * 0.6 && mouseX < -imgw * 0.45 + x1 * 0.6) {
    if (mouseY > imgh * 1.35 + y1 * 1.9 && mouseY < imgh * 1.53 + y1 * 0.8) {
      pic = false;
      se1 = false;
    } else {
      pic = true;
      se1 = true;
      // print("10");
    }
  } else {
    pic = true;
    se1 = true;
  }
  if (se.isPlaying()) {
    se1 = true;
  }
  if (!se1) {
    se.play();
    se1 = !se;
  }

  // var x_2=0;
  // var y_2=0;
  //   while (x_2 < img3_0.width) {
  //     var i_2 = 20;
  //     var r_2 = random(15, 30);
  //     while (i_2 < r_2) {
  //       copy(img3_0, x_2, 0, 1 + random(5), img3_0.height, windowWidth * 0.5 - img3_0.width * 0.75 + x1 + random(5), y_2 + windowHeight * 0.85 + random(1), 1 + random(5), img3_0.height);
  //       x1++;
  //       i_2++;
  //     }
  //     x_2 = x_2 + random(1.5, 4);
  //   }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 2.5);
  background(0);
}