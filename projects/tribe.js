function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
var grid,dots = [];
// var colors = ["#d66932", 
//         "#704236", 
//         "#cfbd4b", 
//         "#61a352", 
//         "#7b827e",             
//         "#5facdb",
//         0]
var colors = [];
var cols;
var rows;
var resolution = 10;
var canvas;

function setup() {
  // background(0);
  // colorMode(HSB);
  canvas = createCanvas(600, 600);
  cols = width / resolution;
  rows = height / resolution;
  grid = make2DArray(cols, rows);
  var a = random(80,160);
  var saturation = 200;
  var brightness = 200;
  colors = [color(220,135,80,a),color(135,95,100,a),color(215,200,100,a),color(145,165,110,a),color(160,160,235,a),color(135,195,225,a)];
  // colors = [color(235,140,35,a),color(100,40,45,a),color(170,170,175,a),color(115,165,100 ,a),color(50,150,240,a),color(170,235,240,a)];
  // colors = [color(50,saturation+random(50),brightness+random(50),a),color(100,saturation+random(50),brightness+random(50),a),color(150,saturation+random(50),brightness+random(50),a),color(200,saturation+random(50),brightness+random(50) ,a),color(250,saturation+random(50),brightness+random(50),a),color(0,saturation+random(50),brightness+random(50),a)];


//initial
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      d = new dot(floor(random(colors.length)),floor(random(2)));
      dots.push(d);
      grid[i][j] = d.life;
    }
  }

}

// function dot(){
//   this.state = floor(random(2));
//   return this.state;
// }
// function mousePressed() {

//   for (var i = 0; i < dots.length; i++) {
//     dots[i].clicked(mouseX, mouseY);
//   }
// }

function draw() {
  // print(dots);
  // frameRate(10);
  background(0,5);
  // for (var q = 0; q < dots.length; q++) {
  //   dots[q].show();
  // }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * resolution;
      var y = j * resolution;
      //random activate
      if(frameCount%50 == 1){
        if(floor(random(15))==1){
          grid[i][j] = 1;
        }
      }
      dots[j+(i*rows)].life = grid[i][j];
      //mouseTribe
      // if(mouseIsPressed){
      // for (var q = 0; q < dots.length; q++) {
      //   dots[i].clicked(mouseX, mouseY);
      //   }
      // }
      if (grid[i][j] == 1) {
        // fill(random(255),random(255),random(255),20);
        // stroke(0);
        // fill(dots[j].c);
        dots[j+(i*rows)].show();
        // if(i%2===0){
        //   dots[j+(i*rows)].p((i+2)*resolution, y, resolution - 1, resolution - 1);
        // }else{
          dots[j+(i*rows)].p(x, y, resolution - 1, resolution - 1);
        // }
        // dots[j].show();
        

      }
    }
  }
  var next = make2DArray(cols, rows);
  


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      // var state = grid[i][j];
      var state = dots[j+(i*rows)].life;
      // if(i == 0 || i == cols -1 || j == 0 || j == rows -1 ){
      // next[i][j] = state;
      // }else{
      // var sum = 0;
      var neighbors = countNeighbors(grid, i, j);


      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
        // if(frameCount%10 == 0){

        var ncol = getNcol(j+(i*rows), i, j);
        var rCol = floor(random(ncol.length));
        
        // }
        // print(ncol.length);
      //mutation
        if(floor(random(50))==1){
          dots[j+(i*rows)].c = colors[floor(random(colors.length))];
        }else{
          var newcol = ncol[rCol];
          // newcol.levels[0] += sin(noise(frameCount))*100;
          // newcol.levels[1] -= sin(noise(frameCount))*150;
          // newcol.levels[2] += sin(noise(frameCount))*220;
          // newcol.levels[3] += sin(noise(frameCount))*50;

          var midcol = lerpColor(ncol[rCol], newcol, 0.5);
        dots[j+(i*rows)].c = newcol;}
      }
       else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  grid = next;
}

function countNeighbors(grid, x, y) {
  var sum = 0;
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      var col = (x + i + cols) % cols;
      var row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
    sum -= grid[x][y];
    return sum;
}
function getNcol(index, x, y){
  var ncols = [];
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      // var col = (x + i + cols) % cols;
      var newIndex;


if(frameCount %20 ==0){
      //normal effecr
      if(x == 0 && i == -1){
        newIndex = index + ((cols - 1)*rows);
      }else if(x == cols - 1 && i ==1){
        newIndex = index - ((cols - 1)*rows);
      }else if(y == 0 && j == -1){
        newIndex = index + (rows - 1);
      }else if(y == rows - 1 && j == 1){
        newIndex = index - (rows - 1);
      }else{
        newIndex = (index + j + (i * rows));
      }
          if(dots[newIndex].life == 1){
        ncols.push(dots[newIndex].c);
        }
} else{
      
            //rows effect
      newIndex = (index + j + (i * rows)) % rows;
      // var newIndex;
      if(newIndex < 0){
      newIndex = newIndex + rows * cols;
      }else if (newIndex > rows * cols){
        newIndex = newIndex - rows * cols;
      }
      ncols.push(dots[newIndex].c);
}
      
      // sum += grid[col][row];
      // print(dots[newIndex].life);
      // if(newIndex !== index){

      }
    // }
  }
    return ncols;
  }
  
function mouseClicked() {
  saveFrames('out', 'png', 1, 25);
}
  
