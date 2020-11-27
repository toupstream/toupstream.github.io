color[]col = {color(181,130,96)};
color[]colPlay = {color(26,36,40),color(20,26,40),color(31,65,79)};
color[]colDot ={color(119,65,36),color(78,83,56),color(90,61,89)};
color[]colStroke = {color(66,80,70),color(90,107,120),color(34,48,53),color(50,111,100)};
color side = color(36,46,63);

String[]t1 = {"it feels like to go to the dot school","it feels like to play the hell out","it struggles with born disable","it doesn't get a chance to study", "it manages to make its own living" ,"it has to take cares of others"};
String[]t2 = {"go to dot college","make dot arts","play dot games","travel the dot world", "look for a dot job", "drop off the dot school"};
String[]t2d = {"college","arts","games","trip","job","school"};
String[]t3 = {"working in a dot office","working in a dot office","working in a dot office","working in a dot office","working in a dot school","working in a dot school","working in a dot factory","working in a dot factory","working in a dot factory","working in a dot factory","working in a dot art gallery","working in a dot mine","working in a dot mine","living in a dot street"};
String[]t3d = {"working","working","working","working","teaching","teaching","working","working","working","working","creating","mining","mining","sleeping"};
String[]t4 = {"bought a dot house","rent a dot house","bought a dot appartment","made dot friends","had a dot vacation","got dot married","paid the dot tax","went dot broke","took dot loan", "look for another dot job","got dot fired","lost the dot job","quit its dot job","committed a dot crime","moved to another dot city","made a dot solo exhibition","did dot design"};
String[]t4d = {"committed a dot suicide","died of dot hunger","rested in dot peace","rested in dot peace","rested in dot peace","died of a dot disease","died of a dot disease","died of a dot disease","died of a dot disease","died of a dot disease","died of a dot cancer","died of a dot murdered","died in a dot war","died in a dot disaster","died in a dot execute"};
String[]t4d2 = {"a dot hospital","a dot hospital","a dot hospital","a dot hospital","a dot hospital","a dot hospital","a dot hospital","a dot apartment","a dot house","a dot home","a dot apartment","a dot house","a dot home","a dot apartment","a dot house","a dot studio","the foreign dot land","the dot wild","the dot street","a dot prison"};


void colorTest(color[]col, int yOff){
  translate(400, yOff*20);
    for(int i = 0; i < col.length; i++){
      fill(col[i]);
      rect(i*20,0,20,20);
    }
  translate(-400, -yOff*20);
}


PImage img;

boolean background_refresh = true;//true;
boolean balls_refresh = true;
boolean balls_dots = false;
boolean restarting = false;
int frameskip = 1;

float range = 2; //range in which balls are dropped

//int maxballs = 50000;

int Nx = 10; //Number of pins in y
int Ny = 10; //Number of pins in x

int Nb = 1; //Number of balls
int Ns = 100;

PFont font;

float ballr = 12;
float pinr = 4;
float bouncy = 0.4;

Ball[] balls = new Ball[Nb]; //Array containing balls
Pin[] pins = new Pin[Nx*Ny]; //Array containing all pins
Stride[] strides = new Stride[Ns];
Playground[] plays = new Playground[Ns];

int[] counter = new int[Nx];

float g = -0.05; //Gravitational acceleration
float seed = 0;
int i, ii, xi, yi, bi, si, strideIndex, playIndex; //Counters
int ballcount = 0;
int buttonCount;

//color[]col = {color(0,7,37),color(2,131,242),color(84,236,255),color(121,228,255),color(10,18,20),color(153,207,219)};

color colorShift(color col){
  float range = 15;
  float r = hue(col);
  float g = saturation(col);
  float b = brightness(col);
  color colreturn = color(r+random(range*-1,range),g+random(range*-1,range),b+random(range*-1,range));
  return colreturn;
}

void restart(){
  seed = random(1000);
  strideIndex = 0;
  playIndex = 0;
  for(yi = 0; yi < Ny; yi++){
    
    for(xi = 0; xi < Nx; xi++){
      //pins[xi + Nx*yi]= new Pin( 
      //  (width/(Nx)) * (xi + float((yi%2))/2),
      //  (height/(Ny+1)) * float(yi) );
      pins[xi + Nx*yi]= new Pin(((width-150)/(Nx)) * (xi - noise(seed+xi,seed+yi) * 1.5+ float((yi%2))/2),
        (height/(Ny+1)) * (float(yi) + noise(seed+xi,seed+yi) * 2) );
        if(yi > Ny*0.35){
         if(strideIndex<Ns){
           //Stride st = new Stride((width/(Nx)) * (xi + float((yi%2))/2),(height/(Ny+1)) * float(yi),random(10),random(50));
           strides[strideIndex] = new Stride(pins[xi + Nx*yi].x,pins[xi + Nx*yi].y,random(5,10),random(50,150));
           //pins[xi + Nx*yi].x,pins[xi + Nx*yi].y
           strideIndex++;
           //new Stride((width/(Nx)) * (xi + float((yi%2))/2),(height/(Ny+1)) * float(yi),random(10),random(50));
         }
        }
        else{
         if(playIndex<Ns){
         plays[playIndex] = new Playground(pins[xi + Nx*yi].x,pins[xi + Nx*yi].y,random(30,100));
         playIndex++;
         }
        }
       
    }
  }
  
  //background(color(27,51,56));
  
  
  for(bi = 0; bi < Nb; bi++){
    balls[bi] = new Ball();
    balls[bi].reset();
  }
}

