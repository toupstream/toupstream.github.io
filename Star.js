function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width*1.5);

  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 5, 0);
    ellipse(this.sx, this.sy, this.r, this.r);
    this.px = map(this.x / this.pz, 0, 1, 0, width);
    this.py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    noFill();
    line(this.px, this.py, this.sx, this.sy);
  }
}