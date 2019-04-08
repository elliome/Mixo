class Drumroll{
    constructor(){
        this.snap = 4;
        drumCanvas.width = 2000;
        drumCanvas.height = 247;
        this.mousePos = [x=0,y=0];
        this.notes = [];
        this.noteTrackHeight = 66;
        this.position = 0;
        this.noteQue = [];
        this.kick =  new Audio("/sounds/drums/kick.wav");
        this.snare = new Audio("/sounds/drums/snare.wav");
        this.hihatopen = new Audio("/sounds/drums/hihatopen.wav");
        this.hihatclosed = new Audio("/sounds/drums/hihatclosed.wav");
    }

    MouseMove(_event){
        this.mousePos.x = _event.pageX - drumCanvas.offsetLeft + drumrollContainer.scrollLeft;
        this.mousePos.y = _event.pageY - drumCanvas.offsetTop;
        //console.log(this.mousePos)
    }

    MouseDown(_event){
        this.mousePos.x = _event.pageX - drumCanvas.offsetLeft + drumrollContainer.scrollLeft;
        this.mousePos.y = _event.pageY - drumCanvas.offsetTop;

        this.notes.push(new DrumNote(this.getSnap(this.mousePos.x) + 1, this.getSnapY(this.mousePos.y),(100/this.snap),Math.round(this.getSnapY(this.mousePos.y)/65)))
        //alert("drew");
        this.createNoteQue()
    }

	getSnap(_x){
		return Math.floor(_x/(100/this.snap)) * (100/this.snap);
	}

	getSnapY(_y){
		return Math.floor(_y/this.noteTrackHeight) * this.noteTrackHeight;
    }
    
    playStep(_step){
		this.position = _step;
		//console.log(this.noteQue[_step]);
        if(this.noteQue[_step] != null){
			for(this.i = 0; this.i < this.noteQue[_step].length; this.i++){
				//console.log("fire note: " + this.notes[this.noteQue[_step][this.i]].noteName + " (" +  (this.notes[this.noteQue[_step][this.i]].noteNumber)  + ")")
                //this.notes[this.noteQue[_step][this.i]].trigger();
                switch(this.notes[this.noteQue[_step][this.i]].track){
                    case 0:
                    this.kick.currentTime = 0;             
                    this.kick.play()
                    console.log("kick")
                    break;
                    case 1:
                    this.snare.currentTime = 0;
                    this.snare.play();
                    console.log("snare")
                    break;
                    case 2:
                    this.hihatclosed.currentTime = 0;
                    this.hihatclosed.play();
                    console.log("hihatclosed")
                    break;
                    case 3:
                    this.hihatopen.currentTime = 0;
                    this.hihatopen.play();
                    console.log("hithatopen")
                    break;
                }
			}
		}
	}

    update(){

    }

    createNoteQue(){
		this.noteQue = [];

		for(this.i = 0; this.i < this.notes.length; this.i++){
			//debugger;
			if(this.noteQue[this.notes[this.i].x] == null){
				//console.log("test");
				this.noteQue[this.notes[this.i].x] = [];
			}
			this.noteQue[this.notes[this.i].x].push(this.i);
		}
        //console.log(this.noteQue);
	}

    draw(){

        // =================== DRAW LINES =====================
        drumCTX.clearRect(0,0,2000,canvas.height);

        drumCTX.fillStyle = "rgba(0,0,0,0.3)";
        
        drumCTX.fillStyle = "rgba(40,40,40,0.5)";

        drumCTX.fillStyle = "rgba(0,0,0,0.3)";

        // --------------------- Horizontal LINES ---------------------

        for(this.i = 0; this.i < 4; this.i++){
            drumCTX.fillRect(0,(this.i * 66) - 1,2000,1);
        }

        // --------------------- 4 bar color change --------------------

        for(this.i = 0; this.i < 40; this.i++){
            drumCTX.fillRect(this.i * 800,0,400,height);
        }
        
        // --------------------- Vertical Color change ---------------------
		for(this.i = 0; this.i < width; this.i++){
            drumCTX.fillRect(Math.round(this.i * (100/this.snap)),0,1,height);
		}
		
		drumCTX.fillStyle = "rgba(0,0,0,0.6)";

		for(this.i = 0; this.i < 100; this.i++){
			
			drumCTX.fillRect(this.i * 100,0,1,height);
		}

		drumCTX.fillStyle = "rgba(0,0,0,0.8)";

		for(this.i = 0; this.i < 10; this.i++){
			
			drumCTX.fillRect(this.i * 400,0,1,height);
        }
        
		// ============= DRAW NOTES =================
		for(this.i = 0; this.i < this.notes.length; this.i++){
			
			this.notes[this.i].draw();
		}

		// ============= DRAW POSITION MARKER ================
        drumCTX.fillStyle = "red";
        drumCTX.fillRect(this.position,0,0.8,height)
        
        drumCTX.fillStyle = "white";
        drumCTX.fillText("hi", this.mousePos.x - 5, this.mousePos.y - 5);
    }
}

