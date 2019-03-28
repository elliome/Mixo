//DRUMS
var notes = [];
notes = document.getElementsByClassName("note");

console.log(notes.length);

var playing = false;

//sounds
var kick = audio = new Audio("sounds/drums/kick.wav");
var snare = audio = new Audio("sounds/drums/snare.wav");
var hihatopen = audio = new Audio("sounds/drums/hihatopen.wav");
var hihatclosed = audio = new Audio("sounds/drums/hihatclosed.wav");

var kicks = [];
var snares = [];
var hihatsclosed = [];
var hihatsopen = [];

for(i = 0; i < notes.length; i++){
	if(notes[i].id.substring(0,4) == "kick"){
		kicks[kicks.length] = false;
	}else if(notes[i].id.substring(0,5) == "snare"){
		snares[snares.length] = false;
	}else if(notes[i].id.substring(0,11) == "hihatclosed"){
		hihatsclosed[hihatsclosed.length] = false;
	}else if(notes[i].id.substring(0,9) == "hihatopen"){
		hihatsopen[hihatsopen.length] = false;
	}

	notes[i].addEventListener('mousedown', function(){toggleNote(this.id)}, false);

}

//alert(notes[2].id);
//alert(kicks.length);


function toggleNote(noteID){
	//console.log("note " + noteID + " clicked");

	if(noteID.substring(0,4) == "kick"){
		kicks[noteID.substring(4,noteID.length)] = !kicks[noteID.substring(4,noteID.length)];

		if(kicks[noteID.substring(4,noteID.length)]){
			document.getElementById(noteID).style.backgroundColor = "rgb(200,50,50)";
		}else{
			document.getElementById(noteID).style.backgroundColor = "";
		}

	}else if(noteID.substring(0,5) == "snare"){

		snares[noteID.substring(5,noteID.length)] = !snares[noteID.substring(5,noteID.length)];

		if(snares[noteID.substring(5,noteID.length)]){
			document.getElementById(noteID).style.backgroundColor = "rgb(200,150,50)";
		}else{
			document.getElementById(noteID).style.backgroundColor = "";
		}

	}else if(noteID.substring(0,11) == "hihatclosed"){

		hihatsclosed[noteID.substring(11,noteID.length)] = !hihatsclosed[noteID.substring(11,noteID.length)];

		if(hihatsclosed[noteID.substring(11,noteID.length)]){
			document.getElementById(noteID).style.backgroundColor = "rgb(50,50,150)";
		}else{
			document.getElementById(noteID).style.backgroundColor = "";
		}

	}else if(noteID.substring(0,9) == "hihatopen"){

		hihatsopen[noteID.substring(9,noteID.length)] = !hihatsopen[noteID.substring(9,noteID.length)];

		if(hihatsopen[noteID.substring(9,noteID.length)]){
			document.getElementById(noteID).style.backgroundColor = "rgb(50,150,50)";
		}else{
			document.getElementById(noteID).style.backgroundColor = "";
		}

	}


	//console.log(kicks[noteID.substring(4,noteID.length)]);

}


//pianoroll 

var pianoRollNotes = [];
pianoRollNotes = document.getElementsByClassName("piano-roll-track-crotchet");
var C = [];
var Csharp = [];
var D = [];
var Dsharp = [];
var E = [];
var F = [];
var Fsharp = [];
var G = [];
var Gsharp = [];
var A = [];
var Asharp = [];
var B = [];

var waveType = "sine";