void setup(){
  //background();
  size(550, 800);
  img = loadImage("Images/lifeOfDots.jpg");
  font = createFont("font/Comfortaa-Bold.ttf", 12);
  textFont(font);
  buttonCount = 0;
  strokeCap(SQUARE);
  noStroke();
  ellipseMode(RADIUS);
  colorMode(HSB);
  //place pins

  restart();
}

void draw(){  
  
  if(restarting){
    //print the text
    // delay(800);
    restart();
    restarting = false;
  }



  //if(background_refresh == true){
  //  background(color(27,51,56));}
  background(img);
  
  for(ii = 0; ii < frameskip; ii++){
  
  //Reset Ball
  for(bi = 0; bi < Nb; bi++){
    
    //reset
    //if(balls[bi].y < 0 && balls_refresh == true){
    //  for(xi = 0; xi < Nx; xi++){
    //    if(balls[bi].x > (width/(Nx)) * xi && balls[bi].x < (width/(Nx)) * (xi+1)){
    //       counter[xi]++;}}
    //  balls[bi].reset();
    //  ballcount++;
    //}
    
    //if(balls[bi].y < 0){
    //  balls[0].reset();
    //}
    
    //if (ballcount >= maxballs) exit();
  
    //Check collision
    for(i = 0; i < Nx*Ny; i++){
      balls[bi].checkCollision(pins[i]);
    }
  
    balls[bi].integrate();
  
    //drawing phase
    if(ii == frameskip-1)balls[bi].drawme();
  }}
  //noStroke();
  //fill(96);
  for(i = 0; i < Nx*Ny; i++){
  pins[i].drawme();}
  for(si = 0; si < strideIndex - 1; si++){
    strides[si].drawme();
    //print(strides[si].x);
  }
  for(si = 0; si < playIndex - 1; si++){
    plays[si].drawme();
  }
  //noStroke();
  //fill(side);
  //rect(400,0,150,800);
  
  //print(strides[0].x);
  //textSize(32);
  //fill(0,50);
  //rect(50,50,70,80);
  
  
  //String s = "The quick brown fox jumps over the lazy dog.";
  
  //text(s, 50, 50, 70, 80);
  
  balls[0].textme();
  fill(150);
  //String num = "Dot"+ balls[0].n +" has born.";
  //text(num, 410, 30, 150, 80);
  //String s1 = "The ball is born.";
  //text(s1, 410, 30, 70, 80);
  //String m = "The ball is going to school.";

  //text(m, 410, 150, 70, 80);
  //String q = "The ball want to drop school.";

  //text(q, 410, 350, 70, 80);
  //String y = "Yes.";

  //text(y, 410, 420, 70, 80);
  //String b = "The ball has rest in peace.";

  //text(b, 410,700, 70, 80);


  //colorTest(col, 0);
  //colorTest(colPlay, 1);
  //colorTest(colDot, 2);
  //colorTest(colStroke,3);

}

class Playground
{
  float x, y, h, r, r1, r2, w;
  color c;
  
  Playground(float xx, float yy, float rr){
    x = xx; y = yy; h = rr; r = random(-PI);
    w = random(5,15);
    r1 = random(PI); r2 = r1+random(PI);
    int coli = int(random(colPlay.length));
    c = colorShift(colPlay[coli]);
  }
  
  
  
  void drawme(){
    stroke(c);
    noFill();
    strokeWeight(w);
    translate(x,height-y);
    rotate(r);
    //rect(0,0,w,h);
    arc(0,0,h,h,r1,r2);
    rotate(-r);
    translate(-x,-height+y);
  }

}




class Stride
{
  float x, y, h, w, r;
  color c;
  
  Stride(float xx, float yy, float hh, float ww){
    x = xx; y = yy; h = hh; 
    if(random(1)>0.2){
      r =  (int(random(2))*2-1)*0.8+random(-0.1,0.1);
      w = ww; 
    }else{
      r = 1.5708;
      w = ww*random(2,4);
    }
    int coli = int(random(colStroke.length));
    c = colorShift(colStroke[coli]);
  }
  
  
  
