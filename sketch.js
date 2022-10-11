let x=0;

function setup() {
  let canvas = createCanvas(400, 400);
    canvas.parent("js");
}

function draw() {
  background(220);
  stroke(225,0,0);
  strokeWeight(5);
  fill(255);
  ellipse(x+200,200,200,200);
  fill(225,0,0);
  rect(x+170,125,20,150);
  rect(x+170,125,50,20);
  rect(x+225,125,20,60);
  rect(x+170,185,75,20);
  
x=x+1;
  
}