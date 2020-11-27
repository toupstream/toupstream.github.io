var lot = [];
var clicked = true;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
    if (width<1000){
    offer = createImg("offerTempleSources/offerIn.png");
  }else{
    offer = createImg("offerTempleSources/offer.png");
  }
  tittle = createImg("offerTempleSources/tittle.png");
  colorMode(HSB, 100);
  for (var j = 1; j <= 30; j++) {
    lot[j] = "offerTempleSources/lot-"+j+".jpg";
  }
} 

// function gotData(lots) {
//   for (var i = 0; i < lots.lots.length; j++) {
//     lot[i] = createP(lots.lots[i].content);
//   }
// }

function ChangeImg(img){
  this.attribute("src","offerTempleSources/offerIn.png");
}

function backImg(img){
  this.attribute("src","offerTempleSources/offer.png");
}

function ShowLot(){
  var k = int(random(lot.length));
  lotShow = createImg(lot[k]);
  // // lotShow = createP("蓬萊東闕玉桃香  順水行舟仙賜方  宜男正好圖全計  不必他方小地長");
  offer.hide();
  tittle.hide();
  // lotShow.parent(lotShowDiv);
  lotShow.style("display", "block");
  // lotShow.style("max-height", "auto");
  // lotShow.style("max-width", "100%");
  // lotShow.style("margin-top", "0px");
  // lotShow.style("margin-bottom", "0px");
  lotShow.style("margin", "auto");
//   lotShow.style("margin-right", "auto");
  lotShow.style("width", "50%");
  lotShow.style("height", "50%");

  // lotShow.style("top", "0px");
  // lotShow.y = 0;
  // lotShow.style("height", "50%");
  // lotShow.style("writing-mode","vertical-rl");
  // lotShow.style("text-orientation","upright");
  // lotShow.style();
}

function draw() {
  var dirX = map((mouseX),0,width,1,1.2);
  var dirY = map((mouseY),0,width,1,1.2);
  var dirX1 = map((mouseX),0,width,1.2,1.1);
  var dirY1 = map((mouseY),0,width,1.2,1.1);
  var dirY2 = map((mouseY),0,width,1,2);
  background(0);
  tittle.position(width*0.5-tittle.width*0.5,height*0.015);

  offer.position(width*0.5-offer.width*0.5,height*0.5-offer.height*0.5);
  offer.mouseMoved(ChangeImg);
  offer.mouseOut(backImg);
  if(clicked){
    offer.mouseClicked(ShowLot);
    clicked = false;
  }

  // if (width<1000){
  //   this.attribute("src","sources/offer.png");
  // }else{
  //   this.attribute("src","sources/offer.png");
  // }

  for (var a = 0; a < TWO_PI; a += 0.1) {
    var h = map(sin(a + frameCount * 0.01), -1, 1, 0, 100);
    // ambientLight(h, 100, 200);
  }
  // texture(offer);
  // plane(20,20,0,0);

  specularMaterial(250);
  SwagBox(1,0.05,0,0.4*dirY1,0,0);
  SwagBox(0.8,0.05,0,0.3*dirY2,0.2*dirY2,300);
  SwagBox(0.6,0.05,0,0.2*dirY2,0.3*dirY2,500);

  SwagBox(0.6*dirX,0.6*dirY,-0.4*dirX1,-0.4*dirY1,0.7,0);
  SwagBox(0.6*dirX,0.6*dirY,0.4*dirX1,-0.4*dirY1,0.7,200);
  SwagBox(0.6*dirX,0.6*dirY,-0.4*dirX1,0.4*dirY1,0.7,400);
  SwagBox(0.6*dirX,0.6*dirY,0.4*dirX1,0.4*dirY1,0.7,600);
  pointLight(map(Step(1,0.1,50),-1,1,100,0),100,80,100,-100,-width*0.1);
  pointLight(map(Step(1,0.01,80),-1,1,100,0),100,80,0,0,0);

  directionalLight(h, 50, 50, 0, 0, -width*0.2);


}

function Step(speed,range,dev){
  var step = sin((dev + frameCount) * range)*speed;
  return step;
}

function SwagBox(w,h,xPos,yPos,zPos,dev){
  push();
  translate(width*xPos+Step(1,0.2,dev),height*yPos+Step(1,0.2,200+dev),-height*zPos+Step(1,0.35,350+dev));
  rotateX(Step(0.2,0.01,dev));
  rotateY(Step(0.1,0.01,200+dev));
  box(width*w,height*h,height*0.2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

// function mouseClicked() {
//   background(0);
//   // mode = !mode;
// }
