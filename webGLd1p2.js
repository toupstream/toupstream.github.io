var canvas;
var gl;

var points = [];
var colors = [];
// var cBuffer;
// var subBuffer;

var NumTimesToSubdivide = 3;

function init()
{
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //
    //  Initialize our data for the Sierpinski Gasket
    //

    // First, initialize the vertices of our 3D gasket
    // Four vertices on unit circle
    // Intial tetrahedron with equal length sides
    
    var vertices = [
        vec3(  0.0000,  0.0000, -1.0000 ),
        vec3(  0.0000,  0.9428,  0.3333 ),
        vec3( -0.8165, -0.4714,  0.3333 ),
        vec3(  0.8165, -0.4714,  0.3333 )
    ];
    
    divideTetra( vertices[0], vertices[1], vertices[2], vertices[3],
                 NumTimesToSubdivide);

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    // enable hidden-surface removal
    
    gl.enable(gl.DEPTH_TEST);

    //  Load shaders and initialize attribute buffers
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Create a buffer object, initialize it, and associate it with the
    //  associated attribute variable in our vertex shader
    
    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, 50000, gl.STATIC_DRAW );
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(colors));
    
    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, 50000, gl.STATIC_DRAW );
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(points));

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    
    canvas.addEventListener("mousedown", function(event){
        // if(mouseY > p5canvas.height*0.5){
        //   mouseLeft = false;
        // }else{
        //   mouseLeft = true;
        // }
        // if(mouseX > p5canvas.width *0.75){
        //   NumTimesToSubdivide = 4;
        // }else if(mouseX > p5canvas.width *0.5){
        //   NumTimesToSubdivide = 3;
        // }else if(mouseX > p5canvas.width *0.25){
        //   NumTimesToSubdivide = 2;
        // }else{
        //   NumTimesToSubdivide = 1;
        // }
        // gl.bufferSubData(gl.ARRAY_BUFFER, 8*index, flatten(points));
        // gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        // gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);

        // if(first) {
        //   first = false;
        //   gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer)
        //   t1 = vec2(2*event.clientX/canvas.width-1, 
        //     2*(canvas.height-event.clientY)/canvas.height-1);
        // }
        // else {
        //   first = true;
        //   t2 = vec2(2*event.clientX/canvas.width-1, 
        //     2*(canvas.height-event.clientY)/canvas.height-1);
        //   t3 = vec2(t1[0], t2[1]);
        //   t4 = vec2(t2[0], t1[1]);

        //   gl.bufferSubData(gl.ARRAY_BUFFER, 8*index, flatten(t1));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 8*(index+1), flatten(t3));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 8*(index+2), flatten(t2));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 8*(index+3), flatten(t4));
        //   gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
        //   index += 4;
          
        //   t = vec4(colors[cIndex]);

        //   gl.bufferSubData(gl.ARRAY_BUFFER, 16*(index-4), flatten(t));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 16*(index-3), flatten(t));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 16*(index-2), flatten(t));
        //   gl.bufferSubData(gl.ARRAY_BUFFER, 16*(index-1), flatten(t));
        // }
    } );
    
    render();
};

function triangles( a, b, c, color )
{

    // add colors and vertices for one triangle
    if(mouseLeft){
      baseColors = [
        vec4( 1.0, 1.0, 1.0, 1.0 ),  // white
        vec4( 0.0, 1.0, 1.0, 1.0 ),   // cyan
        vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
        vec4( 1.0, 1.0, 0.0, 1.0 )  // yellow
    ];
    }else{
      baseColors = [
        vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
        vec4( 0.0, 1.0, 1.0, 1.0 ),   // cyan
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 1.0, 1.0, 1.0, 1.0 )  // white
    ];
    }

    colors.push( baseColors[color] );
    points.push( a );
    colors.push( baseColors[color] );
    points.push( b );
    colors.push( baseColors[color] );
    points.push( c );
}

function tetra( a, b, c, d )
{
    // tetrahedron with each side using
    // a different color
    
    triangles( a, c, b, 0 );
    triangles( a, c, d, 1 );
    triangles( a, b, d, 2 );
    triangles( b, c, d, 3 );
}

function divideTetra( a, b, c, d, count )
{
    // check for end of recursion
    
    if ( count === 0 ) {
        tetra( a, b, c, d );
    }
    
    // find midpoints of sides
    // divide four smaller tetrahedra
    
    else {
        var ab = mix( a, b, 0.5 );
        var ac = mix( a, c, 0.5 );
        var ad = mix( a, d, 0.5 );
        var bc = mix( b, c, 0.5 );
        var bd = mix( b, d, 0.5 );
        var cd = mix( c, d, 0.5 );

        --count;
        
        divideTetra(  a, ab, ac, ad, count );
        divideTetra( ab,  b, bc, bd, count );
        divideTetra( ac, bc,  c, cd, count );
        divideTetra( ad, bd, cd,  d, count );
    }
}

window.onload = init;

function render()
{
  //       if(mouseY > p5canvas.height*0.5){
  //   mouseLeft = false;
  // }else{
  //   mouseLeft = true;
  // }
  // if(mouseX > p5canvas.width *0.75){
  //   NumTimesToSubdivide = 4;
  // }else if(mouseX > p5canvas.width *0.5){
  //   NumTimesToSubdivide = 3;
  // }else if(mouseX > p5canvas.width *0.25){
  //   NumTimesToSubdivide = 2;
  // }else{
  //   NumTimesToSubdivide = 1;
  // }
  //   var subBuffer = gl.createBuffer();
  //   gl.bindBuffer( gl.ARRAY_BUFFER, subBuffer );
  //   gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
  
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays( gl.TRIANGLES, 0, points.length );
    points = [];
    colors = [];
    // cBuffer = subBuffer;
    // swapBuffer;
    requestAnimFrame(init);
    // setTimeout(render,100);
}
