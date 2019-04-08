var canvas = document.getElementById('pianoroll');
var ctx = canvas.getContext("2d");
if(document.getElementById("drumroll-canvas") != null){
	var drumCanvas = document.getElementById("drumroll-canvas");
	var drumCTX = this.drumCanvas.getContext("2d");
	var drumRollExists = true;
}else{
	var drumRollExists = false;
}
if(document.getElementById("pianoroll-settings-container") != null){
	var pianoRollSettingsExists = true;
}else{
	var pianoRollSettingsExists = false;
}
var width = canvas.width;
var height = canvas.height
var frame = 0;
var lowOctave = Number(canvas.innerHTML.substring(0,1)) + 0;
var highOctave = Number(canvas.innerHTML.substring(1,2)) + 0;
var mousePos = [x=0,y=0];
var oldMousePos = [x=0,y=0];
var offset = [x = canvas.offsetLeft, y = canvas.offsetTop];
var playStep = 0;
var playingLoop;
var context = new AudioContext();
var pianorollContainer = document.getElementById("pianoroll-container");
var drumrollContainer = document.getElementById("drumroll-canvas-container");
var scaleMode = 0;
var scaleKey = 0;
var midiColor = "green";
var noteLength = 1;
var bpm = 100;
ctx.font = "12px Consolas";
//var offset = [x = 0, y = 0];

pianoroll = new Pianoroll(lowOctave,highOctave);
if(drumRollExists){
	drumroll = new Drumroll();
}

if(pianoRollSettingsExists){
	// multichoice('midi-color','green');
	// multichoice('chord-stamp','off');
	// multichoice('wave-type','sine');
	//sliderUpdate()
}

document.body.addEventListener("mousemove", function(e) {
	offset.x = canvas.offsetLeft;
	offset.y = canvas.offsetTop;

	mousePos.x = e.pageX - canvas.offsetLeft + pianorollContainer.scrollLeft;
	mousePos.y = e.pageY - canvas.offsetTop;
	//console.log(mousePos);
	//console.log(offset);
	pianoroll.MouseMove(mousePos);
	if(drumRollExists){
		drumroll.MouseMove(e);
	}
});

window.oncontextmenu = function(){
	//alert("rightclick");
	//pianoroll.RightClick();
	//console.log(pianoroll.notes);
	return false; 
};

document.getElementById("pianoroll").addEventListener("mousedown", function(e) {
	if(context == null){
		context = new AudioContext();
	}

	offset.x = canvas.offsetLeft;
	offset.y = canvas.offsetTop;
	
	mousePos.x = e.pageX - canvas.offsetLeft + pianorollContainer.scrollLeft;
	mousePos.y = e.pageY - canvas.offsetTop;
	pianoroll.MouseDown(mousePos,e);
});

if(drumRollExists){
	document.getElementById("drumroll-canvas").addEventListener("mousedown", function(e) {
		if(context == null){
			context = new AudioContext();
		}	
		drumroll.MouseDown(e);
		if(pianoRollSettingsExists){
			sliderUpdate();
		}
	});
}
document.getElementById("pianoroll").addEventListener("mouseup", function(e) {
	offset.x = canvas.offsetLeft;
	offset.y = canvas.offsetTop;
	mousePos.x = e.pageX - canvas.offsetLeft + pianorollContainer.scrollLeft;
	mousePos.y = e.pageY - canvas.offsetTop;
	pianoroll.MouseUp(mousePos);
	if(pianoRollSettingsExists){
		sliderUpdate();
	}
});

function play(){
	if(context == null){
		console.log("context is undefined")
		context = new AudioContext();
	}
	clearInterval(playingLoop);
	playStep = 0;
	pianoroll.playStep(playStep);
	playingLoop = setInterval(function(){
		playStep++;
		pianoroll.playStep(playStep);
		if(drumRollExists){
			drumroll.playStep(playStep)
		}
		pianorollContainer.scrollLeft = playStep - 100;
		if(drumRollExists){
			//drumrollContainer.scrollLeft = playStep - 100;
		}
		if(playStep > 1600){
			playStep =-1;
		}

	},8)
	
}

