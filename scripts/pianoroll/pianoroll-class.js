	class Pianoroll{
	constructor(_lowOctave,_highOctave){
		//console.log(_lowOctave);
		//console.log(_highOctave)

		this.lowOctave = _lowOctave;
		this.highOctave = _highOctave;
		this.numberOfOctaves = this.highOctave - this.lowOctave;
		this.numberOfNoteTracks = this.numberOfOctaves * 12;
		this.lowestNote = (this.lowOctave * 12) - 10;
		this.highestNote = (this.highOctave * 12) - 10;
		this.noteTrackHeight = 18;
		this.selectedNote = null;
		this.dragging = false;
		this.resizing = false;
		this.resizeDirection = false;
		this.noteUnderMouse = null;
		this.mouseDown = false;
		this.mousePos = [x=0,y=0];
		this.notes = [];
		this.playing = false;
		this.playLoop;
		this.noteQue = [];
		this.step = 0;
		this.position = 0;
		this.waveType = "sine";
		this.time = 0;
		this.snap = 4;
		this.lastNoteWidth = (100/this.snap);
		this.d = new Date()
		//console.log(this.numberOfNoteTracks)

		for(this.i = this.lowestNote; this.i < this.highestNote; this.i++){
			//console.log(this.i);
		}

	}

	MouseDown(e,_event){
		//console.log(_event.buttons);

		if(_event.buttons == 2){// right click
			this.RightClick();
		}else if (_event.buttons == 1){ // left click
			this.mouseDown = true;

		
			if(this.noteUnderMouse == null){
				////////////////////////|----- X POS ----| ----- Y POS -----|------ WIDTH ------|------- HEIGHT -----|--------ID-------|----------NOTE NUMBER----------|--COLOR---|----WAVE_T---|TRIG|
				this.notes.push(new Note(this.getSnap(e.x),this.getSnapY(e.y),this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.getSnapY(e.y)),midiColor,this.waveType,true));
			}else{
				if(this.notes[this.noteUnderMouse].Draggable(mousePos)){
					this.dragging = true;
					this.selectedNote = this.noteUnderMouse;
					this.notes[this.selectedNote].setMouseoffsetX(mousePos);
				}else if (this.notes[this.noteUnderMouse].Resizeable(mousePos) != false){
					this.resizing = true;
					this.selectedNote = this.noteUnderMouse;
					this.resizeDirection = this.notes[this.noteUnderMouse].Resizeable(mousePos);
					console.log(this.resizeDirection);
				}else{
	
				}
				//this.selectedNote = this.noteUnderMouse;
			}
		}else{

		}


	}

	MouseUp(e){
		//console.log("mouse up");
		this.selectedNote = null;
		this.mouseDown = false;
		this.dragging = false;
		this.resizing = false;
		this.resizeDirection = false;
		this.createNoteQue();
	}

	RightClick(){
		console.log("rightclick")
		console.log(this.noteUnderMouse);
		if(this.noteUnderMouse != null){
			this.notes[this.noteUnderMouse] = null;
		}
	}
	
	MouseMove(e){

	}

	getNote(_y){
		return Math.floor((height - _y)/this.noteTrackHeight + this.lowestNote) ;
	}

	getSnap(_x){
		return Math.floor(_x/(100/this.snap)) * (100/this.snap);
	}

	getSnapY(_y){
		return Math.floor(_y/this.noteTrackHeight) * this.noteTrackHeight;
	}

	nameOfnoteUnderMouse(){
		if(this.noteUnderMouse != null){
			return this.note[this.noteUnderMouse].noteName;
		}else{
			return null;
		}
	}

	createNoteQue(){
		this.noteQue = [];

		for(this.i = 0; this.i < this.notes.length; this.i++){
			//debugger;
			if(this.notes[this.i] != null){
				if(this.noteQue[this.notes[this.i].x] == null){
					//console.log("test");
					this.noteQue[this.notes[this.i].x] = [];
				}
				this.noteQue[this.notes[this.i].x].push(this.i);
			}
		}

	}

	loadFromArray(_array){
		if(context == null){
			context = new AudioContext();
		}

		console.log(_array);
		//debugger;
		for(this.i = 0; this.i < _array.length;this.i++){
			if(_array[this.i] != null && _array[this.i] + ""){
				/////////////////////////////////////|------ X POS ----| --------- Y POS ---------------|----- WIDTH -----|------- HEIGHT ------|--ID--|-----------------NOTE NUMBER-----------------|------COLOR------|-------WAVE_T----|TRIGG|
				this.notes.push(new Note(this.getSnap(_array[this.i][0]),this.getSnapY(_array[this.i][1]),_array[this.i][2],this.noteTrackHeight,this.i,this.getNote(this.getSnapY(_array[this.i][1])),_array[this.i][3],_array[this.i][4],false));
			}
		}
		console.log(this.notes);
		this.createNoteQue();
	}

	stampScale(_scalekey, _scaleMode){
		this.key 	=	Number(_scalekey);
		this.mode 	=	Number(_scaleMode);

		this.notes = [];
		

		switch(this.mode){
			case 0: 
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 0,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 3) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 1,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 5) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 2,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 3,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 4,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 10) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 5,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 12) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 6,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * 7,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
			case 1:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 3) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 4) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 9) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 11) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13	) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
			case 2:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 3) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 4) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 10) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 11) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13	) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
			case 3:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 2) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 4) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 9) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 11) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13	) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
			case 4:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 3) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 5) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 7) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 10) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 12) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13	) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
			case 5:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 3) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 5) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 8) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 10) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 11) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
				case 6:
				this.tempY = height - ((this.key + 1) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 2) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 4) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 6) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 7) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 9) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 11) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgb(255,20,108)","sine",false));
				this.tempY = height - ((this.key + 13) * this.noteTrackHeight);
				this.notes.push(new Note(this.lastNoteWidth * this.notes.length,this.tempY,this.lastNoteWidth,this.noteTrackHeight,this.notes.length,this.getNote(this.tempY),"rgba(40,167,255)","sine",false));
			break;
		}

		console.log("key " + this.key + " mode " + this.mode);
	}


	playStep(_step){
		this.position = _step;
		//console.log(this.noteQue[_step]);
		if(_step % 400 == 0){
			this.d = new Date();
			//console.log(this.time - this.d.getTime());
			this.time = this.d.getTime();
			//console.log("bar: " + (_step / 400));
		}
		if(this.noteQue[_step] != null){
			for(this.i = 0; this.i < this.noteQue[_step].length; this.i++){
				//console.log("fire note: " + this.notes[this.noteQue[_step][this.i]].noteName + " (" +  (this.notes[this.noteQue[_step][this.i]].noteNumber)  + ")")
				this.notes[this.noteQue[_step][this.i]].trigger();
			}
		}
		//console.log(_step)
	}

	update(_mousePos,_oldMousPos){

		// -------------- update notes -----------------
		canvas.style.cursor = "default";
		for(this.i = 0; this.i < this.notes.length; this.i++){
			if(this.notes[this.i] != null){
				this.notes[this.i].update(_mousePos);
				this.notes[this.i].setNote(this.getNote(this.notes[this.i].y))
			}
		}
		
		this.noteUnderMouse = null;

		// ------------ Set note under the mouse ---------------
		for(this.i = 0; this.i < this.notes.length; this.i++){
			if(this.notes[this.i] != null){
				if(this.notes[this.i].getNoteUnderMouse(_mousePos)){
					this.noteUnderMouse = this.i;
					break;
				}else{
					
				}
			}
		}
		
		// ----------------- drag note -----------------------
		if(this.dragging == true){
			this.notes[this.selectedNote].dragging(_mousePos,_oldMousPos);
			canvas.style.cursor = "grab";
		}

		if(this.resizing != false){
			this.notes[this.selectedNote].resizing(_mousePos,this.resizeDirection);
			canvas.style.cursor = "ew-resize";
		}
	}

	drawGrid(){
		// =================== DRAW GRID ====================
		// -------------draw horizontal lines ---------------
		for(this.i = this.numberOfOctaves; this.i >= 0; this.i--){
			//console.log(this.i);
			for(this.j = 12; this.j >= 0; this.j--){
				ctx.fillStyle = "rgb(12, 9, 13)";
				switch(this.j){
					case 0 :
					case 2 :
					case 4 : 
					case 6 : 
					case 7 :
					case 9 :
					case 11:
					case 12:{
						ctx.fillStyle = "rgb(22, 19, 23)";
					}
				}
				//ebugger;
				ctx.fillRect(0,(Number(this.j) + Number(this.i * 12))  * this.noteTrackHeight ,width,this.noteTrackHeight);
				ctx.fillStyle = "white";
				//ctx.fillText((Number(this.j) + Number(this.i * 12)) + this.lowestNote, 7, (Number(this.j) + Number(this.i * 12))  * this.noteTrackHeight + 12);
				//ctx.fillText( this.j, 7, (Number(this.j) + Number(this.i * 12))  * this.noteTrackHeight + 12);
			}			
		}

		// ------------- draw vertical lines -------------
		ctx.fillStyle = "rgba(0,0,0,0.3)";

		for(this.i = 0; this.i < width; this.i++){
		ctx.fillRect(Math.round(this.i * (100/this.snap)),0,1,height);
		}
		
		// --------------------- 4 bar color change --------------------

		for(this.i = 0; this.i < 40; this.i++){
			ctx.fillRect(this.i * 800,0,400,height);
		}
		
		ctx.fillStyle = "rgba(0,0,0,0.6)";

		for(this.i = 0; this.i < 40; this.i++){
			
			ctx.fillRect(this.i * 100,0,1,height);
		}

		ctx.fillStyle = "rgba(0,0,0,0.8)";

		for(this.i = 0; this.i < 10; this.i++){
			
			ctx.fillRect(this.i * 400,0,1,height);
		}

		// ============= DRAW NOTES =================
		for(this.i = 0; this.i < this.notes.length; this.i++){
			if(this.notes[this.i] != null){
				this.notes[this.i].draw();
			}
		}

		// ============= DRAW POSITION MARKER ================

		ctx.fillStyle = "rgb(255,20,108)";
		ctx.fillRect(this.position,0,0.8,height)
		
	}

}