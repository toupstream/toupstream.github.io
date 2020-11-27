var stars = [];
var link = [];
//star.
var speed = 0;
var sp = 1;
var spm = 30;
var di = 0;
var dr = 3;
var md = 0;
//increment.
var op = 0;
var oq = 0;
var or = 0;
var amp = 0.01;
var opp = 0;
//main character.
var wd = 0;
var wd2 = 0;
var t = 0;
//link.
var sz = 1;
var szi = 0.01;
//excursion.
var loff = 0;
var roff = 0;
var uoff = 0;
var aoff = 0.01;
var toff = 0;
// var en;


function setup() {
  canvas = createCanvas(constrain(windowWidth, 400, 1000), constrain(windowHeight, 600, 800));
  canvas.position(windowWidth / 2 - width / 2, windowHeight * 0.05);
  canvas.style('z-index', '-1');
  // canvas.style('position', 'fixed');
  for (var i = 0; i < 500; i++) {
    stars[i] = new Star();
  }
  loadJSON("Json/Game.json", gotData);
  // en = loadJSON("GameEN.json", gotData);
}

//create link.
function gotData(chanel) {
  for (var j = 0; j < chanel.game.length; j++) {
    link[j] = createA(chanel.game[j].site, chanel.game[j].content, '_blank');
    if (j < 10) {
      link[j].position(random(0, windowWidth / 3), random(0, windowHeight / 2));
    } else {
      link[j].position(random(windowWidth * 0.65, windowWidth), random(0, windowHeight / 2));
    }
    link[j].style("color", "#FFF");
    link[j].style("font-family", "myFont");
  }
}

function show(enq, enqq, pxoff, pyoff, soff, f1, f2, f3, f4, turn) {
  var fz = (windowWidth - width) / 2;
  for (var k = 0 + enq; k < link.length - enqq; k++) {
    // link[k].style("color", "#FFF");
    link[k].position(link[k].x + pxoff, link[k].y + pyoff);
    link[k].style('transform', 'skew(' + soff + 'deg)');
    link[k].style('font-size', sz + map(link[k].x, f1, f2, f3, f4) + 'em');
    if (turn) {
      if (link[k].x < -width * 0.2 || link[k].y < -height * 0.2) {
        sz = 1;
        link[k].style('font-size', sz + 'em');
        link[k].position(random(fz, width * 0.4 + fz), random(0, height * 0.6));
      }
    } else {
      if (link[k].x > width + fz || link[k].y < -height * 0.2) {
        sz = 1;
        link[k].style('font-size', sz + 'em');
        link[k].position(random(width * 0.65 + fz, width + fz), random(0, height * 0.6));
      }
    }
  }
}