function stop(){
	clearInterval(playingLoop);
	playStep = 0;
	pianoroll.playStep(0.1);
	if(drumRollExists){
		drumroll.playStep(0.1);
		drumrollContainer.scrollLeft = 0;
	}
	pianorollContainer.scrollLeft = 0;
}

function save(){
	//debugger;
	
	var pianorollNotes = [[]];

	for(i = 0; i < pianoroll.notes.length; i++){
		if(pianoroll.notes[i] != null){
			pianorollNotes[i] = ([pianoroll.notes[i].x,pianoroll.notes[i].y,pianoroll.notes[i].width,pianoroll.notes[i].color,pianoroll.notes[i].waveType])
		}
	}

	// converts array to json file
	pianorollNotes = JSON.stringify(pianorollNotes);

	// use post because no limit to data passed / string length
	// get has 2048 byte limit
	$.post("/save.php", {pianoroll: pianorollNotes, fileName: prompt("Chose a filename:")}).done(function(data){
		//console.log(data);
	});
	
	console.log(pianorollNotes);

}

function load(_fileName){
	clearNotes();
	$.post("/load.php", {fileName: _fileName}).done(function(data){
	//$.post("load.php", {fileName: "4483065760"}).done(function(data){

		//console.log(data);
		var tempArray = JSON.parse(data);
		//converts json file to array

		//console.log(JSON.parse(data));
		//console.log(tempArray);
		pianoroll.loadFromArray(tempArray);

		//pianoroll.notes = JSON.parse(data);

	});
}

function clearNotes(){
	pianoroll.notes = [];
}

function multichoice(_variable,_option){
	switch(_variable){
		case "chord-stamp":
		pianoroll.stampChord = Number(_option.substring(_option.length - 1, _option.length));
		break;
		case "midi-color":
			midiColor = _option
		break;
		case "wave-type":
			pianoroll.waveType = _option;
		break;
		case "scale-key":
			scaleKey = _option.substring(_option.length - 2, _option.length);
			pianoroll.stampScale(scaleKey,scaleMode);
		break;
		case "scale-mode":
			scaleMode = _option.substring(_option.length - 1, _option.length);
			pianoroll.stampScale(scaleKey,scaleMode);
		break;
		case "chord-type":
			pianoroll.stampChord = Number(_option.substring(_option.length - 1, _option.length));
			
		break;
		case "chord-stamp":
			pianoroll.stampChord = Number(_option.substring(_option.length - 1, _option.length));
		break;
	}
	var buttons = document.getElementsByClassName(_variable);
	for(i = 0; i < buttons.length; i++){
		// buttons[i].style.backgroundColor = "rgb(12, 9, 13)";
		buttons[i].style.opacity = 0.6;
	}
	// document.getElementById(_option).style.backgroundColor = "rgb(255, 226, 237)"
	
	document.getElementById(_option).style.opacity = 1;
}

function sliderUpdate(){
	pianoroll.lastNoteWidth = Number(document.getElementById("note-length").value) * (100 / pianoroll.snap)
	document.getElementById("note-length-label").innerHTML = document.getElementById("note-length").value;
	
	pianoroll.snap = document.getElementById("snap").value;

	for(i = 0; i < document.getElementsByClassName("snap-label").length; i++){
		document.getElementsByClassName("snap-label")[i].innerHTML = pianoroll.snap;	
	}
}

function step() {
	frame++;
	ctx.clearRect(0,0,canvas.width,canvas.height);

	//ctx.fillStyle="white";
	//ctx.fillRect(0, 0, width, height);

	pianoroll.update(mousePos,oldMousePos);
	pianoroll.drawGrid();
	if(pianoRollSettingsExists){
		sliderUpdate();
	}
	if(drumRollExists){	
		drumroll.draw();
	}
	//ctx.fillStyle = "white";
	//ctx.fillText(pianoroll.getNote(pianoroll.getSnapY(mousePos.y)), mousePos.x - 5, mousePos.y - 5);

	oldMousePos.x = mousePos.x;
	oldMousePos.y = mousePos.y;

	window.requestAnimationFrame(step);
}

//load("shelter3");
//load("mobamba2");

window.requestAnimationFrame(step);
