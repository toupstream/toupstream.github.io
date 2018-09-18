function Tyre(x, y, a, b, n, amp, seed, tilt,quantity,osc) {
  this.inc = TWO_PI / quantity; //define the quantity of vertex
  this.scl = 100; //scale of object
  this.osc = (osc==null)?op:osc;

  this.show = function() {
    push();
    translate(x, y);
    rotate(tilt);
    stroke(255);
    noFill();
    // fill(255);
    beginShape();
    var na = 2 / n;
    var of = 0;
    for (var angle = 0; angle < TWO_PI; angle += this.inc) {
      this.noi = noise(seed + of, this.osc) * 80;
      this.noi2 = noise(seed + 200 + of, this.osc) * 80;
      this.x = pow(abs(cos(angle)), na) * a * this.sgn(cos(angle));
      this.y = pow(abs(sin(angle)), na) * b * this.sgn(sin(angle));
      vertex(this.x + this.noi, this.y + this.noi2);
      of += amp;
    }
    endShape(CLOSE);
    pop();
  }

  this.sgn = function(val) {
    if (val > 0) {
      return 1;
    } else if (val < 0) {
      return -1;
    } else {
      return 0;
    }
  }
}