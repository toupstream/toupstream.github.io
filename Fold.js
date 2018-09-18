var mapimg;
var tempMapImg;
var inc = 0.01;
var img;
var zoff = 0;
var lat = 23.0422;
var lon = 113.377;
var zoom = 11.5;
var an = 0.045;
var mapi;
var chaSizeRandom = 0;
var b1c = 0;

// function preload() {
//   mapimg = loadImage("https://api.mapbox.com/styles/v1/upstream/cjbfashn32dez2rulfqoagkil/static/" + lon + "," + lat + "," + zoom + ",0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q");
//   // mapimg = createImg("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/static/113.377,23.0422,14.25,0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q");
// }
function preload() {
  // for (var i = 0; i < 27; i++) {
  //   cha[i] = loadImage('/Images/Key/' + i + '.png');
  //   print(i);
  // }
  cha1 = loadImage('/Images/Key/1.png');
  cha2 = loadImage('/Images/Key/2.png');
  cha3 = loadImage('/Images/Key/3.png');
  cha4 = loadImage('/Images/Key/4.png');
  cha5 = loadImage('/Images/Key/5.png');
  cha6 = loadImage('/Images/Key/6.png');
  cha7 = loadImage('/Images/Key/7.png');
  cha8 = loadImage('/Images/Key/8.png');
  cha9 = loadImage('/Images/Key/9.png');
  cha10 = loadImage('/Images/Key/10.png');
  cha11 = loadImage('/Images/Key/11.png');
  cha12 = loadImage('/Images/Key/12.png');
  cha13 = loadImage('/Images/Key/13.png');
  cha14 = loadImage('/Images/Key/14.png');
  cha15 = loadImage('/Images/Key/15.png');
  cha16 = loadImage('/Images/Key/16.png');
  cha17 = loadImage('/Images/Key/17.png');
  cha18 = loadImage('/Images/Key/18.png');
  cha19 = loadImage('/Images/Key/19.png');
  cha20 = loadImage('/Images/Key/20.png');
  cha21 = loadImage('/Images/Key/21.png');
  cha22 = loadImage('/Images/Key/22.png');
  cha23 = loadImage('/Images/Key/23.png');
  cha24 = loadImage('/Images/Key/24.png');
  cha25 = loadImage('/Images/Key/25.png');
  cha26 = loadImage('/Images/Key/26.png');
  num1 = loadImage('/Images/Key/01.png');
  num2 = loadImage('/Images/Key/02.png');
  num3 = loadImage('/Images/Key/03.png');
  num4 = loadImage('/Images/Key/04.png');
  num5 = loadImage('/Images/Key/05.png');
  num6 = loadImage('/Images/Key/06.png');
  num7 = loadImage('/Images/Key/07.png');
  num8 = loadImage('/Images/Key/08.png');
  num9 = loadImage('/Images/Key/09.png');
  num0 = loadImage('/Images/Key/010.png');
  top1 = loadImage('/Images/Key/top.png');
  // cha[1] = loadImage('/Images/key/'+1+'.png');
  // for (var j = 0; j < 11; j++) {
  //   num[j] = loadImage('/Images/Key/0' + j + '.png');
  // }
}

function setup() {
  createCanvas(600, 600);
  select('canvas').position(windowWidth / 2 - 300, windowHeight * 0.05);
  imageMode(CENTER);
  // canvas.position = (0, 0);
  // canvas.style('z-index', '1');
  // mapimg.position = (0, 0);
  // mapimg = createImg("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/static/113.377,23.0422,14.25,0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q");
  mapimg = loadImage("https://api.mapbox.com/styles/v1/upstream/cjbfashn32dez2rulfqoagkil/static/" + lon + "," + lat + "," + zoom + ",0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q", gotData);
  tempMapImg = mapimg;
  // for (var i = 0; i < 4; i++) {
  //   chas[i] = new Character();
  //   // chas[i] = new Character(-50 + 50 * i, 400, cha[i]);
  // }
  // createImg('/Images/Key/i1.png');
  colorMode(HSB, 255);
  select('#1').mouseClicked(show);
  select('#2').mouseClicked(show);
  select('#3').mouseClicked(show);
  select('#4').mouseClicked(show);
  select('#5').mouseClicked(show);
  select('#6').mouseClicked(show);
  select('#7').mouseClicked(show);
  select('#8').mouseClicked(show);
  select('#9').mouseClicked(show);
  select('#10').mouseClicked(show);
  select('#11').mouseClicked(show);
  select('#12').mouseClicked(show);
  select('#13').mouseClicked(show);
  select('#14').mouseClicked(show);
  select('#15').mouseClicked(show);
  select('#16').mouseClicked(show);
  select('#17').mouseClicked(show);
  select('#18').mouseClicked(show);
  select('#19').mouseClicked(show);
  select('#20').mouseClicked(show);
  select('#21').mouseClicked(show);
  select('#22').mouseClicked(show);
  select('#23').mouseClicked(show);
  select('#24').mouseClicked(show);
  select('#25').mouseClicked(show);
  select('#26').mouseClicked(show);
  select('#27').mouseClicked(show);
  select('#28').mouseClicked(show);
  select('#29').mouseClicked(show);
  select('#30').mouseClicked(show);
  select('#31').mouseClicked(show);
  select('#32').mouseClicked(show);
  select('#33').mouseClicked(show);
  select('#34').mouseClicked(show);
  select('#35').mouseClicked(show);
  select('#36').mouseClicked(show);
  e1 = select('#img');
  e1.hide();
}

