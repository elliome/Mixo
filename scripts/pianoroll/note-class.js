class Note{
	
	constructor(_x,_y,_w,_h,_id,_noteNumber,_color,_waveType,_trigger){
		this.x = Math.round(_x);
		this.oldX = this.x;
		this.y = _y;
		this.oldY = this.y;
		this.width = _w;
		this.oldWidth = 100/pianoroll.snap;
		this.height = _h;
		this.id = _id;
		this.noteNumber = _noteNumber;
		this.waveType = _waveType;
		this.dragOffsetX = 0;
		this.noteName;
		this.snap = pianoroll.snap;
		//console.log(this.y)
		this.setNote
		this.setNoteName();
		if(_trigger){
			this.trigger();
		}

		this.colorChangeTimeout = 0;
		this.color = _color;
		this.tempColor = this.color;
	}

	
	getNoteUnderMouse(_mousePos){
		if(_mousePos.x > this.x - 5 && _mousePos.x < this.width + this.x + 5 && mousePos.y > this.y && mousePos.y < this.y + this.height){
			return true;
		}else{
			return false;
		}
	}

	Draggable(_mousePos){
		if(_mousePos.x > this.x + 5 && _mousePos.x < this.width + this.x - 5 && mousePos.y > this.y && mousePos.y < this.y + this.height){
			return true;
		}else{
			return false;
		}
	}

	Resizeable(_mousePos){
		if(_mousePos.x > this.x - 5  + this.width && _mousePos.x < this.x + 5 + this.width && mousePos.y > this.y && mousePos.y < this.y + this.height){
			this.oldX = this.x;
			return "right"
		}else if(_mousePos.x > this.x - 5 && _mousePos.x < this.x + this.width && mousePos.y > this.y && mousePos.y < this.y + this.height){
			this.oldX = this.x;
			this.oldWidth = this.width;
			return "left"
		}else{
			return false;
		}
	}

	setMouseoffsetX(_mousePos){
		this.dragOffsetX = this.x - _mousePos.x;
	}

	dragging(_mousePos,_oldMousePos){
		this.oldY = this.y;
		//------ update x -------------
		this.x = (Math.round((_mousePos.x + this.dragOffsetX)/(100/pianoroll.snap)))*(100/pianoroll.snap);
		//console.log(_mousePos.x );
		
		//------ update y -------------

		this.y = Math.floor(_mousePos.y/this.height) * this.height;
		if(this.y != this.oldY){
			this.trigger();
		}
		//if(this.oldY > this.y){
			//this.noteNumber--;
		///}else if(this.oldY < this.y){
			//this.noteNumber++;
		//}else{

		//}
		//this.oldY = this.y
		pianoroll.lastNoteWidth = this.width;
	}

	resizing(_mousePos, _direction){
		if(_direction == "right"){
			this.width = (Math.round(((_mousePos.x ) - this.x)/(100/pianoroll.snap)))*(100/pianoroll.snap);

			if(this.width < (100/pianoroll.snap)){
				this.x -= (100/pianoroll.snap);
			}
		}else if(_direction == "left"){
			this.x = (Math.round((_mousePos.x + this.dragOffsetX)/(100/pianoroll.snap)))*(100/pianoroll.snap);

			this.width = this.oldX - this.x + (100/pianoroll.snap);

			if(this.width <= 0){
				//this.oldWidth += (100/pianoroll.snap) ;
				//this.x +=(100/pianoroll.snap);
				this.oldX += (100/pianoroll.snap);
				this.width = (100/pianoroll.snap);
			}
		}
		pianoroll.lastNoteWidth = this.width;
	}

	setNote(_noteNumber){
		this.noteNumber = _noteNumber;
	}

	setNoteName(){
		//console.log(this.n)
		this.tempNoteNumber = this.noteNumber;
		for(this.tempNoteNumber; this.tempNoteNumber >= 12; this.tempNoteNumber -= 12){}
		switch(this.tempNoteNumber){
			case 0:
				this.noteName = "A";
			break;
			case 1:
				this.noteName = "A#";
			break;
			case 2:
				this.noteName = "B";
			break;
			case 3:
				this.noteName = "C";
			break;
			case 4:
				this.noteName = "C#";
			break;
			case 5:
				this.noteName = "D";
			break;
			case 6:
				this.noteName = "D#";
			break;
			case 7:
				this.noteName = "E";
			break;
			case 8:
				this.noteName = "F";
			break;
			case 9:
				this.noteName = "F#";
			break;
			case 10:
				this.noteName = "G";
			break;
			case 11:
				this.noteName = "G#";
			break;
		}
		//console.log(this.tempNoteNumber);
		this.a = Math.pow(2,1/12);
		this.n = this.noteNumber - 48;
		this.pitch = (440*Math.pow(this.a,this.n));
		//console.log(this.n)
	}

	trigger(){
		//console.log(this.n)
		this.a = Math.pow(2,1/12);
		this.n = this.noteNumber - 48;
		//console.log(this.n);
		//debugger;
		this.pitch = (440*Math.pow(this.a,this.n));
		//console.log(this.pitch);
		this.osc = context.createOscillator();	
		this.oscGain = context.createGain();
		this.osc.type = this.waveType;
		this.osc.frequency.value = this.pitch;
		this.osc.connect(this.oscGain);
		this.oscGain.connect(context.destination)
		this.oscGain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime)
		this.oscGain.gain.setValueAtTime(0.25, context.currentTime)
		this.osc.start();
		this.oscGain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + ((this.width / 1000)*40))
		this.osc.stop(context.currentTime + ((this.width / 1000)*20));
		this.tempColor = "white";
		this.colorChangeTimeout = this.width * 1.2;
		//console.log(this.n);
	}

	update(_mousePos){
		this.setNoteName();
		if(_mousePos.x > this.x - 5 && _mousePos.x < this.x + 5 && mousePos.y > this.y && mousePos.y < this.y + this.height){
			canvas.style.cursor = "ew-resize";
			//this.undermouse = true;
		}else if(_mousePos.x > this.x - 5  + this.width && _mousePos.x < this.x + 5 + this.width && mousePos.y > this.y && mousePos.y < this.y + this.height){
			canvas.style.cursor = "ew-resize";
			//this.undermouse = true;
		}else if(_mousePos.x > this.x && _mousePos.x < this.x + this.width && mousePos.y > this.y && mousePos.y < this.y + this.height){
			canvas.style.cursor = "grab";
			//this.undermouse = true;
		}else{
			//canvas.style.cursor = "default";
			//this.undermouse = false;
		}

		

		if(this.colorChangeTimeout == 0){
			this.tempColor = this.color
		}else{
			this.colorChangeTimeout--;
		}

	}

	draw(){
		ctx.fillStyle = this.tempColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "white";
		ctx.fillText(this.noteName,this.x + 5 ,this.y + 13)
		
	}
}