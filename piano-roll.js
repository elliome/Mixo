console.log("test");

// ========== variables ================

var mousePos = [x=0,y=0]

//  ----------- Piano roll --------------
var A4 = 440;//Hz
var lowerOct = 3;
var higherOct = 6;
var lowestNote = lowerOct*12;
var highestNote = higherOct*12;
var _tempNoteName = 0;
var _tempOct = Number(lowerOct + 1);
var notes = [[]];
var resizeLoop;
var resizingBool;
var moveLoop;
var movingBool;

// ----------- OSCILATORS/SYNTHS --------------
var context = new AudioContext();
var Oscs = [];
var OscsGain = [];

//formula to find pitch
//fn = f0 * (a)^n
//f0 = A4 = note 48 = 440hz;
//n = number of half steps away from f0;
//a = (2)^1/12 

// ================ event listeners ==============

document.addEventListener("mousemove", function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
});

document.addEventListener("mouseup", function(e) {
    clearInterval(resizeLoop);
    clearInterval(moveLoop)
});

// ================= functions ==================

function findPitch(_note){
    var a = Math.pow(2,1/12);
    var n = _note - 48;

    return(440*Math.pow(a,n));

}

function nameToNote(_noteName){
    
    var _noteNumber;
    var _noteLetter;
    
    for(j = 0; j < _noteName.length; j++){
        if(_noteName.substring(j,j+1) == ":"){
            _noteLetter = _noteName.substring(0,j);
            _noteNumber = Number(_noteName.substring(j+1) * 12);
            
            //console.log(_noteLetter);

        }
    }
    
    switch(_noteLetter){
        case "A":
        break;
        case "A#":
        _noteNumber += 1;
        break;
        case "B":
        _noteNumber += 2;
        break;        
        case "C":
        _noteNumber += 3;
        break;        
        case "C#":
        _noteNumber += 4;
        break;        
        case "D":
        _noteNumber += 5;
        break;        
        case "D#":
        _noteNumber += 6;
        break;        
        case "E":
        _noteNumber += 7;
        break;       
        case "F":
        _noteNumber += 8;
        break;        
        case "F#":
        _noteNumber += 9;
        break;       
        case "G":
        _noteNumber += 10;
        break;       
        case "G#":
        _noteNumber += 11;
        break;
    }
    
    return _noteNumber;
    
}


/*
for(var i = lowestNote; i < highestNote; i++){
    
    //console.log(i);
    if(i%12 == 0){
        //console.log("Octave");
    }

    switch(_tempNoteName){
        case 0:
            console.log("A " + _tempOct + " " + findPitch(i))
        break;
        case 1:
            console.log("A# " + _tempOct + " " + findPitch(i))
        break;
        case 2:
            console.log("B " + _tempOct + " " + findPitch(i))
        break;
        case 3:
            console.log("C " + _tempOct + " " + findPitch(i))
        break;
        case 4:
            console.log("C# " + _tempOct + " " + findPitch(i))
        break;
        case 5:
            console.log("D " + _tempOct + " " + findPitch(i))
        break;
        case 6:
            console.log("D# " + _tempOct + " " + findPitch(i))
        break;
        case 7:
            console.log("E " + _tempOct + " " + findPitch(i))
        break;
        case 8:
            console.log("F " + _tempOct + " " + findPitch(i))
        break;
        case 9:
            console.log("F# " + _tempOct + " " + findPitch(i))
        break;
        case 10:
            console.log("G " + _tempOct + " " + findPitch(i))
        break;
        case 11:
            console.log("G# " + _tempOct + " " + findPitch(i))
            _tempNoteName = -1;
            _tempOct ++;
        break;
    }

    _tempNoteName++;
}
*/

//findPitch(51);

var noteLabels = document.getElementsByClassName("piano-roll-note-label");

for(i = 0; i < noteLabels.length; i++){
    _noteLabel = noteLabels[i].id;
    
    //nameToNote(_noteLabel);
    //console.log(i);
     console.log("note = " + _noteLabel + "     note id = " + nameToNote(_noteLabel) + "    pitch: " + findPitch(nameToNote(_noteLabel)));
    //debugger;
    
    noteLabels[i].addEventListener('mousedown', function(){playNote(nameToNote(this.id))}, false);

    notes[nameToNote(_noteLabel)] = [];

}

