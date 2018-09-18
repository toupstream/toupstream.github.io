// Upstraem
// http://www.touptream.com
// formula comes from : http://paulbourke.net/geometry/supershape/
// based on "SuperShape Sketch" by Daniel Shiffman

function SuperShape(x, y, m, n1, n2, n3,rot,scl,quantity) {
  this.inc = TWO_PI / quantity; //define the quantity of vertex
  this.scl = scl; //scale of object
  this.a = 1;
  this.b = 1;
  this.x = x;
  this.y = y;
  this.m = m;
  this.n1 = (n1 == null) ? 60 : n1;
  this.n2 = (n2 == null) ? 55 : n2;
  this.n3 = (n3 == null) ? 30 : n3;



  this.show = function() {
    push();
    translate(this.x, this.y);
    rotate(rot);
    stroke(255);
    noFill();
    beginShape();
    var of = 0;
    for (var j = 0; j < TWO_PI; j += this.inc) {
      this.noi = noise(of, op) * 50;
      this.noi2 = noise(50 + of, op) * 50;
      this.q = this.scl * this.cal(j)
      this.rx = this.q * cos(j);
      this.ry = this.q * sin(j);
      vertex(this.rx + this.noi, this.ry + this.noi2);
      of += amp*10;
    }
    endShape(CLOSE);
    pop();
  }


  this.cal = function(theta) {
    this.angle = theta * this.m / 4
    this.r = 1 / pow((pow(abs((1 / this.a) * cos(this.angle)), this.n2) + pow(abs((1 / this.b) * sin(this.angle)), this.n3)), 1 / this.n1);
    return (this.r);
  }
}