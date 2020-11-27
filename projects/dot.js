function dot(c, life){
  var p;
  this.life = life;
  this.c = colors[c];
  // thi
  
  this.show = function(){
    // this.c = colors[c];
    // print(this.color);
    // return this.color;
    noStroke();
    fill(this.c);
    // strokeWeight(2);
    // noFill();
    // rect(dx, dy, dw, dh);
  }
  
  this.pp = function(){
    p = this.life;
  }
  
  this.p = function(dx,dy,dw,dh){
    rect(dx, dy, dw+random(12), dh+random(12));
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
  }
  
//   this.countNeighbors=function(grid, x, y) {
//   var sum = 0;
//   // var ncol = [];
//   for (var i = -1; i < 2; i++) {
//     for (var j = -1; j < 2; j++) {
//       var col = (x + i + cols) % cols;
//       var row = (y + j + rows) % rows;
//       sum += grid[col][row];
//       // ncol.push(dot[j].c);
//     }
//   }
//     sum -= grid[x][y];
//     return sum;
// }
  // this.getNcol = function(index){
  //   var ncol = [];
    
  // for (var i = -1; i < 2; i++) {
  //   for (var j = -1; j < 2; j++) {
  //     // var col = (x + i + cols) % cols;
  //     var newIndex = (index + j + (i * rows)) % rows;
  //     // sum += grid[col][row];
  //     if(dots[newIndex] != null){
  //       if(dots[newIndex].life = 1){
  //       ncol.push(dots[newIndex].c);
  //       }
  //     }
  //   }
  // }
  //   return ncol;
  // }
  // this.clicked = function(px,py){
  //   var d = dist(px, py, this.p.dx, this.p.dy);
  //   if (d < this.p.dw) {
  //     this.life = 1;
  //     this.c = "#ffffff";
  //   }
  // }
  
}

