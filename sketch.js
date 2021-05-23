//pageIndex
var elements = [];
var expands = [];
var links = [];
var link;
var focusIndexV=0,focusIndexH=0;
var expand = false;
var move = false;
var movable = true;
var snapped = false;
var hash = false;
var countDownSpan = 25;
var countDown = countDownSpan;


function setup() {
  focusIndexV = int(map(mouseY,0,windowHeight,0,5));
  // focusIndexH = int(map(mouseX,0,windowWidth,0,5));
  // print(movedX);
  // noCursor();
  noCanvas();
  
  if(window.location.hash){
    var contentNav = document.querySelector("#contentNavigation");
    if(window.location.hash === "#motivation"){
      document.getElementById("motivation").style.display = "block";
      document.getElementById("intro").style.display = "none";
      contentNav.appendChild(contentNav.firstElementChild);
      document.getElementById("introSpan").className = "otherSpan";
      document.getElementById("introSpan").firstElementChild.className = "contentNavTag";
      document.getElementById("motivationSpan").firstElementChild.className = "currentTag";
      document.getElementById("motivationSpan").className = "currentSpan";
      // document.getElementsByClassName("currentTag").innerHTML = "Motivation";
    }
    if(window.location.hash === "#intro"){
      document.getElementById("intro").style.display = "block";
    }
    if(window.location.hash === "#process"){
      document.getElementById("process").style.display = "block";
      document.getElementById("intro").style.display = "none";
      contentNav.appendChild(contentNav.firstElementChild);
      contentNav.appendChild(contentNav.firstElementChild);
      document.getElementById("introSpan").className = "otherSpan";
      document.getElementById("introSpan").firstElementChild.className = "contentNavTag";
      document.getElementById("processSpan").firstElementChild.className = "currentTag";
      document.getElementById("processSpan").className = "currentSpan";
    }
  }


  
  var nav = selectAll("li","#nav");
  elements.push(nav);
  expands = selectAll(".eachContent","#content");
  if(select("#content").elt.dataset.expand=="expand"){
    expand = true;
    // print(select("#content").elt.dataset.expand);
  }else if(select("#content").elt.dataset.expand=="move"){
    move = true;
  }
  // print(expands[0].elt.className);
  for(var i = 0;i<expands.length; i++){
    elements.push(selectAll(".contentSelector", expands[i]));
  }
  var dir = selectAll("li","#dir");
  dir.splice(0,0,select("#mail"));
  // dir.concat();
  elements.push(dir);
  for(var j = 0;j<elements.length; j++){
    var linkElements = [];
    for(var k = 0;k<elements[j].length; k++){
      linkElements[k] = elements[j][k].elt.dataset.link;
    }
    links[j] = linkElements;
  }
  // link = createA('index.html', 'link');
  // link.position(mouseX-10,mouseY-10);
  // link.style("z-index","3");
  // link.style("opacity","0");
  // link.style("cursor","none");
  var enter = select("span",select(".picture"));
  enter.addClass("highlight");
  // enter.style('cursor','pointer');
  // select("#contentNavigation").style('display','none');
  var cNav = selectAll('li',select("#contentNavigation"));
  if(cNav.length>1){
  for(var o = 0;o<cNav.length; o++){
    cNav[o].style('display','none');
  }
  // print(enter.elt.dataset.link);
  link = createA(enter.elt.dataset.link, 'link');
  link.parent(enter);
  link.position(enter.position().x,enter.position().y);
  // link.style('position',"absolute");
  var label = createElement('label', ' ');
  label.attribute("for","checkbox");
  link.mouseOver(In);
  link.mouseOut(Out);
  link.style('width',"100%");
  // link.style('height',"100%");
  link.style("opacity","0");
  link.style("z-index","3");
  link.style("display","inline-block");
  }
}


function In(){
  // window.open();
  select("span",select(".picture")).style('background-color','#16748e')
}

function Out(){
  // window.open();
  select("span",select(".picture")).style('background-color','#555')
}

