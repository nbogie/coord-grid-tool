function drawGridLines() {
    for (let x = 0; x <= 400; x += 25) {
        stroke(x % 100 === 0 ? palette.gridLineStrong : palette.gridLineWeak);
        strokeWeight(x % 100 === 0 ? 2 : 1);
        line(x, 0, x, 400);
    }
    for (let y = 0; y <= 400; y += 25) {
        stroke(y % 100 === 0 ? palette.gridLineStrong : palette.gridLineWeak);
        strokeWeight(y % 100 === 0 ? 2 : 1);
        line(0, y, 400, y);
    }
}

function drawGridLabels() {
    push();
    for (let x = 0; x <= 400; x += 25) {
        if (x % 50 === 0) {
            circle(x, 0, 5);
            if (![0, 400].includes(x)) {
                noStroke();
                fill(palette.label);
                text(x, x, 12);
            }
        }
    }
    for (let y = 0; y <= 400; y += 25) {
        if (y % 50 === 0) {
            circle(0, y, 5);
            if (![0, 400].includes(y)) {
                noStroke();
                text(y, 15, y);
            }
        }
    }
    noStroke();
    fill(palette.label);
    text("0", 5, 10);
    text("400", 15, 392);
    text("400", 390, 12);
    pop();
}

function drawArrow() {
    push();
    strokeWeight(2);
    line(0, 0, 40, 0);
    translate(40, 0);
    push();
    rotate(radians(210));
    line(0, 0, 15, 0);
    pop();
    push();
    rotate(radians(150));
    line(0, 0, 15, 0);
    pop();
    pop();
}

function drawXAxisArrow() {
    push();
    translate(350, 38);
    stroke("red");
    drawArrow();
    noStroke();
    fill(palette.label);
    textSize(24);
    text("+x", 10, 20);
    pop();
}

function drawYAxisArrow() {
    push();
    translate(38, 350);
    push();
    rotate(radians(90));
    stroke("green");
    drawArrow();
    pop();
    noStroke();
    fill(palette.label);
    textSize(24);
    text("+y", 15, 15);
    pop();
}

function drawXLine() {
    if (!focused) {
        return;
    }

    push();
    stroke("gray");
    strokeWeight(0.5);
    let x = round(mouseX);
    line(x, 0, x, height);
    fill("red");
    text(`x = ${x}`, x, 50);
    pop();
}

function drawYLine() {
    if (!focused) {
        return;
    }

    push();
    stroke("gray");
    strokeWeight(0.5);
    let y = round(mouseY);
    line(0, y, width, y);
    fill("green");
    text(`y = ${y}`, 50, y);
    pop();
}

function drawLabeledMousePosition() {
    if (!focused) {
        push();
        fill(palette.label);
        text("click once to focus", mouseX, mouseY);
        pop();
        return;
    }

    let pos = keyIsDown(SHIFT) ? mousePosSnapped() : mousePos();

    drawMarker({
        x: pos.x,
        y: pos.y,
    });
}

function drawMarkers() {
    markers.forEach(drawMarker);
}

function drawMarker({ x, y, label }) {
    push();
    translate(x, y);
    stroke(palette.label);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    pop();
    push();
    fill(palette.label);
    stroke(palette.background);
    switch (markerMode) {
        case "BLANK":
            text(`(           )`, x + 30, y + 15);
            break;
        case "ABC":
            label && text(`${label}`, x + 15, y + 15);
            break;
        case "NORMAL":
            text(`(${x}, ${y})`, x + 30, y + 15);
        default:
            break;
    }
    pop();
}
