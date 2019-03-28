class DrumNote{
    constructor(_x,_y,_w,_track){
        this.color = "rgb(255,0,0)";
        this.x = Math.ceil(_x);
        this.y = Math.ceil(_y);
        this.width = Math.ceil(_w);
        this.height = 65;
        this.track = _track;
    }

    draw(){
        drumCTX.fillStyle = this.color;
		drumCTX.fillRect(this.x, this.y, this.width, this.height);
    }

    trigger(){
        console.log("fire note @ " + this.x +"," + this.track);
    }
}