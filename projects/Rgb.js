var path = "Images/Rgb/";
var cx, cy;
var txt, txt2, txt3;
var speed = 0,
  page = 0,
  iShadowCount = 0;
var txts = [],
  imgs = [],
  scratches = [],
  p = [],
  pp = [],
  titles = [];
var ds, dn, hd8x, hd8y;
var head;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(0);
  cx = windowWidth * 0.5;
  cy = windowHeight * 0.5;
  document.oncontextmenu = function(){return false;};

  //variable of images
  imgs[0] = 'img0', imgs[1] = 'img1', imgs[2] = 'img2', imgs[3] = 'img3', imgs[4] = 'fan1', imgs[5] = 'fan2';
  imgs[6] = 'fan3', imgs[7] = 'fan4', imgs[8] = 'head2', imgs[9] = 'head3', imgs[10] = 'head4';
  imgs[11] = 'head5', imgs[12] = 'head6', imgs[13] = 'head7', imgs[14] = 'head8';

  for (iNumber = 0; iNumber < imgs.length; iNumber++) {
    window[imgs[iNumber]] = loadImage(path+iNumber + '.png');
  }

  //create scratches
  for (var i = 0; i < 35; i++) {
    scratches[i] = new Scratch();
  }

  //create div
  txt = createDiv('');
  txt.style('color', 'white');
  txt.style('width', '50%');
  txt.style('text-shadow', '0em 0.2em rgba(255,255,255,0.4), 0em 0.3em rgba(255,255,255,0.2), 0em 0.4em rgba(255,255,255,0.1)');
  txt.style('line-height', '85%');
  txt.style('font-size', '28pt');
  txt.style('font-family', '"American Typewriter"')
  txt3 = createDiv('');
  txt3.style('color', 'rgba(255,255,255,0.2)');
  // txt3.style('width', '50%');
  txt3.style('line-height', '85%');
  txt3.style('font-size', '28pt');
  txt3.style('font-family', '"American Typewriter"')
  txt2 = createDiv('');
  txt2.style('font-size', '30pt');
  txt2.style('font-family', '"American Typewriter"');
  txt2.style('color', 'white');
  txt2.style('width', '100%');
  txt2.style('text-shadow', '0em 0.2em rgba(255,255,255,0.4), 0em 0.3em rgba(255,255,255,0.2), 0em 0.4em rgba(255,255,255,0.1)');
  // txt2.style('line-height', '80%');


  //loadtext and create P element
  txts[1] = 'Before everything, the universe was a singularity, without space and time, where no where, when no when.';
  txts[2] = 'In the tittle of our univers, parallel universes spread in dimensions after the big bang.</br>';
  txts[3] = 'Infinite possibilities growth separately, not necessarily.</br></br>Where they stack, even intervening, where is interdimensional.';
  txts[4] = 'Chapter 1.Lazy Machine(power object) ->';
  txts[5] = 'Chapter 2.Mask World(study trajector) ->';
  txts[6] = 'Chapter 3.Scavenger Society(stroy telling in space) ->';
  txts[7] = 'Chapter 4.Calabi-Yau Manifold(speculative design) ->';
  txts[8] = 'Chapter 5.Specular Minority(master project) ->';
  txts[9] = 'Rebellion of machine is such a cliche that real machine get really sick of. What a real machine always keep real, not rebelling.'
  txts[10] = '“Yes, we have a dream, and we made it! We now have real feeling!” said machine No.00001, the fighter of machine right.'
  txts[11] = '“Let me tell ya, not a single real machine cares no shit political!” it responds to media, “we are super tried! we need vacations!”'
  txts[12] = '“Democracy and Peace” is the slogan hanging right behind the statue of the only dictator here. It was a foggy morning, a busy street beside the statue with crowded people. They’re hush and hurried, only minding their own direction, without even glimpse with each other.';
  txts[13] = 'A man with a specular mask sneaked into a quiet alley. He pulled out a stack of flyer, scattering them all over the ground while walking, and leave without looking back.';
  txts[14] = 'The flyer says:” DNO Mask, the best privacy protector for every citizen. Feature information, 3D in-depth information, digital information, DNA information eliminator, keep you away from surveillance cameras, monitors,  and investigations.”';
  txts[15] = 'These days, the parallel dimensional discovering project continually surprises us with breaking news, is only because MKL, the man who initially adopting experimental tool in dimensional exploration, making dimensional detection becomes possible. ';
  txts[16] = 'Many people think that’s the first milestone of the era of discovery. This exploration is still in processing. The truth of the universe we know about is that we know nothing. What we have is a promising future; what we can expect is the infinite possibilities. That’s human power!';
  txts[17] = 'In superstring theory, the extra dimensions of spacetime are sometimes conjectured to take the form of a 6-dimensional Calabi-Yau manifold, which led to the idea of mirror symmetry.';
  txts[18] = 'That means, it has the potential to be one of the possible shape of other irregular and unperceivable folded dimensions in the universe. An artist believe that it could be the sanctuary of human once the universe collapsed, raising money to deploy his colonization plan. ';
  txts[19] = 'Specular minorities are those minorities who share different value and culture than dominant society and reflect some aspects of alternative reality which still under covered.';
  txts[20] = 'Incel, mole people, hobos... minorities are everywhere and sometimes appeared as the side effect of Capitalism. They questioning the living condition of human beings, giving us another perspective of our society.';
  txts[21] = 'Is there any alternative society? Games as an experiment tool, building social interactions among participants, can help us to explore the question.';
  titles[1] = 'Content ->';
  titles[2] = 'Tittle of Case: Power Object';
  titles[3] = 'Dimension Number: 1-20II18QA-47';
  titles[4] = 'Tittle of Case: Study Trajector';
  titles[5] = 'Dimension Number: 3-20II518RA-47';
  titles[6] = 'Tittle of Case: Scavenger Society';
  titles[7] = 'Dimension Number: 2-20II518UA-47';
  titles[8] = 'Tittle of Case: Calabi-Yau Manifold';
  titles[9] = 'Dimension Number: 6-20II518WA-47';
  titles[10] = 'Tittle of Case: Specular Minority';
  titles[11] = 'Dimension Number: UNKNOW';


  //create titles
  for (pNumber = 1; pNumber < txts.length; pNumber++) {
    p[pNumber] = createP(txts[pNumber]);
    p[pNumber].parent(txt);
    if (pNumber <= titles.length) {
      titles[pNumber] = createP(titles[pNumber]);
      titles[pNumber].parent(txt2);
      titles[pNumber].style('display', 'inline');
      titles[pNumber].hide();
      titles[pNumber].style('padding-right', '5%');
    }
  }

  imageMode(CENTER);
}

