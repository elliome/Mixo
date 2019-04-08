    <?php
        
        function pianoRollTrack($note){
            
            if(substr($note,1,1) == "#"){
                echo "      <div class=\"piano-roll-note-label\" id=\"" . $note . "\"> ". $note . "</div>";
            }else{
                echo "      <div class=\"piano-roll-note-label\" style=\"background-color:lightgray;color:rgb(12, 9, 13);\" id=\"" . $note . "\"> ". $note . "</div>";
            }
            
            /*$count = 0;
            for($i = 0; $i < 4; $i++){
                echo "<div class=\"piano-roll-track-bar\" >";
                for($l = 0; $l < 4; $l++){
                    echo "<div class=\"piano-roll-track-beat\">";
                        for($j = 0; $j < 4; $j++){
                                echo"<div class=\"piano-roll-track-crotchet\" id=\"".$note . $count ."\"></div>";
                                $count += 1;
                        }
                    echo "</div>";
                }
                echo "</div>";
            }*/
            //echo "</div>";
          

        }
      
        function generatePianoRoll($_lowOctave,$_highOctave){
            
            $totalNumberOfOctaves = $_highOctave -  $_lowOctave + 1;

            //pianoRollTrack("C:".($_lowOctave - 1));

            echo "  <div  class=\"piano-roll-note-label-container\">";

            for($i = $_highOctave; $i >= $_lowOctave ; $i--){
                pianoRollTrack("B:".$i);			
                pianoRollTrack("A#:".$i);
                pianoRollTrack("A:".$i);
                pianoRollTrack("G#:".$i);
                pianoRollTrack("G:".$i);
                pianoRollTrack("F#:".$i);
                pianoRollTrack("F:".$i);
                pianoRollTrack("E:".$i);
                pianoRollTrack("D#:".$i);
                pianoRollTrack("D:".$i);
                pianoRollTrack("C#:".$i);
                pianoRollTrack("C:".$i);
            }
            echo "</div>";
            echo "<div id=\"pianoroll-container\">";
            echo "<canvas id=\"pianoroll\" width=\"2000\" height=\"". 18 * 12 * $totalNumberOfOctaves ."\" style=\"height:". 18 * 12 * $totalNumberOfOctaves ."px;\">". $_lowOctave . $_highOctave ."</canvas>";
            echo "</div>";
            //echo($totalNumberOfOctaves);

        }

    ?>
    
    <div id="hide-me-lol" class="piano-roll-container">

        <div class="piano-roll-controls-container">
            <i class="fas fa-play piano-roll-controls-icon" onclick="play()"></i>
            <i class="fas fa-stop piano-roll-controls-icon" onclick="stop()"></i>
            <i class="fa fa-trash piano-roll-controls-icon" onclick="clearNotes()"></i>
        </div>

        <div class="piano-roll-cursor-container">
            <!-- <div class="piano-roll-cursor" id="piano-roll-cursor">

            </div> -->
        </div>

        <?php

            generatePianoRoll($lOctave,$hOctave);	

        ?>

    </div>

    <script type="text/javascript" src="<?php echo $doc_root?>scripts/pianoroll/note-class.js"></script>
    <script type="text/javascript" src="<?php echo $doc_root?>scripts/pianoroll/pianoroll-class.js"></script>
    <script type="text/javascript" src="<?php echo $doc_root?>scripts/pianoroll/main.js"></script>


</body>

</html>

