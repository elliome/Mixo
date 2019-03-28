function loadNotes(_notes){
    var notes = _notes;
    //alert(notes);
    console.log("notes Loaded");
    console.log(notes);


    // ----------- Load notes into pianoroll -------------
    var tempNote = "";
    var currentChar;

    for(i = 0; i < notes.length; i++){
        currentChar = notes.substring(i,i+1);
        if(currentChar == ":" || currentChar == ";"){
            console.log(tempNote);
            togglePianoRollNote(tempNote);
            tempNote = "";
        }else{
            tempNote += notes.substring(i,i+1);
        }
    }

}

function getNotesAJAX(_preset){
    var data = "load failed";
    $.get("import.php",{preset: _preset})
    .done(function(_data){
        loadNotes(_data);
    })
}
getNotesAJAX("mario");