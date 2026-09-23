// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);

  for (let i = 0; i < width; i += 40) {
    // % (modulo) alternates between 0 and non-zero — good for switching every other shape
    if (mouseIsPressed) {
      fill(180, mouseY, mouseX-i);
    } else if (i % 80 == 0) {
      fill(180, mouseY, mouseX-i);
    } else {
      fill(180, mouseX-i, mouseY);
    }

    // --- Your shape goes here ---
    // Try swapping this out for your own rule.
    ellipse(i + 25, height / 2, 100);
  }
  
    for (let i = 0; i < width; i += 50) {
    // % (modulo) alternates between 0 and non-zero — good for switching every other shape
    if (mouseIsPressed) {
      fill(180, mouseY, mouseX-i);
    } else if (i % 100 == 0) {
      fill(180, mouseX-i, mouseY);
    } else {
      fill(180, mouseY, mouseX-i);
    }

    // --- Your shape goes here ---
    // Try swapping this out for your own rule.
    rect(i + 25, height / 8, 100, 220);
    rect(i + 25, height*7 / 8, 100, 220);
  }
}