function draw() {
  // noCursor();
  if(!movable){
    countDown--;
  }
  if(countDown<0){
    movable = true;
    countDown = countDownSpan;
  }

  // enter.mousePressed(Jump());
  //create a link for content page ; link.attribute("href",links[focusIndexV][focusIndexH]);
  // if(hash){
  //   link.elt.onclick = function(){
            
  //             // window.location.reload(true);
            
  //           // if(window.location.hash){
  //           setTimeout((function(){location.reload(true)}), 5);
  //           // print("!");
  //           // }
  //   };
  // }else{
  //   link.elt.onclick = function(){
  //             window.location.reload(true);
  //   };
  // }
  

  
  // if(winMouseY>windowHeight||winMouseY<0){
  //   print("!");
  //   focusIndexV = int(map(mouseY,0,windowHeight,0,5));
  // }
}

function focus(){
  
}

// function mouseMoved() {
//   var moveVec = createVector(pmouseX-mouseX,pmouseY-mouseY);
  
//   //edges handle function;

//   // link.position(mouseX-10,mouseY-10);
  
  
//   if(movable){
//     var nonap = false;
//     if(mouseY<min(windowHeight*0.5,50)&&focusIndexV>0){
//       if(!snapped){
//         FocusVertical(-1);
//         FocusVertical(-1);
//         FocusVertical(-1);
//         FocusVertical(-1);
//         snapped = true;
//       }
//     }else if(mouseY>max(windowHeight*0.95,windowHeight-80)&&focusIndexV<elements.length){
//       if(!snapped){
//         FocusVertical(1);
//         FocusVertical(1);
//         FocusVertical(1);
//         FocusVertical(1);
//         snapped = true;
//       }
//     }else{
//       nonap = true;
//     }
//     if(mouseX<min(windowWidth*0.1,100)&&focusIndexH>0){
//       if(!snapped){
//         FocusHorizontal(-1);
//         FocusHorizontal(-1);
//         FocusHorizontal(-1);
//         FocusHorizontal(-1);
//         snapped = true;
//       }
//     }else if(mouseX>max(windowWidth*0.9,windowWidth-100)&&focusIndexH<elements[focusIndexV].length){
//       if(!snapped){  
//         FocusHorizontal(1);
//         FocusHorizontal(1);
//         FocusHorizontal(1);
//         FocusHorizontal(1);
//         snapped = true;
//       }
//     }else if(nonap){
//       snapped = false;
//     }
//     link.attribute("href",links[focusIndexV][focusIndexH]);
//   }
//   // print(movable);
//     if(movable&(abs(moveVec.y)>2.5||abs(moveVec.x)>2)){
      

      
//       // if  (abs(moveVec.y)<3&&abs(moveVec.x)>3){//horizontal
//       // if(90<h<360||180<h<270){
//       if(abs(moveVec.heading()-createVector(1,0).heading())<HALF_PI||abs(moveVec.heading()-createVector(-1,0).heading())<HALF_PI){
//       // if (degrees(moveVec.heading)){
//         if (moveVec.x>0){
//           FocusHorizontal(-1);
//         }else if (moveVec.x<0){
//           FocusHorizontal(1);
//         }
//   // }else if(abs(moveVec.x)<3&&abs(moveVec.y)>3){
//       }else{ //vertical
//       // print("mouseY:"+moveVec.y);
//         if (moveVec.y>0){
//           FocusVertical(-1);
//         }else if(moveVec.y<0){
//           FocusVertical(1);
//         }
//       }
//       link.attribute("href",links[focusIndexV][focusIndexH]);
//       // movable = false;
//       //handling fast move
//       // countDown < 0;
//       countDown = map(moveVec.mag(),0,50,10,0);
//       // print(countDown);
//       // countDown = countDownSpan;
//     }
// }

