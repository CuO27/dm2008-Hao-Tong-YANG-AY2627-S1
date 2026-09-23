// DM2008 — Activity 3b
// One Function Wonder (20 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.
let rot = 0;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background("#371a94");
  flower(200, 200, 50, 50);
  flower(100, 300, 40, 40);
  flower(100, 100, 40, 40);
  flower(400, 400, 30, 30);
  flower(300, 300, 40, 40);
  flower(300, 100, 40, 40);
  flower(0, 0, 30, 30);
  flower(0, 400, 30, 30);
  flower(400, 0, 30, 30);
  
  flowers(100, 100, 30, 30);
  flowers(300, 300, 30, 30);
  flowers(100, 300, 30, 30);
  flowers(300, 100, 30, 30);
  
  rectangle(mouseX, mouseY, 25, 25);
  // Call your function here with different values each time

  rot++;
}

// Define your function outside draw()
// It can be called from anywhere in your sketch
function rectangle(x,y,w,h){
  
  push();                // save state
  translate(mouseX, mouseY);
  rotate(radians(rot));
  
  fill("#f1c9fe");
  ellipse(0-w/2, 0, w*1.5, h);
  ellipse(0+w/2, 0, w*1.5, h);
  ellipse(0, 0+h/2, w, h*1.5);
  ellipse(0, 0-h/2, w, h*1.5);
  fill(mouseX, mouseY, 150);
  rect(0, 0, 20, 20); 
  
  pop();
}


function flower(x, y, w, h) {
  noStroke();
  push();
  translate(x, y);
  rotate(radians(-rot));
  fill("#f1c9fe");
  ellipse(0-w/2, 0, w*1.5, h);
  ellipse(0+w/2, 0, w*1.5, h);
  fill(mouseY, mouseX, 150)
  ellipse(0, 0+h/2, w, h*1.5);
  ellipse(0, 0-h/2, w, h*1.5);
  fill("#fff");
  ellipse(0, 0, w);
  pop();
}

function flowers(x, y, w, h) {
  noStroke();
  push();
  translate(x, y);
  rotate(radians(rot));
  fill("#f1c9fe");
  ellipse(0-w/2, 0, w*1.5, h);
  ellipse(0+w/2, 0, w*1.5, h);
  fill(mouseX, mouseY, 150)
  ellipse(0, 0+h/2, w, h*1.5);
  ellipse(0, 0-h/2, w, h*1.5);
  fill("#fff");
  ellipse(0, 0, w);
  pop();
}