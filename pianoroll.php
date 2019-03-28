<html>

<head>
    <link rel="stylesheet" href="stylesheets/main.css">
            <link rel="stylesheet" href="stylesheets/drumpattern.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
            <link rel="stylesheet" href="stylesheets/piano-roll.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    </head>
<body>

    <?php

        
        function pianoRollTrack($note){
            echo "  <div class=\"piano-roll-note-track-container\">";
            if(substr($note,1,1) == "#"){
                echo "      <div class=\"piano-roll-note-label\" id=\"" . $note . "\"> ". $note . "</div>";
            }else{
                echo "      <div class=\"piano-roll-note-label\" style=\"background-color:lightgray;color:black;\" id=\"" . $note . "\"> ". $note . "</div>";
            }
            echo "          <div class=\"piano-roll-note-track\">";
            $count = 0;
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
            }
            
            echo "				</div>
                        </div>";
          

        }
      
        function generatePianoRoll($_lowOctave,$_highOctave){
            
            $totalNumberOfOctaves = $_highOctave -  $_lowOctave + 1;

            //pianoRollTrack("C:".($_lowOctave - 1));

            for($i = $_lowOctave; $i <= $_highOctave ; $i++){
                pianoRollTrack("A:".$i);
                pianoRollTrack("A#:".$i);
                pianoRollTrack("B:".$i);			
                pianoRollTrack("C:".$i);
                pianoRollTrack("C#:".$i);
                pianoRollTrack("D:".$i);
                pianoRollTrack("D#:".$i);
                pianoRollTrack("E:".$i);
                pianoRollTrack("F:".$i);
                pianoRollTrack("F#:".$i);
                pianoRollTrack("G:".$i);
                pianoRollTrack("G#:".$i);
            }

            //echo($totalNumberOfOctaves);

        }

    ?>
    
    <div class="piano-roll-container">

        <div class="piano-roll-controls-container">
            <i class="fas fa-play piano-roll-controls-icon" onclick="play()"></i>
            <i class="fas fa-stop piano-roll-controls-icon" onclick="stop()"></i>
        </div>

        <div class="piano-roll-cursor-container">
            <div class="piano-roll-cursor" id="piano-roll-cursor">

            </div>
        </div>

        <?php

            generatePianoRoll(3,4);	

        ?>

    </div>

    <script type="text/javascript" src="piano-roll.js"></script>

</body>

</html>