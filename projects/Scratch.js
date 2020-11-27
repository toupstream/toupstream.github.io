function Scratch() {
  this.x = random(width);
  this.y = random(height);
  this.z = random(width);
  this.zs = [];
  this.pzs = [];
  this.poses = [];
  this.pposes = [];
  this.rzs = [];
  this.rpzs = [];
  this.rposes = [];
  this.rpposes = [];
  this.vel = createVector(0, 0);
  this.pos = createVector(width, random(cy*0.2,cy*1.5));
  this.ppos = createVector(0, 0);
  this.sw = 0;


  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = width;
      this.y = random(cy*0.5,height);
      this.pz = this.z;
      this.zs.splice(0, this.zs.length);
      this.pzs.splice(0, this.pzs.length);
      this.poses.splice(0, this.poses.length);
      this.pposes.splice(0, this.pposes.length);
    }
  }

  this.move = function() {
    // var transition = map(this.pos.x, 0, width, 0, 1)
    // var angle = noise(this.pos.x / 20, this.pos.y / 20) * transition * TWO_PI * 20;
    // this.vel.x = cos(angle);
    // this.vel.y = sin(angle);
    // this.vel.mult(2);
    // this.vel.z = angle*0.02;
    // print(this.vel.z);
    // print(simulationSpeed);
    this.ppos = this.pos;
    // this.pos.add(this.vel);
    this.poses.push(this.pos);
    this.pposes.push(this.ppos);
  }

  this.show = function(sw) {
    this.sx = map(this.x / this.z, 1, 0, 0, width);
    this.sy = map(this.y / this.z, 0, random(0.2,1), 0, height);
    this.px = map(this.x / this.pz, 1, 0, 0, width);
    this.py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    var v1 = createVector(this.sx, this.sy);
    var v2 = createVector(this.px, this.py);
    this.zs.push(v1);
    this.pzs.push(v2);

    noFill();
    this.rzs = this.zs.slice(0);
    this.rpzs = this.pzs.slice(0);
    this.rposes = this.poses.slice(0);
    this.rpposes = this.pposes.slice(0);
    this.sw = random(0.5,1.2);
    stroke(map(this.sw,0,1,20,200));
    strokeWeight(this.sw);
    beginShape();
    for (this.iTrace = 0; this.iTrace < this.zs.length; this.iTrace++) {
      var pos = this.poses[this.iTrace];
      var ppos = this.pposes[this.iTrace];
      var zs = this.zs[this.iTrace];
      var pzs = this.pzs[this.iTrace];
      curveVertex(pzs.x, pzs.y)
      curveVertex(ppos.x, ppos.y);
      curveVertex(zs.x, zs.y);
      curveVertex(pos.x, pos.y);
    }
    endShape();
  }

  this.refresh = function() {
    noFill();
    stroke(255);
    beginShape();
    for (this.iTrace2 = 0; this.iTrace2 < this.rzs.length; this.iTrace2++) {
      // bezier(this.px, this.py, this.ppos.x, this.ppos.y, this.sx, this.sy, this.pos.x, this.pos.y);
      var rpos = this.rposes[this.iTrace2];
      var rppos = this.rpposes[this.iTrace2];
      var rzs = this.rzs[this.iTrace2];
      var rpzs = this.rpzs[this.iTrace2];
      curveVertex(rpzs.x, rpzs.y)
      curveVertex(rppos.x, rppos.y);
      curveVertex(rzs.x, rzs.y);
      curveVertex(rpos.x, rpos.y);
    }
    endShape();
  }
}