function show() {
  b1 = select("#b1");
  // this.style('z-index', '-2');
  this.style('-webkit-filter', 'invert(100%)');
  this.parent(b1);
  b1c += 1;
  // this.attribute('src','/Images/Key/'+this.id+'.png');

  // c1 = select('#1');
  // this.position(-25 + 200 * noise(198 + chaSizeRandom), -100 + 200 * noise(198 + chaSizeRandom));
}

function draw() {
  // an += 0.001;

  // tint(160, 120, 120);
  // if (mapi) {
  //   image(mapimg, 0, 0);
  //   an += 0.001;
  //   lat = sin(an) * 180;
  //   lon = sin(an) * 90;
  //   // mapimg = loadImage("https://api.mapbox.com/styles/v1/upstream/cjbfashn32dez2rulfqoagkil/static/" + lon + "," + lat + "," + zoom + ",0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q", gotData);
  // }
  // noTint();
  translate(width / 2, height / 2);
  imgUpdate();
  image(tempMapImg, 0, 0);

  frogUpdate();

  Character(-25, -100, top1, 0, 198);
  // b1.style('z-index','1');
  b1 = select('#b1');
  b1.position(50 + windowWidth / 2 - 300 + 200 * noise(198 + chaSizeRandom), -15 + windowHeight * 0.05 + 200 * noise(198 + chaSizeRandom));
  b1.style('z-index', '1');
  if(b1c>4){
    e1.show();
  }
  // b2 = select('#2');
  translate(-1000, -50);
  var imgexc = sin(chaSizeRandom) * 250;
  Character(150, 100, num1, imgexc, 0);
  Character(350, 100, num2, imgexc, 20);
  Character(550, 100, num3, imgexc, 45);
  Character(750, 100, num4, imgexc, 25);
  Character(950, 100, num5, imgexc, 21);
  Character(1150, 100, num6, imgexc, 90);
  Character(1350, 100, num7, imgexc, 12);
  Character(1550, 100, num8, imgexc, 57);
  Character(1750, 100, num9, imgexc, 65);
  Character(1950, 100, num0, imgexc, 32);

  translate(-500, 0);
  Character(-100, 0, cha1, imgexc, 8, true);
  Character(50, 0, cha2, imgexc, 25, true);
  Character(150, 0, cha3, imgexc, 35, true);
  Character(300, 0, cha4, imgexc, 45, true);
  Character(450, 0, cha5, imgexc, 89, true);
  Character(600, 0, cha6, imgexc, 67, true);
  Character(750, 0, cha7, imgexc, 12, true);
  Character(800, 0, cha8, imgexc, 78, true);
  Character(950, 0, cha9, imgexc, 28, true);
  Character(1100, 0, cha10, imgexc, 38, true);
  Character(1250, 0, cha11, imgexc, 432, true);
  Character(1400, 0, cha12, imgexc, 178, true);
  Character(1550, 0, cha13, imgexc, 289, true);
  Character(1700, 0, cha14, imgexc, 573, true);
  Character(1850, 0, cha15, imgexc, 156, true);
  Character(2000, 0, cha16, imgexc, 245, true);
  Character(2150, 0, cha17, imgexc, 273, true);
  Character(2300, 0, cha18, imgexc, 156, true);
  Character(2450, 0, cha19, imgexc, 423, true);
  Character(2600, 0, cha20, imgexc, 315, true);
  Character(2750, 0, cha21, imgexc, 215, true);
  Character(2900, 0, cha22, imgexc, 150, true);
  Character(3050, 0, cha23, imgexc, 478, true);
  Character(3200, 0, cha24, imgexc, 827, true);
  Character(3350, 0, cha25, imgexc, 620, true);
  Character(3500, 0, cha26, imgexc, 253, true);

  zoff += 0.05;
  chaSizeRandom += 0.01;
}

function imgUpdate() {
  if (mapi) {
    image(mapimg, 0, 0);
    tempMapImg = mapimg;
    an += 0.005;
    lat = sin(an) * 90;
    lon = sin(an) * 180;
    mapi = false;
    mapimg = loadImage("https://api.mapbox.com/styles/v1/upstream/cjbfashn32dez2rulfqoagkil/static/" + lon + "," + lat + "," + zoom + ",0,0/600x600?access_token=pk.eyJ1IjoidXBzdHJlYW0iLCJhIjoiY2piZmFyM2YwMnIzYTJ3bm9zYjZ3NGxrYyJ9.K9qPgXICI7iinwCEVEGl4Q", gotData);
  }
}

function frogUpdate() {
  img = createImage(600, 600);
  img.loadPixels();
  var yoff = 0;
  for (var y = 0; y < 600; y++) {
    var xoff = 0;
    for (var x = 0; x < 600; x++) {
      var index = (x + y * 600) * 4;
      var r = noise(xoff, yoff, zoff) * 255;
      var r2 = noise(50 + xoff, 100 + yoff, 200 + zoff) * 255;
      img.pixels[index + 0] = r2;
      img.pixels[index + 1] = r;
      img.pixels[index + 2] = r;
      img.pixels[index + 3] = map(r, 0, 255, -150, 300);
      xoff += inc;
    }
    yoff += inc;
  }
  img.updatePixels();
  image(img, 0, 0);
}

function gotData(data) {
  mapi = data;
}