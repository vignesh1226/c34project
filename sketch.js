var drawing = [];

function setup(){
 createCanvas(600,600);
    
}

function draw(){
 background(0);
    
if(mouseIsPressed){
   var point = {
    x:mouseX,
    y:mouseY
   }
   drawing.push(point);
}

beginShape()
stroke(255);
strokeWeight(3);
noFill();    
for(var i = 0; i< drawing.length; i++){
    vertex(drawing[i].x,drawing[i].y)
}
}