function draw() {
  // calculating increatments.
  op += opp;
  or += opp * 0.5;
  oq += opp * 0.15;

  fill(255);
  background(0);

  //display the links.
  // for (var k = 0; k < link.length; k++) {
  //   // link[k].style("color", "#FFF");
  //   link[k].position(link[k].x - loff * 0.2 - roff * 0.1, link[k].y - opp * 5 - loff * 0.1);
  //   link[k].style('transform', 'skew(' + wd * 1.5 + 'deg)');
  //   link[k].style('font-size', sz + map(link[k].x, 0, windowWidth * 0.4, 2, 0) + 'em');
  //   if (link[k].x < -width * 0.2 || link[k].y < -height * 0.2) {
  //     sz = 1;
  //     link[k].style('font-size', sz + 'em');
  //     link[k].position(random(windowWidth * 0.2, windowWidth * 0.4), random(windowHeight * 0.2, windowHeight * 0.8));
  //   }
  // }
  show(0, 9, -loff * 0.2 - roff * 0.1 - toff, -opp * 5 - loff * 0.1 - toff, wd * 1.5, 0, windowWidth * 0.4, 1, 0,true);
  show(10, 0, roff * 0.2 + loff * 0.1 + toff, -opp * 5 - roff * 0.1 - toff, -wd2 * 1.5, windowWidth * 0.6, windowWidth, 0, 1,false);

  //displaying the main character.
  translate(width / 2, height / 2);
  p = new Tyre(-24, 160 - uoff, 48, 120, 4, amp, 0, t, 500);
  pl = new Tyre(-72 - loff, 160 - uoff - loff * 2.5, wd, 100, 2, amp * 2, 100, t, 200);
  pr = new Tyre(24 + roff, 160 - uoff - roff, wd2, 100, 2, amp * 2, 200, t, 200);
  pl2 = new Tyre(-16 + loff - roff * 2, 24 - uoff - loff, wd / 10, 16, 2, amp * 2, 300, t + PI / 2.5, 50, oq);
  pr2 = new Tyre(40 + roff + loff, 96 - uoff - roff * 2, wd2 / 10, 16, 2, amp * 2, 500, t - PI / 2.5, 50, oq);
  pl3 = new Tyre(-72 - loff, 160 - uoff * 3 - loff * 5, wd / 3, 48, 2, amp * 1.5, 600, t, 100, or);
  pr3 = new Tyre(24 + roff, 160 - uoff * 3 - roff * 4, wd2 / 3, 48, 2, amp * 1.5, 800, t, 100, or);
  p1 = new SuperShape(loff - roff, 64 + loff - uoff, 2.5, 1, 1, 1, -PI / 2, 80, 100);
  p2 = new SuperShape(48, -80 - uoff + roff, 1, 0.5, 0.3, 0.3, PI / 2 + roff * 0.05 - loff * 0.05, 80, 500);
  p.show();
  pl.show();
  pr.show();
  pl2.show();
  pr2.show();
  pl3.show();
  pr3.show();
  p1.show();
  p2.show();

  //display stars.
  translate(di, 0);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  //key control.
  if (keyIsDown(LEFT_ARROW)) {
    if (di > -md) {
      di -= dr;
    }
    if (wd < 24) {
      wd += 1;
    }
    if (loff < 12) {
      loff += 0.2;
    }
    if (t < PI / 6) {
      t += 0.01;
    }
  } else {
    if (di < 0) {
      di += dr * 4;
    }
    if (wd >= 1) {
      wd -= 1;
    }
    if (loff > 0) {
      loff -= 0.2;
    }
    if (t >= 0.1) {
      t -= 0.035;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (di < md) {
      di += dr;
    }
    if (wd2 < 24) {
      wd2 += 1;
    }
    if (roff < 12) {
      roff += 0.2;
    }
    if (t > -PI / 6) {
      t -= 0.01;
    }
  } else {
    if (di > 0) {
      di -= dr * 4;
    }
    if (wd2 >= 1) {
      wd2 -= 1;
    }
    if (roff > 0) {
      roff -= 0.2;
    }
    if (t <= -0.1) {
      t += 0.035;
    }
  }

  if (keyIsDown(UP_ARROW)) {
    if (speed < spm) {
      speed += sp;
    }
    if (opp < 0.1) {
      opp += 0.001;
    }
    if (uoff < 16) {
      uoff += 0.2;
    }
  } else {
    if (speed > 0) {
      speed -= sp;
    }
    if (opp > 0) {
      opp -= 0.001;
    }
    if (uoff > 0) {
      uoff -= 0.2;
    }
  }
  if (opp >= 0.05) {
    if (amp < aoff) {
      amp += aoff / 4;
    }
  } else {
    if (amp >= 0.02) {
      amp -= 0.01;
    }
  }

  if (keyIsPressed & keyCode == SHIFT) {
    aoff = 0.03;
    spm = 120;
    sp = 5;
    dr = 5;
    md = width / 2;
    toff = 2;
  } else {
    aoff = 0.01;
    spm = 30;
    sp = 1;
    dr = 3;
    md = width / 4;
    toff = 0;
  }
}

function windowResized() {
  resizeCanvas(constrain(windowWidth, 400, 1000), constrain(windowHeight, 600, 800));
  canvas.position(windowWidth / 2 - width / 2);
}