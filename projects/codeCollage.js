PImage img1, img2, img3;   
PImage img0;
PImage b1, b2, b3;
int q = 0;

void collage(PImage img, int rangeX, int rangeY, float n, float scale, float crop){
  int x = int(random(img.width * crop));
  int y = int(random(img.height * crop));
  int w = int(random(rangeX));
  int h = int(random(rangeY));
  copy(img, x, y, w, h, int(x*(scale+noise(n))),int(y*(scale+noise(n))),int(w*(scale+noise(n))), int(h*(scale+noise(n))));
}

void collageBlend(PImage img, int rangeX, int rangeY, float n, float scale, float crop, int blend){
  int x = int(random(img.width * crop));
  int y = int(random(img.height * crop));
  int w = int(random(rangeX));
  int h = int(random(rangeY));

  //BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION
  //MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN
  blend(img, x, y, w, h, int(x*(1+noise(n))),int(y*(1+noise(n))),int(w*(scale+noise(n))), int(h*(scale+noise(n))), blend);

}

void collageSplit(PImage img, PImage G, PImage B, int rangeX, int rangeY, float n, float scale, float crop, float off){
  int x = int(random(img.width * crop));
  int y = int(random(img.height * crop));
  int w = int(random(rangeX));
  int h = int(random(rangeY));
  blend(img, x, y, w, h, int(x*(1-off+noise(n))),int(y*(1-off+noise(n))),int(w*(scale+noise(n))), int(h*(scale+noise(n))), ADD);
  blend(G, x, y, w, h, int(x*(1+noise(n))),int(y*(1+noise(n))),int(w*(scale+noise(n))), int(h*(scale+noise(n))), ADD);
  blend(B, x, y, w, h, int(x*(1+off+noise(n))),int(y*(1+off+noise(n))),int(w*(scale+noise(n))), int(h*(scale+noise(n))), ADD);
}

void setup() {
  size(450, 800); 
  img0 = loadImage("Images/codeCollage.jpg");
  // b1 = loadImage("b1.png");
  // b2 = loadImage("b2.png");
  // b3 = loadImage("b3.png");
  background(0);
  smooth();
}

void draw() {
  //if(frameCount%50 == 0){
  //  background(0);
  //}
  for (int i = 0; i<50; i++) {
    q+= 0.01;
    // collageSplit(b1, b2, b3, 80, 120, q, 0.4, 1, 0.01);
    collage(img0, 80, 120, q, 0.45, 1);
    // collage(img0, 120, 180, q, 0.5, 1);
    //if (i%5 == 0) {
    //collage(img2, 120, 120, q, 0.6, 1);
    //}
    //collageBlend(img3, 50, 50, q, 1, 0.3, LIGHTEST);    
  }
}