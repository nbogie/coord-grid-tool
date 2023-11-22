// Click mouse to add a marker at mouse pos
// If SHIFT is held down, pos will be snapped to nearest grid pos (quantised).
function mousePressed() {
    if (mouseButton !== LEFT) {
        return;
    }

    //Don't add a marker if we're just clicking to get focus.
    // We may commonly need to click canvas once to get focus
    // before we can detect the shift key (used for snapping)
    if (!focused) {
        return;
    }
    const pos = mousePosMaybeSnapped();
    addMarkerAt(pos.x, pos.y);
}

function keyPressed() {
    if (key === " ") {
        resetAllMarkers();
    }
    if (key === "s") {
        save("grid"); //save canvas image to a file (may prompt for download)
    }
    if (key === "h") {
        cycleMarkerMode(); // change marker display mode
    }
    if (key === "e") {
        console.log(markersToJSON()); //export list of markers to your browser's javascript console
    }
}
