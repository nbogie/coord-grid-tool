// An interactive coordinate system reference diagram and tool
//for students and teachers.
//
// See interaction tab for keyboard commands.
//
// There is also a simpler non-interactive version available:
// https://www.openprocessing.org/sketch/1004603

function setup() {
    //Fancier way of creating a canvas so that it is a child of a specific element
    let canvasParent = document.getElementById("sketch-holder");
    createCanvas(400, 400).parent(canvasParent);
    noCursor();
    textAlign(CENTER, CENTER);
    resetAllMarkers();
}

function draw() {
    background(palette.background);
    drawGridLines();
    drawGridLabels();
    drawXAxisArrow();
    drawYAxisArrow();
    drawXLine();
    drawYLine();

    drawLabeledMousePosition();
    drawMarkers();
}