var crochets = document.getElementsByClassName("piano-roll-track-crotchet");

for(i = 0; i < crochets.length; i++){
    crochets[i].addEventListener('mousedown', function(){createNote(this)}, false);
}

function playNote(_noteNumber){
    //alert(findPitch(_noteNumber));
    //alert(Oscs[_noteNumber]);
    
    Oscs[_noteNumber] = context.createOscillator();
    OscsGain[_noteNumber] = context.createGain();
    Oscs[_noteNumber].type = "square";
    Oscs[_noteNumber].frequency.value = findPitch(_noteNumber)
    Oscs[_noteNumber].connect(OscsGain[_noteNumber]);
    OscsGain[_noteNumber].connect(context.destination);
    OscsGain[_noteNumber].gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    Oscs[_noteNumber].start(0);
}

var mouseOverNoteBool = false;

function createNote(_crochet){
    if(!mouseOverNoteBool){
        console.log(_crochet.offsetLeft);
        $("<div id=\"midi_"+ _crochet.id +"\" class=\"midi-note\" style=\"left:" + _crochet.getBoundingClientRect().left + ";\" >"+
        "<div id=\"midi_left"+ _crochet.id +"\"class=\"midi-note-side midi-note-left\" style=\"\"></div>" +
        "<div id=\"midi_Right"+ _crochet.id +"\"class=\"midi-note-side midi-note-right\" style=\"\"></div>" +
        "</div>").appendTo($(_crochet));

        document.getElementById("midi_"+ _crochet.id).addEventListener('mouseover', function(){mouseOverNote(this, true)}, false);
        document.getElementById("midi_"+ _crochet.id).addEventListener('mouseout', function(){mouseOverNote(this, false)}, false);
        document.getElementById("midi_" + _crochet.id).addEventListener('mouseup', function(){move(this,0)}, false);
        document.getElementById("midi_" + _crochet.id).addEventListener('mousedown', function(){move(this,1)}, false);
        document.getElementById("midi_" + _crochet.id).oncontextmenu = function (){
            document.getElementById("midi_" + _crochet.id).remove();
            mouseOverNote("midi_" + _crochet.id, false)
            return false;
        }
           
        document.getElementById("midi_Right" + _crochet.id).addEventListener('mouseup', function(){resize(this,0)}, false);
        document.getElementById("midi_Right" + _crochet.id).addEventListener('mousedown', function(){resize(this,1)}, false);

    }else{
        console.log("can't create midi note because mouseOverNoteBool = " + mouseOverNoteBool);
    }
}

function mouseOverNote(_midinote, _bool){
    mouseOverNoteBool = _bool;
    if(_bool){
        console.log(_midinote.id)
    }

}

function startResize(_midinote){
    midinote = $(_midinote).parent()[0];
    console.log("start resize");
    console.log(midinote.id);

  
}

function endResize(_midinote){
    midinote = $(_midinote).parent()[0];
    console.log("end resize");
    console.log(midinote.id);
}

// ------------------ function resize ------------------
// this function resizes the midi notes

function resize(_midinote, _bool){
    var midiNote = $(_midinote).parent()[0];
    
    console.log("resize:" + midiNote.id + " _bool:" + _bool);

    if(_bool){
        //resize
        resizingBool = true;
        $(midiNote).width = "0";

        resizeLoop = setInterval(function(){
            console.log("resizing...");
            midiNote.style.width = mousePos.x - midiNote.offsetLeft + 4;
        },10)

    }else{
        //end resize
        resizingBool = false;
        clearInterval(resizeLoop);
    }
}

// ------------------ function move ------------------
// this function moves the midi notes

function move(_midinote, _bool){
    var midiNote = _midinote;
    var mouseOffset = midiNote.offsetLeft - mousePos.x;
    
    console.log("resize:" + midiNote.id + " _bool:" + _bool);

    if(_bool){
        //resize

        //$(midiNote).width = "0";
        movingBool = true;
        moveLoop = setInterval(function(){

            if(resizingBool){
                clearInterval(moveLoop);
            }

            console.log("moving... | Offset = " + mouseOffset);
            midiNote.style.left = mousePos.x + mouseOffset;

            

        },10)

    }else{
        //end resize
        clearInterval(moveLoop);
        movingBool = false;
    }
}


//console.log(noteLabels.length)
