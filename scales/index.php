<html>
<head>
<title>DIMBRY</title>

<?php $doc_root = "/Mixo/"; ?>
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/main.css">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/drumroll-canvas.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/piano-roll-canvas.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
 
    <script type="text/javascript">
        var pageNumber = 2
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>Scales</h1>

		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:250px">Scale Types</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:1175px">Scale Modes</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:1505px">Instructions</p>
			</div>
		
		</div>

		<div class="paragraph-container">
			<p>In music theory, a scale is a set of musical notes ordered by pitch. They can be acsending (increasing in pitch) or descending (decreasing in pitch).</p>
			<p>Most scales are octave repeating, this means that the pattern of notes are the same at any octave.</p>
			<div class="paragraph-divider"></div>
			<p>There are many different types of scales, each defined by the number of notes per octave.</p>
			<div class="instructions">
				<h2>Chromatic</h2>
				<p class="h2Desc">12 notes per octave</p>
				<P>Also know as dodecatonic.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Octatonic</h2>
				<p class="h2Desc">8 notes per octave</p>
				<P>Mostly used in jazz and modern classical music.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Heptatonic</h2>
				<p class="h2Desc">7 notes per octave</p>
				<P>The most common modern western scale.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Hexatonic</h2>
				<p class="h2Desc">6 notes per octave</p>
				<P>Common in western folk music.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Pentatonic</h2>
				<p class="h2Desc">5 notes per octave</p>
				<P>Common in folk music, especially in Asian music. Also known as the "black note" scale.</P>
				<div class="paragraph-divider no-margin"></div>
					<div class="instructions">
						<h2>Tetratonic &</h2>
						<p class="h2Desc">4 notes per octave</p>
						<h2 style="margin-top:20px;">Tritonic &</h2>
						<p class="h2Desc">3 notes per octave</p>
						<h2 style="margin-top:20px;">Diatonic</h2>
						<p class="h2Desc">2 notes per octave</p>
						<p>Are all generally limited to prehestoric primative music.</p>
					</div>
				<div class="paragraph-divider no-margin"></div>
				<h2>Monotonic</h2>
				<p class="h2Desc">1 notes per octave</p>
				<P>Limited use in religious worship and for effect in modern art music.</P>
			</div>

			<div class="paragraph-divider"></div>

			<p>Aswell as having different types of scales, we can have different modes of scales. Each mode is defined by the rotation of intervals. Intervals are split into two types, whole steps and half steps.</p>
			<p>A whole step is an increase in two notes i.e. C to D or E to F#. These are noted as a "<span class="h2Desc">w</span>".</p>
			<p>A half step is an increase in one note i.e. C to C# or E to F. These are noted as a "<span class="h2Desc">h</span>".</p>
			<p>The interval pattern of a major scale is <span class="h2Desc">WWHWWWH</span>. The major scale is also refered to as the Ionian mode. We can rotate this mode to create the Dorian mode <span class="h2Desc">WHWWWHW</span>.</p>
			<p>As you can see by rotating this scale by 1 place we've gone from </p> 
			<p class="h2Desc" >WWHWWWH </p>
			<p> to </p>
			<p class="h2Desc" > WHWWWHW</p>
			<p>Here are the all the modes:</p>
			<div class="instructions">
				<h2>Ionian / Major</h2>
				<p class="h2Desc">WWHWWWH</p>
				<P>Serious, happy and, taming the passions.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Dorian</h2>
				<p class="h2Desc">WHWWWHW</p>
				<P>Sad, serious and, tearful.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Phrygian</h2>
				<p class="h2Desc">HWWWHWW</p>
				<P>Mystic, vehement and, inciting anger.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Lydian</h2>
				<p class="h2Desc">WWWHWWH</p>
				<P>Harmonious, tender, inciting delights and, tempering fierceness.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Mixolydian</h2>
				<p class="h2Desc">WWHWWHW</p>
				<P>Happy.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Aeolian / Minor</h2>
				<p class="h2Desc">WHWWHWW</p>
				<P>Devout, pious and tearful.</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>Locrian</h2>
				<p class="h2Desc">HWWHWWW</p>
				<P>Angelical, of youth and, uniting pleasure and sadness.</P>
			</div>

			<div class="paragraph-divider"></div>
			<p>Experement below with the preset scales provided.</p>
		</div>

		<div class="scale-container">
			<div class="scale-key-container">
				<div class="scale-key"			id="scale-key-00"	onclick='multichoice("scale-key","scale-key-00")' >C</div>
				<div class="sharp scale-key"	id="scale-key-01"	onclick='multichoice("scale-key","scale-key-01")' >C#</div>
				<div class="scale-key"			id="scale-key-02"	onclick='multichoice("scale-key","scale-key-02")' >D</div>
				<div class="sharp scale-key"	id="scale-key-03"	onclick='multichoice("scale-key","scale-key-03")' >D#</div>
				<div class="scale-key"			id="scale-key-04"	onclick='multichoice("scale-key","scale-key-04")' >E</div>
				<div class="scale-key"			id="scale-key-05"	onclick='multichoice("scale-key","scale-key-05")' >F</div>
				<div class="sharp scale-key"	id="scale-key-06"	onclick='multichoice("scale-key","scale-key-06")' >F#</div>
				<div class="scale-key"			id="scale-key-07"	onclick='multichoice("scale-key","scale-key-07")' >G</div>
				<div class="sharp scale-key"	id="scale-key-08"	onclick='multichoice("scale-key","scale-key-08")' >G#</div>
				<div class="scale-key"			id="scale-key-09"	onclick='multichoice("scale-key","scale-key-09")' >A</div>
				<div class="sharp scale-key"	id="scale-key-10"	onclick='multichoice("scale-key","scale-key-10")' >A#</div>
				<div class="scale-key" 			id="scale-key-11"	onclick='multichoice("scale-key","scale-key-11")' >B</div>
			</div>
			<div class="scale-mode-container">
				<div class="scale-mode" 		id="scale-mode-0" 	onclick='multichoice("scale-mode","scale-mode-0")'>Major/Ionian</div>
				<div class="scale-mode" 		id="scale-mode-2" 	onclick='multichoice("scale-mode","scale-mode-2")'>Dorian</div>
				<div class="scale-mode" 		id="scale-mode-3" 	onclick='multichoice("scale-mode","scale-mode-3")'>Phrygian</div>
				<div class="scale-mode" 		id="scale-mode-4" 	onclick='multichoice("scale-mode","scale-mode-4")'>Lydian</div>
				<div class="scale-mode" 		id="scale-mode-5" 	onclick='multichoice("scale-mode","scale-mode-5")'>Mixolydian</div>
				<div class="scale-mode" 		id="scale-mode-1" 	onclick='multichoice("scale-mode","scale-mode-1")'>Minor/Aeolian</div>
				<div class="scale-mode" 		id="scale-mode-6" 	onclick='multichoice("scale-mode","scale-mode-6")'>Locrian</div>
			</div>
		</div>

		


	</div>

	


    <?php //include "include/drumpattern.php"; ?>

	<?php //include "include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 4;
		$hOctave = 5;
	?>	
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>

	<script type="text/javascript">
		multichoice("scale-mode","scale-mode-0");
		multichoice("scale-key","scale-key-00");
	</script>

</html>