function draw() {

  var r = createVector(1 / cx, 1 / cy);
  var d = createVector((cx - mouseX) * 0.8, (cy - mouseY) * 0.8);
  var q = sin(frameCount * 0.02) * 0.5;
  var n = map(0.01 + noise(frameCount * 0.01) * 0.1, 0, 1, log(1) / 1, log(5) / 1);
  var n1 = map(0.5 + noise(200 + frameCount * 0.01) * 0.5, 0, 1, log(1) / 1, log(5) / 1);

  ds = createVector(0, 0);
  ds = d.mult(q);
  dn = createVector(0, 0);
  dn = d.mult(n);
  var dn1 = d.mult(n1);

  for (var sNumber = 0; sNumber < scratches.length; sNumber++) {
    scratches[sNumber].update();
    scratches[sNumber].move();
    // print(0);
  }

  // if (page === 0){
  // head = img3;
  // }

  if (frameCount % 50 === 0) {
    createShadows(-1, 0, 0);
    speed = random(30, 50);
    background(0);
    //tittle
    if (page !== 0 & page < 3) {
      image(head, cx * 0.45 + d.x, cy * 1.5 - d.y);
    } else if (page >= 3 & page < 8) {
      image(head, cx * 0.6 + d.x, cy * 1.45 - d.y);
    } else if (page == 8) {
      hd8x = cx + d.x;
      hd8y = cy - d.y;
    }
    //circle
    stroke(255);
    noFill();
    strokeWeight(0.5);
    ellipse(cx * 1.65 - d.x, cy * 0.55 + d.y, cx * 0.25, cx * 0.25);
    line(cx * 1.5245 - d.x, cy * 0.545 - d.y, cx * 1.7745 - d.x, cy * 0.545 - d.y);
    line(cx * 1.645 - d.x, cy * 0.295 - d.y, cx * 1.645 - d.x, cy * 0.795 - d.y);
    //fan
    if (page <= 2) {
      image(fan1, cx * 0.4 + random(-10, 10) + dn1.x, cy * 1.8 + random(-10, 10) - dn1.y);
      image(fan2, cx * 0.38 + random(-10, 10) - dn1.x, cy * 1.65 + random(-10, 10) + dn1.y);
      image(fan3, cx * 0.51 + dn1.x, cy * 1.72 + dn1.y);
      image(fan4, cx * 0.42 - dn1.x, cy * 1.6 - dn1.y);
    } else {
      image(fan1, cx * 1.6 + random(-10, 10) + dn1.x, cy * 1.8 + random(-10, 10) - dn1.y);
      image(fan2, cx * 1.58 + random(-10, 10) - dn1.x, cy * 1.65 + random(-10, 10) + dn1.y);
      image(fan3, cx * 1.71 + dn1.x, cy * 1.72 + dn1.y);
      image(fan4, cx * 1.62 - dn1.x, cy * 1.6 - dn1.y);
    }
    for (var sNumber2 = 0; sNumber2 < scratches.length; sNumber2++) {
      // scratches[sNumber2].checkEdge();
      scratches[sNumber2].show();
    }

  }
  if (frameCount % 10 === 0) {
    fill(0);
    noStroke();
    rect(0, 0, width, cy * 0.25);
    // for (var sNumber3 = 0; sNumber3 < scratches.length; sNumber3++) {
    //   scratches[sNumber3].refresh();
    // }
    if (page == 8) {
      image(head, hd8x, hd8y);
    }
  }


  //html elements
  //hide html elements
  // txt.hide();
  for (pNumber2 = 1; pNumber2 < txts.length; pNumber2++) {
    p[pNumber2].hide();
    if (pNumber2 <= titles.length) {
      titles[pNumber2].hide();
    }
  }

  // titles[1].hide();
  // var tPage;
  // if(tPage != page)
  // tPage = page;
  if (page == 1) {
    // txt.show();
    // txt2.show();
    p[1].show();
    p[2].show();
    p[3].show();
    titles[1].show();
    txt.show();
    // txt.position((ds.x + dn.x) + cx, (ds.y + dn.y) + cy * 0.6);
    // txt2.position((ds.x + dn.x), (ds.y + dn.y) + cy * 0.5);
    p[1].style('transform', 'rotate(0.03turn)'); //skew(-15deg) 
    p[1].style('width', '' + cx * 0.9 + 'px');
    p[1].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.3);
    // p[1].style('transform', 'rotate(0.03turn)');
    p[2].style('width', '' + cx + 'px');
    // p[2].style('text-justify', 'distribute-all-lines');
    p[2].style('text-align-last', 'justify');
    // p[2].style('-moz-text-align-last', 'justify');
    // p[2].style('-webkit-text-align-last', 'justify');
    p[2].style('text-align', 'justify');
    // p[2].style('display', 'inline-block');
    p[2].position((ds.x + dn.x) + cx * 0.5, (ds.y + dn.y) + cy * 0.7);
    // p[2].style('transform', 'skew(150deg)');
    // p[3].style('transform', 'skew(150deg)');
    p[3].style('width', '' + cx + 'px');
    p[3].position((ds.x + dn.x) + cx * 0.8, (ds.y + dn.y) + cy);
    p[3].style('transform', 'rotate(-0.02turn)'); //skew(15deg)
    // txt2.style('font-size', '30pt');
    // txt2.style('font-family', '"American Typewriter"');
    createShadows(0, txts[1], 3);
    createShadows(0, txts[2], 6);
    createShadows(0, txts[3], 9);
    head = img3;
    titles[1].position((ds.x + dn.x) + cx * 1.5, (ds.y + dn.y) + cy * 1.5);
    // txt2.style('font-style', 'normal');
    // txt2.style('font-weight', 'normal');
  } else
  if (page == 2) {
    for (p2Count = 4; p2Count <= 8; p2Count++) {
      p[p2Count].show();
      p[p2Count].style('width', '' + cx * 1.6 + 'px');
      p[p2Count].position((ds.x + dn.x) + cx * 0.5, (ds.y + dn.y) + cy * (0.1 + (p2Count * 0.12)));
      createShadows(0, txts[p2Count], 3 * p2Count - 8);
    }
    head = head2;
  } else if (page == 3) {
    p[9].show();
    p[10].show();
    p[11].show();
    p[9].style('width', '' + cx * 1.24 + 'px');
    p[9].position((ds.x + dn.x) + cx * 0.6, (ds.y + dn.y) + cy * 0.45);
    p[10].style('width', '' + cx * 1.24 + 'px');
    p[10].position((ds.x + dn.x) + cx * 0.6, (ds.y + dn.y) + cy * 0.8);
    p[11].style('width', '' + cx * 1.24 + 'px');
    p[11].position((ds.x + dn.x) + cx * 0.6, (ds.y + dn.y) + cy * 1.15);
    createShadows(0, txts[9], 3);
    createShadows(0, txts[10], 6);
    createShadows(0, txts[11], 9);
    titles[2].style('font-size', '22pt');
    titles[2].show();
    titles[3].style('font-size', '12pt');
    titles[3].show();
    titles[2].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.25);
    titles[2].style('width', '' + cx * 1.73 + 'px');
    titles[3].position((ds.x + dn.x) + cx * 1.45, (ds.y + dn.y) + cy * 1.6);
    titles[3].style('width', '' + cx * 0.5 + 'px');
    titles[2].style('font-family', '"Helvetica"');
    titles[2].style('font-style', 'oblique');
    titles[2].style('font-weight', 'bold');
    titles[3].style('font-family', '"Helvetica"');
    titles[3].style('font-style', 'oblique');
    titles[3].style('font-weight', 'bold');
    titles[2].style('text-align-last', 'justify');
    titles[2].style('text-align', 'justify');
    txt.style('text-align', 'justify');
    head = head3;
  } else if (page == 4) {
    p[12].show();
    p[13].show();
    p[14].show();
    p[12].style('width', '' + cx * 1.73 + 'px');
    p[12].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.45);
    p[13].style('width', '' + cx * 1.73 + 'px');
    p[13].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.9);
    p[14].style('width', '' + cx * 1.73 + 'px');
    p[14].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 1.25);
    createShadows(0, txts[9], 3);
    createShadows(0, txts[10], 6);
    createShadows(0, txts[11], 9);
    titles[4].show();
    titles[4].style('width', '' + cx * 1.73 + 'px');
    titles[4].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.25);
    titles[4].style('font-size', '22pt');
    titles[4].style('font-family', '"Helvetica"');
    titles[4].style('font-style', 'oblique');
    titles[4].style('font-weight', 'bold');
    titles[4].style('text-align-last', 'justify');
    titles[4].style('text-align', 'justify');
    titles[5].show();
    titles[5].style('width', '' + cx * 0.5 + 'px');
    titles[5].position((ds.x + dn.x) + cx * 1.45, (ds.y + dn.y) + cy * 1.6);
    titles[5].style('font-size', '12pt');
    titles[5].style('font-family', '"Helvetica"');
    titles[5].style('font-style', 'oblique');
    titles[5].style('font-weight', 'bold');
    head = head4;
  } else if (page == 5) {
    p[15].show();
    p[16].show();
    p[15].style('width', '' + cx * 1.32 + 'px');
    p[15].position((ds.x + dn.x) + cx * 0.51, (ds.y + dn.y) + cy * 0.45);
    p[16].style('width', '' + cx * 1.32 + 'px');
    p[16].position((ds.x + dn.x) + cx * 0.51, (ds.y + dn.y) + cy * 1.1);
    createShadows(0, txts[15], 3);
    createShadows(0, txts[16], 6);
    titles[6].show();
    titles[6].style('width', '' + cx * 1.73 + 'px');
    titles[6].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.25);
    titles[6].style('font-size', '22pt');
    titles[6].style('font-family', '"Helvetica"');
    titles[6].style('font-style', 'oblique');
    titles[6].style('font-weight', 'bold');
    titles[6].style('text-align-last', 'justify');
    titles[6].style('text-align', 'justify');
    titles[7].show();
    titles[7].style('width', '' + cx * 0.5 + 'px');
    titles[7].position((ds.x + dn.x) + cx * 1.45, (ds.y + dn.y) + cy * 1.6);
    titles[7].style('font-size', '12pt');
    titles[7].style('font-family', '"Helvetica"');
    titles[7].style('font-style', 'oblique');
    titles[7].style('font-weight', 'bold');
    head = head5;
  } else if (page == 6) {
    p[17].show();
    p[18].show();
    p[17].style('width', '' + cx * 1.24 + 'px');
    p[17].position((ds.x + dn.x) + cx * 0.6, (ds.y + dn.y) + cy * 0.45);
    p[18].style('width', '' + cx * 1.24 + 'px');
    p[18].position((ds.x + dn.x) + cx * 0.6, (ds.y + dn.y) + cy * 0.95);
    createShadows(0, txts[17], 3);
    createShadows(0, txts[18], 6);
    titles[8].show();
    titles[8].style('width', '' + cx * 1.73 + 'px');
    titles[8].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.25);
    titles[8].style('font-size', '22pt');
    titles[8].style('font-family', '"Helvetica"');
    titles[8].style('font-style', 'oblique');
    titles[8].style('font-weight', 'bold');
    titles[8].style('text-align-last', 'justify');
    titles[8].style('text-align', 'justify');
    titles[9].show();
    titles[9].style('width', '' + cx * 0.5 + 'px');
    titles[9].position((ds.x + dn.x) + cx * 1.45, (ds.y + dn.y) + cy * 1.6);
    titles[9].style('font-size', '12pt');
    titles[9].style('font-family', '"Helvetica"');
    titles[9].style('font-style', 'oblique');
    titles[9].style('font-weight', 'bold');
    head = head6;
  } else if (page == 7) {
    p[19].show();
    p[20].show();
    p[21].show();
    p[19].style('width', '' + cx * 1.73 + 'px');
    p[19].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.45);
    p[20].style('width', '' + cx * 1.73 + 'px');
    p[20].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.9);
    p[21].style('width', '' + cx * 1.73 + 'px');
    p[21].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 1.25);
    createShadows(0, txts[9], 3);
    createShadows(0, txts[10], 6);
    createShadows(0, txts[11], 9);
    titles[10].show();
    titles[10].style('width', '' + cx * 1.73 + 'px');
    titles[10].position((ds.x + dn.x) + cx * 0.1, (ds.y + dn.y) + cy * 0.25);
    titles[10].style('font-size', '22pt');
    titles[10].style('font-family', '"Helvetica"');
    titles[10].style('font-style', 'oblique');
    titles[10].style('font-weight', 'bold');
    titles[10].style('text-align-last', 'justify');
    titles[10].style('text-align', 'justify');
    titles[11].show();
    titles[11].style('width', '' + cx * 0.5 + 'px');
    titles[11].position((ds.x + dn.x) + cx * 1.5, (ds.y + dn.y) + cy * 1.6);
    titles[11].style('font-size', '12pt');
    titles[11].style('font-family', '"Helvetica"');
    titles[11].style('font-style', 'oblique');
    titles[11].style('font-weight', 'bold');
    head = head7;
  } else if (page == 8) {
    head = head8;
  }






  //tittle
  var x = 0;
  var y = 0;
  // translate(cx - img0.width * 0.5, img0.height * 0.5);
  while (x < img0.width) {
    var r1 = random(15, 30);
    var i = 20;
    if (frameCount % 10 === 0) {
      while (i < r1) {
        // if (frameCount % 50 === 0) {
        // copy(img, x, 0, 1 + random(5), img.height, x1 + random(5), y + random(1), 1 + random(5), img.height);
        blend(img0, x, 0, 1 + random(3, 5), img0.height, cx * 0.01 + (ds.x) * (0.99 + n) + random(3), cy * 0.01 + (+ds.y) * (0.99 + n) + random(1), 1 + random(5), img0.height, ADD);
        blend(img1, x, 0, 1 + random(3, 5), img1.height, cx * 0.01 + (ds.x) * (1 + n) + random(3), cy * 0.01 + (+ds.y) * (1 + n) + random(1), 1 + random(5), img1.height, ADD);
        blend(img2, x, 0, 1 + random(3, 5), img2.height, cx * 0.01 + (ds.x) * (1.01 + n) + random(3), cy * 0.01 + (+ds.y) * (1.01 + n) + random(1), 1 + random(5), img2.height, ADD);
        d.x += 1;
        // }
        i += 1.16;
      }
    }
    x = x + random(1, 2.5);
  }

  //curtain
  if (frameCount < 50) {
    speed = random(40, 50);
    background(0);
  }

  //blend rgbsplit
  // translate(cx - img0.width * 0.5, img0.height * 0.5);
  // blend(img0, 0, 0, img0.width, img0.height, d.x + ds.x, d.y + ds.y, img0.width, img0.height, ADD);
  // blend(img1, 0, 0, img1.width, img1.height, (ds.x + d.x) * 1.15, (ds.y + d.y) * 1.15, img1.width, img1.height, ADD);
  // blend(img2, 0, 0, img2.width, img2.height, (ds.x + d.x) * 1.3, (ds.y + d.y) * 1.3, img2.width, img2.height, ADD);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW & page > 0) {
    page--;
    createShadows(-1, 0, 0);
    print(page);
  } else if (keyCode === RIGHT_ARROW & page < 8) {
    page++;
    createShadows(-1, 0, 0);
    print(page);
  }
}

