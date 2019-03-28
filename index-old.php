<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<title>dim</title>
		<link rel="stylesheet" href="stylesheets/main.css">
		<link rel="stylesheet" href="stylesheets/drumpattern.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
		<link rel="stylesheet" href="stylesheets/piano-roll.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	</head>
	<body>

		<?php include "include/navbar.html";?>

		<p style="color:white">130 bpm</p>

		<div id="drum-pattern-container">

				<div id="drum-pattern-controls-container">
					<i class="fas fa-play drum-pattern-controls-icon" onclick="play()"></i>
					<i class="fas fa-stop drum-pattern-controls-icon" onclick="stop()"></i>
				</div>

				<div id="drum-pattern-cursor-container">

					<div id="drum-pattern-cursor">

					</div>
				</div>
			<div class="drum-pattern-track-container">
				<div class="drum-pattern-track-icon-container">
					Kick s
				</div>

				<?php
				$bars = 4;
				$beats = 4;
				$crotchet = 4;
				$note = 0;

				for($bars = 4; $bars > 0; $bars--){
					echo "<div class=\"drum-pattern-track-bar\">";
					for($beats = 4; $beats > 0; $beats--){

						echo "<div class=\"drum-pattern-track-beat\">";
						for($crotchet = 4; $crotchet > 0; $crotchet--){
							echo "<div class=\"drum-pattern-track-crotchet note\" id=\"kick".$note."\">";
							echo "</div>";
							$note++;
						}
						echo "</div>";
					}
					echo "</div>";
				}

				?>

			</div>
			<div class="drum-pattern-track-container">
				<div class="drum-pattern-track-icon-container">
					Snare
				</div>

				<?php
				$bars = 4;
				$beats = 4;
				$crotchet = 4;
				$note = 0;

				for($bars = 4; $bars > 0; $bars--){
					echo "<div class=\"drum-pattern-track-bar\">";
					for($beats = 4; $beats > 0; $beats--){

						echo "<div class=\"drum-pattern-track-beat\">";
						for($crotchet = 4; $crotchet > 0; $crotchet--){
							echo "<div class=\"drum-pattern-track-crotchet note\" id=\"snare".$note."\">";
														echo "</div>";
							$note++;
						}
						echo "</div>";
					}
					echo "</div>";	
				}

				?>

			</div>
			<div class="drum-pattern-track-container">
				<div class="drum-pattern-track-icon-container">
					HiHat Closed
				</div>

				<?php
				$bars = 4;
				$beats = 4;
				$crotchet = 3;
				$note = 0;

				for($bars = 4; $bars > 0; $bars--){
					echo "<div class=\"drum-pattern-track-bar\">";
					for($beats = 4; $beats > 0; $beats--){

						echo "<div class=\"drum-pattern-track-beat\">";
						for($crotchet = 4; $crotchet > 0; $crotchet--){
							echo "<div class=\"drum-pattern-track-crotchet note\" id=\"hihatclosed".$note."\">";
							echo "</div>";
							$note++;
						}
						echo "</div>";
					}
					echo "</div>";
				}

				?>

			</div>
			<div class="drum-pattern-track-container">
				<div class="drum-pattern-track-icon-container">
					HiHat Open
				</div>

				<?php
				$bars = 4;
				$beats = 4;
				$crotchet = 4;
				$note = 0;

				for($bars = 4; $bars > 0; $bars--){
					echo "<div class=\"drum-pattern-track-bar\">";
					for($beats = 4; $beats > 0; $beats--){

						echo "<div class=\"drum-pattern-track-beat\">";
						for($crotchet = 4; $crotchet > 0; $crotchet--){
							echo "<div class=\"drum-pattern-track-crotchet note\" id=\"hihatopen".$note."\">
";							echo "</div>";
							$note++;
						}
						echo "</div>";
					}
					echo "</div>";
				}

				?>

			</div>
		</div>

		<?php

		function pianoRollTrack($note){
			echo "
						<div class=\"piano-roll-note-track-container\">
							<div class=\"piano-roll-note-label\"> ". $note . " </div>

							<div class=\"piano-roll-note-track\">";

			$count = 0;
			for($i = 0; $i < 4; $i++){
				echo "<div class=\"piano-roll-track-bar\">";
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

			pianoRollTrack("BB");			
			pianoRollTrack("A#");
			pianoRollTrack("AA");
			pianoRollTrack("G#");
			pianoRollTrack("GG");
			pianoRollTrack("F#");
			pianoRollTrack("FF");
			pianoRollTrack("EE");
			pianoRollTrack("D#");
			pianoRollTrack("DD");
			pianoRollTrack("C#");
			pianoRollTrack("CC");

			?>

		</div>

		

		<script type="text/javascript" src="script.js"></script>
		<script type="text/javascript" src="loader.js"></script>
	</body>
</html>
