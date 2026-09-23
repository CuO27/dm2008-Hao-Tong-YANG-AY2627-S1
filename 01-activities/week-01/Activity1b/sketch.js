// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let x;
let y;
let w;

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(235, 169, x, w);
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  // background(240,40);
  stroke(y, x, x, y);
  strokeWeight(random(0.5, 6));
  
  fill(x, y+8, y, w);
  ellipse(x+3, y, w-4, w+30);

  fill(y-10,x-40, y-30, w+50);
  ellipse(y, x+100, w+40, w-3);

  // Use mouse for x & y
  ellipse(mouseX+20, mouseY-30, 70, w);
}

function mousePressed(){
  background(0);
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}