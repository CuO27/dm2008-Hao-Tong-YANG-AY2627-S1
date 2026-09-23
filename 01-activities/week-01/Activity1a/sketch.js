// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 200, 200);
  
  //body
  fill(60, 88, 133);
  rect(175, 100, 20, 50);
  rect(205, 100, 20, 50);
  rect(175, 150, 50, 100);

  //legs
  ellipse(170, 230, 40, 40);
  ellipse(230, 230, 40, 40);
  ellipse(166, 245, 50, 15);
  ellipse(235, 245, 50, 15);
  noStroke();

  //details
  fill(220, 200, 200);
  rect(177, 120, 10, 30);
  rect(214, 120, 10, 30);
  ellipse(190, 165, 7, 7);
  ellipse(210, 165, 7, 7);
  ellipse(200, 180, 8, 18);

  ellipse(180, 240, 20, 15);
  ellipse(220, 240, 20, 15);
  
  rect(180, 210, 10, 30);
  rect(210, 210, 10, 30);
  noStroke();

  //wings
  fill(60, 88, 133);
  triangle(125, 165, 165, 185, 105, 190);
  triangle(105, 190, 98, 200, 130, 188);
  triangle(130, 185, 165, 185, 140, 200);

  triangle(275, 165, 235, 185, 295, 190);
  triangle(295, 190, 302, 200, 270, 188);
  triangle(270, 185, 235, 185, 260, 200);
  
  helperGrid(); // do not edit or remove this line
}
