let markers = [];
let markerModeCycle = createCycleGen(["NORMAL", "BLANK", "ABC"]);
let markerMode = markerModeCycle.next().value;
let markerLabelGen;

function* createCycleGen(arr){
	while(true) {
		yield* arr; //delegate to the array
	}
}

function* createLabelGen(){
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz".split("");
	while(alphabet.length > 0) {		
		yield alphabet.shift();
	}
}

function resetAllMarkers(){
	markers = [];
	markerLabelGen = createLabelGen();
}

function addMarkerAt(x, y) {
	const label = markerLabelGen.next().value;
	const marker = {
		x,
		y,
		label
	};
	markers.push(marker);
}

function cycleMarkerMode() {
	markerMode = markerModeCycle.next().value;
}

function markersToJSON(){
	return JSON.stringify(markers, null, 2);
}