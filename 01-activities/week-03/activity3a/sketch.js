// DM2008 — Activity 3a [Guided]
// Array Sampler (20 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let palette = ["#ffbffb", "#bfffe1", "#bfe1ff", "#fffbbf "];
let s = [2, 10, 30, 50];
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  //noStroke();
  pickedStroke = random(s);
}

function draw() {
  background(47, 36, 79);

  const spacing = width / (palette.length + 1);
  // Draw one circle for each palette color
  
  for (let i = 0; i < palette.length; i++) {
    stroke("#fff");
    strokeWeight(pickedStroke);
    fill(palette[i]);         // use the i-th color
    const x = (i + 1) * spacing;        // position from the loop index
    ellipse(x, height / 2, 60);
  }
  // Draw the ellipse using the current color in the array

  //ellipse(width / 2, height / 2, 80);
}

// Advance to the next color each time a key is pressed
function mousePressed() {
    
    currentIndex++; // shorthand for currentIndex += 1

    palette.push(color(random(255), random(255), random(255)));
    palette.splice(2,random(0,3));
    pickedStroke = random(s);
    
  
// Wrap back to the start when we reach the end
    if (currentIndex >= palette.length) {
    currentIndex = 0;
  }
  console.log("Current index:", currentIndex, "→", palette[currentIndex]);
}
