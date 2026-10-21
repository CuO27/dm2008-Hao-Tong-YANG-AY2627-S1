let sizeSlider, bgSlider, shapeSelect;
let myPicker;
let controlPanel;
let bgPanel, colourPanel, sizePanel;


function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");

  controlPanel = createDiv();
  controlPanel.position(16, 16);

  controlPanel.style("padding", "16px");
  controlPanel.style("background", "#d6d6d6");
  controlPanel.style("border-radius", "20px");
  controlPanel.style("display", "flex");
  controlPanel.style("flex-direction", "column");
  controlPanel.style("gap", "15px");
  controlPanel.style("width", "180px");

  //colour
  colourPanel = createDiv();
  colourPanel.style("display", "flex");
  colourPanel.style("flex-direction", "column");
  colourPanel.style("gap", "0px");
  
  let colourLabel = createP("Colour");
  colourLabel.style("margin", "0");
  myPicker = createColorPicker('deeppink');

  colourLabel.parent(colourPanel);
  myPicker.parent(colourPanel);

  // bg
  bgPanel = createDiv();
  bgPanel.style("display", "flex");
  bgPanel.style("flex-direction", "column");
  bgPanel.style("gap", "0px");

  let bgLabel = createP("BG Brightness");
  bgLabel.style("margin", "0");
  bgSlider = createSlider(0, 255, 150, 1);

  bgLabel.parent(bgPanel);
  bgSlider.parent(bgPanel);

  
  // Slider: controls size
  sizePanel = createDiv();
  sizePanel.style("display", "flex");
  sizePanel.style("flex-direction", "column");
  sizePanel.style("gap", "0px");
  
  let sizeLabel = createP("Size");
  sizeLabel.style("margin", "0");
  sizeSlider = createSlider(20, 220, 100, 1);

  sizeLabel.parent(sizePanel);
  sizeSlider.parent(sizePanel);

  
  //Dropdown: choose shape
  //createP("Shape").style("margin", "0");
  shapeSelect = createSelect();
  shapeSelect.option("ellipse");
  shapeSelect.option("triangle");
  shapeSelect.option("rect");

  colourPanel.parent(controlPanel);
  bgPanel.parent(controlPanel);
  sizePanel.parent(controlPanel);
  shapeSelect.parent(controlPanel);

  myPicker.input(sliderColour);

  function sliderColour(){
    let sliderColour = myPicker.value();
    sizeSlider.style("accent-color", sliderColour);
    bgSlider.style("accent-color", sliderColour);
  }
}


function draw() {
  background(bgSlider.value());

  push();
  translate(width * 0.65, height * 0.5);
  let s = sizeSlider.value();

  fill(myPicker.color());

  // draw chosen shape
  let choice = shapeSelect.value();
  
  if (choice === "ellipse") {
    ellipse(0, 0, s, s);
  } else if (choice === "rect") {
    rectMode(CENTER);
    rect(0, 0, s, s);
  } else if (choice === "triangle") {
    triangle(-s * 0.6, s * 0.5, 0, -s * 0.6, s * 0.6, s * 0.5);
  } 
  pop();
}