  void drawme(){
    noStroke();
    //fill(96);
    fill(c);
    translate(x,height-y);
    rotate(r);
    rect(0,0,w,h);
    rotate(-r);
    translate(-x,-height+y);
  }

}

class Pin
{
  float x, y, r;
  color c;
  
  Pin(float xx, float yy){
    x = xx; y = yy;
    r = pinr;
    int coli = int(random(colDot.length));
    c = colorShift(colDot[coli]);}
    
  void drawme(){
    noStroke();
    //fill(96);
    fill(c);
    ellipse(x, height-y,r,r);
  }
}

class Ball
{
  float x, y, vx, vy, r, l;
  float bouncyness;
  color c;
  String n;
  int phraseCount;
  String[] txt = new String[7];
  String[] d = new String[5];
  boolean out = false;
  
  Ball(){
    x = random(50,width-200); y = 0; vx = 0; vy = 0; r = 8; c = color(0,255,0); bouncyness = 0.5; l = random(800,1000);
    maketext();
  }
  void maketext(){
    n = str(floor(random(1)*100000));phraseCount = 0;
    txt[0] = "Dot"+ n +" has born.";
    d[0] = n + " has died early.";
    int i1 = int(random(t1.length));
    txt[1] = "In the dot morning, "+ t1[i1] +".";
    d[1] = n + " has died early.";
    int i2 = int(random(t2.length));
    txt[2] = "Dot noon, "+ t2[i2] +", it has decided.";
    d[2] = n + " has died too young, not even finish its " + t2d[i2]+".";
    int i3 = int(random(t3.length));
    txt[3] = "Dot afternoon, it’s "+t3[i3]+".";
    d[3] = n + " has die while " + t3d[i3]+".";
    int i4 = int(random(t4.length));
    txt[4] = "While dot sunset, it "+t4[i4]+".";
    int i41 = int(random(t4d.length));
    int i42 = int(random(t4d2.length));
    //d[4] = "";
    d[4] = "In the dot night, "+ n +" has " + t4d[i41]+" in "+t4d2[i42]+".";
    int i5 = int(random(t4.length));
    txt[5] = "It "+t4[i5]+".";
    int i6 = int(random(t4.length));
    txt[6] = "It "+t4[i6]+".";
  }
  
  void reset(){
    float rr = random(1);
    
    restarting = true;
    maketext();
    l = random(800,1000);
    r = ballr;
    bouncyness = bouncy;
    y = height+50; 
    //x = width/2 - range/2 + rr*range;//r*range;
     //x = random((width-150));
    vx = 0; vy = 0;
    
    //c = color(192*rr,255,255);
    int coli = int(random(col.length));
    c = colorShift(col[coli]);

  }
  
  void integrate(){
    //Integrate x''
    vy += g;
    //Integrate x'
    x += vx;
    y += vy;
    if(y<height*0.6){
      bouncyness = 0;
    }
  }
    
  void drawme(){

    if(l<0){
      //reset();
      out = true;  
    }else{
      noStroke();
      fill(c);
      if(balls_dots == true)
        ellipse(x, height-y, 1, 1);
      else ellipse(x, height-y, r, r);
      l--;
    }
    if(x<0||x>width-150||y<0){
      out = true;
    }
    //texts
    
    //if(){
    //}
  }
  
  void textme(){
    //String num = "Dot"+ balls[0].n +" has born.";
    noStroke();
    fill(side);
    rect(400,0,150,800);
    fill(200);
    if(y<height-50-phraseCount*(height/6)&&phraseCount<6&&!out){
      phraseCount ++;
    }
    if(phraseCount>0){
      for(int i = 0;i< phraseCount; i++){
          text(txt[i], 410, 20+100*i, 120, 80);
      }
      if(out){
        int dcount = phraseCount - 1;
              if(dcount<5){
                text(d[dcount], 410, 20+100*(dcount+1), 120, 100);
              }else{
                text(d[4], 410, 20+100*(dcount+1), 120, 100);
              }  
          }
    }

    
  }
  
  void checkCollision(Pin pin){ 
    if(sqrt(sq(x + vx - pin.x) + sq(y + (vy+g) - pin.y)) < (r + pin.r)){collide(pin);}
  }

  void collide(Pin pin){  
      
      float distance = sqrt(sq(pin.x - x)+sq(pin.y - y));

      float speed_module = sqrt( sq(vx) + sq( (vy+g) ) );
    
      float collision_angle = acos( (vx*(pin.x-x) + (vy+g)*(pin.y-y))/( speed_module * distance ) );
    
      float perpendicular_speed = speed_module * cos(collision_angle);
      
      vx -= (1 + bouncyness) * ( perpendicular_speed*(pin.x-x)/distance );
      vy -= (1 + bouncyness) * ( perpendicular_speed*(pin.y-y)/distance );

  }
}

void mousePressed(){
  balls[0].reset();
}


  