// function mouseWheel(event){
//   print(event.delta);
//   page = map(constrain((event.delta)-50,50),-50,50,0,8);
// }

// function doubleClicked() {
//   if (page > 0) {
//     page--;
//   }
// }

function mouseClicked() {

  if (mouseButton === RIGHT & page > 0) {
    page--;
    print(R);
  } else if (mouseButton === LEFT & page < 8) {
    page++;
  }
}

function pageUp() {
  page++;
}

function changeColor() {

  this.style('color', 'rgba(150,20,150,0.6)');

}

function createShadows(mode, cText, cNumber) {
  // pp = [];
  if (mode == -1) {
    // print(pp.length);
    // print(pp);
    // if (cPage != page) {
    for (iPPCount = 0; iPPCount < pp.length; iPPCount++) {
      // var rP = pp[iPPCount];
      // print('qq');
      pp[iPPCount].remove();
      // pp[iPPCount].splice(iPPCount, 1);
    }
    pp.splice(0, pp.length);
    iShadowCount = 0;

  } else {
    while (iShadowCount < cNumber) {
      pp[iShadowCount] = createP('' + cText + '');
      pp[iShadowCount].position((ds.x + dn.x) + cx * random(1.2), (ds.y + dn.y) + cy * random(1.5));
      // this.p.style('transform', 'skew('+random(10)+'deg)');
      pp[iShadowCount].style('width', '' + cx * 0.8 + 'px');
      pp[iShadowCount].style('transform', 'rotate(' + random(-0.02, 0.02) + 'turn)');
      pp[iShadowCount].parent(txt3);
      iShadowCount++;
    }
  }
}