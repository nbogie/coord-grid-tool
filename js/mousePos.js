function mousePosMaybeSnapped() {
	let pos = keyIsDown(SHIFT) ? mousePosSnapped() : mousePos();
	return pos;
}

function mousePosSnapped() {
	function snap(v) {
		const i = 25;
		return i * round(v / i);
	}

	let x = snap(mouseX);
	let y = snap(mouseY);
	return {
		x,
		y
	};
}

function mousePos() {
	return {
		x: round(mouseX),
		y: round(mouseY)
	};
}