var arr = [];
function setup(){
    createCanvas(500,500);
}

function draw(){
    background("white");

}
function mouseDragged(){
    arr = [mouseX,mouseY];

    for(var i = 0;i < arr.length;i++){
        line(arr[0],arr[1],1,1)
    }
}
function mouseReleased(){

}