for(i = 0;i < pianoRollNotes.length; i++){
	//console.log(pianoRollNotes[i].id);
	if(pianoRollNotes[i].id.substring(0,2) == "CC"){
		C[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
		//console.log("C");
	}else if(pianoRollNotes[i].id.substring(0,2) == "C#"){
		Csharp[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "DD"){
		D[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "D#"){
		Dsharp[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "EE"){
		E[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "FF"){
		F[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "F#"){
		Fsharp[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "GG"){
		G[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "G#"){
		Gsharp[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "AA"){
		A[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "A#"){
		Asharp[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}else if(pianoRollNotes[i].id.substring(0,2) == "BB"){
		B[pianoRollNotes[i].id.substring(2,pianoRollNotes.length)] = false;
	}

	pianoRollNotes[i].addEventListener('mouseover', function(){togglePianoRollNote(this.id)}, false )

}

function togglePianoRollNote(id){
	//console.log(id);

	if(id.substring(0,2) == "CC"){
		C[id.substring(2,pianoRollNotes.length)] = !C[id.substring(2,pianoRollNotes.length)];		
	}else if(id.substring(0,2) == "C#"){
		Csharp[id.substring(2,pianoRollNotes.length)] = !Csharp[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "DD"){
		D[id.substring(2,pianoRollNotes.length)] = !D[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "D#"){
		Dsharp[id.substring(2,pianoRollNotes.length)] = !Dsharp[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "EE"){
		E[id.substring(2,pianoRollNotes.length)] = !E[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "FF"){
		F[id.substring(2,pianoRollNotes.length)] = !F[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "F#"){
		Fsharp[id.substring(2,pianoRollNotes.length)] = !Fsharp[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "GG"){
		G[id.substring(2,pianoRollNotes.length)] = !G[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "G#"){
		Gsharp[id.substring(2,pianoRollNotes.length)] = !Gsharp[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "AA"){
		A[id.substring(2,pianoRollNotes.length)] = !A[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "A#"){
		Asharp[id.substring(2,pianoRollNotes.length)] = !Asharp[id.substring(2,pianoRollNotes.length)];
	}else if(id.substring(0,2) == "BB"){
		B[id.substring(2,pianoRollNotes.length)] = !B[id.substring(2,pianoRollNotes.length)];
	}

	if (document.getElementById(id).style.backgroundColor == "rgb(255, 255, 255)"){
		document.getElementById(id).style.backgroundColor = "";
	}else{
		document.getElementById(id).style.backgroundColor = "#FFFFFF";
	}
	console.log(id);
}	



//---------------------------------------------------------------------------------

function play(){
	playing = !playing;
}

function stop(){
	playing = false;
	note = 0;
	position = 0;
	document.getElementById("drum-pattern-cursor").style.transform = "translateX( " + (position )+ "px)";
	document.getElementById("piano-roll-cursor").style.transform = "translateX( " + (position )+ "px)";
}

function onTimerTick(){
	if(playing){
		//kick.play();



		document.getElementById("drum-pattern-cursor").style.transform = "translateX( " + (position )+ "px)";
		document.getElementById("piano-roll-cursor").style.transform = "translateX( " + (position )+ "px)";
		//console.log(position + " " + note);

		if(kicks[note] == true){
			console.log("kick");
			kick.currentTime = 0;
			kick.play();
		}
		if(snares[note] == true){
			console.log("snare");
			snare.currentTime = 0;
			snare.play();
		}
		if(hihatsopen[note] == true){
			//console.log("hihatopen");
			hihatopen.currentTime = 0;
			hihatopen.play();
		}
		if(hihatsclosed[note] == true){
			console.log("hihatclosed");
			hihatclosed.currentTime = 0;
			hihatclosed.play();
		}

		if(C[note] == true){
			console.log("C");
			
			var Ccontext = new AudioContext()
			var Csine = Ccontext.createOscillator();
			var g = Ccontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Ccontext.currentTime + 1)
			Csine.type = waveType;
			Csine.frequency.value = 523.3;
			Csine.connect(g)
			g.connect(Ccontext.destination)
			Csine.start();
			setTimeout(function(){Ccontext.close();},400)

		}

		if(Csharp[note] == true){
			console.log("Csharp");
			var CSharpContext = new AudioContext()
			var CSharpsine = CSharpContext.createOscillator();
			var g = CSharpContext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, CSharpContext.currentTime + 1)
			CSharpsine.type = waveType;
			CSharpsine.frequency.value = 554.4;
			CSharpsine.connect(g)
			g.connect(CSharpContext.destination)
			CSharpsine.start();
			setTimeout(function(){CSharpContext.close();},400)
		}

		if(D[note] == true){
			console.log("D");
			var Dcontext = new AudioContext()
			var Dsine = Dcontext.createOscillator();
			var g = Dcontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Dcontext.currentTime + 1)
			Dsine.type = waveType;
			Dsine.frequency.value = 587.3;
			Dsine.connect(g)
			g.connect(Dcontext.destination)
			Dsine.start();
			setTimeout(function(){Dcontext.close();},400)
		}

		if(Dsharp[note] == true){
			console.log("Dsharp");
			var DSharpContext = new AudioContext()
			var DSharpsine = DSharpContext.createOscillator();
			var g = DSharpContext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, DSharpContext.currentTime + 1)
			DSharpsine.type = waveType;
			DSharpsine.frequency.value = 622.3;
			DSharpsine.connect(g)
			g.connect(DSharpContext.destination)
			DSharpsine.start();
			setTimeout(function(){DSharpContext.close();},400)
		}

		if(E[note] == true){
			console.log("E");
			var Econtext = new AudioContext()
			var Esine = Econtext.createOscillator();
			var g = Econtext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Econtext.currentTime + 1)
			Esine.type = waveType;
			Esine.frequency.value = 659.3;
			Esine.connect(g)
			g.connect(Econtext.destination)
			Esine.start();
			setTimeout(function(){Econtext.close();},400)
		}

		if(F[note] == true){
			console.log("F");
			var Fcontext = new AudioContext()
			var Fsine = Fcontext.createOscillator();
			var g = Fcontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Fcontext.currentTime + 1)
			Fsine.type = waveType;
			Fsine.frequency.value = 698.3;
			Fsine.connect(g)
			g.connect(Fcontext.destination)
			Fsine.start();
			setTimeout(function(){Fcontext.close();},400)
		}

		if(Fsharp[note] == true){
			console.log("Fsharp");
			var FSharpContext = new AudioContext()
			var Fsharpsine = FSharpContext.createOscillator();
			var g = FSharpContext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, FSharpContext.currentTime + 1)
			Fsharpsine.type = waveType;
			Fsharpsine.frequency.value = 740;
			Fsharpsine.connect(g)
			g.connect(FSharpContext.destination)
			Fsharpsine.start();
			setTimeout(function(){FSharpContext.close();},400)
		}

		if(G[note] == true){
			console.log("G");
			var Gcontext = new AudioContext()
			var Gsine = Gcontext.createOscillator();
			var g = Gcontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Gcontext.currentTime + 1)
			Gsine.type = waveType;
			Gsine.frequency.value = 784.0;
			Gsine.connect(g)
			g.connect(Gcontext.destination)
			Gsine.start();
			setTimeout(function(){Gcontext.close();},400)
		}

		if(Gsharp[note] == true){
			console.log("Gsharp");
			var GsharpShine = new AudioContext()
			var GSharpsine = GsharpShine.createOscillator();
			var g = GsharpShine.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, GsharpShine.currentTime + 1)
			GSharpsine.type = waveType;
			GSharpsine.frequency.value = 830.6;
			GSharpsine.connect(g)
			g.connect(GsharpShine.destination)
			GSharpsine.start();
			setTimeout(function(){GsharpShine.close();},400)
		}

		if(A[note] == true){
			console.log("A");
			var Acontext = new AudioContext()
			var Asine = Acontext.createOscillator();
			var g = Acontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Acontext.currentTime + 1)
			Asine.type = waveType;
			Asine.frequency.value = 880;
			Asine.connect(g)
			g.connect(Acontext.destination)
			Asine.start();
			setTimeout(function(){Acontext.close();},400)
		}

		if(Asharp[note] == true){
			var ASharpcontext = new AudioContext()
			var ASharpsine = ASharpcontext.createOscillator();
			var g = ASharpcontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, ASharpcontext.currentTime + 1)
			ASharpsine.type = waveType;
			ASharpsine.frequency.value = 932.3;
			ASharpsine.connect(g)
			g.connect(ASharpcontext.destination)
			ASharpsine.start();
			setTimeout(function(){ASharpcontext.close();},400)
		}

		if(B[note] == true){
			var Bcontext = new AudioContext()
			var Bsine = Bcontext.createOscillator();
			var g = Bcontext.createGain();
			g.gain.exponentialRampToValueAtTime(0.00001, Bcontext.currentTime + 1)
			Bsine.type = waveType;
			Bsine.frequency.value = 987.8;
			Bsine.connect(g)
			g.connect(Bcontext.destination)
			Bsine.start();
			setTimeout(function(){Bcontext.close();},400)
		}

		if(note  + 1 >= kicks.length){
			position = 0;
			note = 0;
		}else{
			position += 14;
			note += 1;
		}

	}
}


var position = 0;
var note = 0;
var maxposition = 900;
setInterval(onTimerTick, (115375/1000));