function FocusVertical(inc){
  
  if(focusIndexV + inc < elements.length&&focusIndexV+inc>=0){//valideFocus
    // if(focusIndexV>0&&focusIndexV<5){
    //   elements[focusIndexV].addClass("beforeExpand");
    // }
    if(focusIndexH<elements[focusIndexV].length){
      elements[focusIndexV][focusIndexH].removeClass("highlight");
      
    }
    // if(expands[focusIndexV-1]){??
    if(expand){
      if(focusIndexV>0&&focusIndexV<5){
        expands[focusIndexV-1].removeClass("expand");
      }
    }
    if(move){
      if(focusIndexV==2){
        // expands[focusIndexV-1].removeClass("move");
        select(".picture").style("margin-left","35vw");
      }
      if(focusIndexV==1){
        hash = true;
      }else{
        hash = false;
      }
    }
    focusIndexV+=inc;
    if(expand){
      if(focusIndexV>0&&focusIndexV<5){
        expands[focusIndexV-1].removeClass("beforeExpand"); 
        expands[focusIndexV-1].addClass("expand"); 
      }
    }
    focusIndexH = int(map(mouseX,0,windowWidth,0,elements[focusIndexV].length));
    if(focusIndexH<elements[focusIndexV].length){
      // print(focusIndexV);
      // print(focusIndexH);
      
      elements[focusIndexV][focusIndexH].addClass("highlight");
      movable = false;
    }else{
      focusIndexH = 0;
      movable = false;
    }
    if(move){
      if(focusIndexV==2){
        // expands[focusIndexV-1].addClass("move");
        var imgLength = 0;
        for(var i =0;i<focusIndexH;i++ ){
          
          imgLength += elements[2][i].width;
        }
        imgLength -= 400;
        select(".picture").style("margin-left",""-imgLength+"px");
        // select(".picture").style("margin-left",""+(10-focusIndexH*40)+"vw");
      }
      // print(elements[focusIndexV][focusIndexH].elt.dataset.to);
      if(focusIndexV==1){
        hash = true;
      }else{
        hash = false;
      }
    }
    // 
    
    
    // if(elements[focusIndexV+ inc].length>1){//if it's to nav
    //   if(elements[focusIndexV].length>1){//if it's from nav
    //     elements[focusIndexV][focusIndexH].removeClass("highlight");
    //   }
    //   if(focusIndexV>0&&focusIndexV<5){//If it's from Catogory
    //     elements[focusIndexV][0].removeClass("expand");
    //   }
    //   focusIndexV+=inc;
    //   elements[focusIndexV][focusIndexH].addClass("highlight");
    //   focusIndexH = 0;
    //   movable = false;
    // }else{//if it's to catagory
    //   if(elements[focusIndexV].length>1){//if it's from nav
    //     elements[focusIndexV][focusIndexH].removeClass("highlight");
    //   }else{//If it's from Catogory
    //     elements[focusIndexV].removeClass("expand");
    //   }
    //   focusIndexV+=inc;
    //   elements[focusIndexV].addClass("expand");  // expanding the html element
    //   focusIndexH = 0;
    //   movable = false;
    // }
    
    if(expand){
      for(var j = 1;j < 5; j++){
          expands[j-1].removeClass("narrow");
          expands[j-1].addClass("beforeExpand");
      }
      if(focusIndexV>0&&focusIndexV<5){
        for(var i = 1;i < 5; i++){
          if(i!=focusIndexV){
            expands[i-1].addClass("narrow");
            expands[i-1].removeClass("beforeExpand");
          }
        }
      }
    }
    
  }
}

function FocusHorizontal(inc){
  if(focusIndexH+inc < elements[focusIndexV].length&&focusIndexH+inc >= 0){
    if(move){
      if(focusIndexV-1==1){
        // expands[focusIndexV-1].removeClass("move");
        select(".picture").style("margin-left","10vw");
      }
    }
    
    elements[focusIndexV][focusIndexH].removeClass("highlight");
    focusIndexH+=inc;
    elements[focusIndexV][focusIndexH].addClass("highlight");
    movable = false;
      
    if(move){
      if(focusIndexV==2){
        // expands[focusIndexV-1].addClass("move");
        var imgLength = 0;
        for(var i =0;i<focusIndexH;i++ ){
          
          imgLength += elements[2][i].width;
        }
        imgLength -= 400;
        select(".picture").style("margin-left",""-imgLength+"px");
        // select(".picture").style("margin-left",""+(10-focusIndexH*40)+"vw");
      }
    }
  }
  // if(elements[focusIndexV].length>1){
  //   if(focusIndexH+inc < elements[focusIndexV].length&&focusIndexH+inc >= 0){
  //     elements[focusIndexV][focusIndexH].removeClass("highlight");
  //     focusIndexH+=inc;
  //     elements[focusIndexV][focusIndexH].addClass("highlight");
  //     movable = false;
  //     // print(focusIndexH);
  //   }
  // }
  // focusIndexH+=inc;
}

// function mousePressed() {
//   print("1");
//   if(elements[focusIndexV].length>1){
//     // elements[focusIndexV][focusIndexH]
//   }else{
//     // elements[focusIndexV]
//   }
// }
