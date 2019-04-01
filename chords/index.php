<html>
<head>
<title>DIMBRY</title>

<?php $doc_root = "/students/2017-HND/elliot/Mixo/"; ?>
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/main.css">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/drumroll-canvas.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/piano-roll-canvas.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
 
    <script type="text/javascript">
        var pageNumber = 4
    </script>

</head>
<body>
		<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>
		
		<div class="margin-container">

			<h1>Chords</h1>

			<div class="left-colomn-container">

				<div class="left-colomn-section-header">
					<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>

					<p class="left-colomn-section-header" style="margin-top:270px">Formula</p>

					<p class="left-colomn-section-header" style="margin-top:560px">Chord types</p>

					<p class="left-colomn-section-header" style="margin-top:1245px">Instructions</p>
				</div>

			</div>

			<div class="paragraph-container">
				<p>Chords are where multiple notes are played at the same time to create a harmony</p>
				<p>Chords and chord progressions are used frequently in West African, Oceanic and, Western music. They are abasant from many other parts of the worlds music.</p>
				
				<div class="paragraph-divider"></div>
				
				<p>Chords can be defined by the formula used to create them.</p>
				<p>For example to formula for a Major chord is <span class="h2Desc">1-4-3</span>.</p>
				<p>Each number represents how many semitones or intervals to move up. We'll use the C Major chord as an example.</p>
				<p>First we start on the <span class="h2Desc">C</span> note, since this is the root note we wont move any intervals.</p>
				<p>Then we must move up 4 semitones for our next note. In this case it would be <span class="h2Desc">E</span>.</p>
				<p>Next we will move up 3 semitones from the previous note. 3 notes up from E would be <span class="h2Desc">G</span>. This makes the whole chord <span class="h2Desc">C-E-G</span>.</p>
				<p>By using this method of counting intervals we are able to use formulars like <span class="h2Desc">1-4-3</span> to describe the structure of a chord.</p>

				<div class="paragraph-divider"></div>

				<p>Here are the structures of other chord types.</p>	

				<div class="instructions">
						<h2>Major</h2>
						<p class="h2Desc">1-4-3</p>
						<p>Happy and simple.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Minor</h2>
						<p class="h2Desc">1-3-4</p>
						<p>Sad or serious.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Diminished</h2>
						<p class="h2Desc">1-3-3</p>
						<p>Tense and unplesent.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Major seventh</h2>
						<p class="h2Desc">1-4-3-4</p>
						<p>Thoughtful, soft.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Minor seventh </h2>
						<p class="h2Desc">1-3-4-3</p>
						<p>Moody or contemplative.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Dominant seventh </h2>
						<p class="h2Desc">1-4-3-3</p>
						<p>Strong and restless.</p>
						<div class="paragraph-divider no-margin"></div>

						<h2 style="margin-top:20px;">Suspended Chords</h2>
						<br><br>
						<div class="instructions">
							<h2 style="margin-top:20px;">Sus2 &</h2>
							<p class="h2Desc">1-2-5</p>

							<h2 style="margin-top:20px;">Sus4</h2>
							<p class="h2Desc">1-5-2</p>
							<p>Bright and nervous.</p>
						</div>
						<div class="paragraph-divider no-margin"></div>
						
						<h2 style="margin-top:20px;">Augmented</h2>
						<p class="h2Desc">1-4-4</p>
						<p>Anxious and suspensful.</p>
						
				</div>
				<div class="paragraph-divider"></div>

				<p>Have a play with these chord stamps below. Just chose the chord you want and click on the piano roll to stamp the chord.</p>

			</div>

			<div class="scale-container">
				<div class="scale-mode-container">
					<div class="chord-type" 		id="chord-type-1"	onclick='multichoice("chord-type","chord-type-1")'>Major</div>
					<div class="chord-type" 		id="chord-type-2"	onclick='multichoice("chord-type","chord-type-2")'>Minor</div>
					<div class="chord-type" 		id="chord-type-3"	onclick='multichoice("chord-type","chord-type-3")'>Sus2</div>
					<div class="chord-type" 		id="chord-type-4"	onclick='multichoice("chord-type","chord-type-4")'>Sus4</div>
					<div class="chord-type" 		id="chord-type-5"	onclick='multichoice("chord-type","chord-type-5")'>Augmented</div>
				</div>
				<div class="scale-mode-container">
					<div class="chord-type" 		id="chord-type-6"	onclick='multichoice("chord-type","chord-type-6")'>Major Seventh</div>
					<div class="chord-type" 		id="chord-type-7"	onclick='multichoice("chord-type","chord-type-7")'>Minor Seventh</div>
					<div class="chord-type" 		id="chord-type-8"	onclick='multichoice("chord-type","chord-type-8")'>Dominant Seventh</div>
					<div class="chord-type" 		id="chord-type-9"	onclick='multichoice("chord-type","chord-type-9")'>Diminished</div>
				</div>
				<div class="scale-mode-container">
					<div class="chord-type" 		id="chord-type-0"	onclick='multichoice("chord-type","chord-type-0")'>No chord</div>

				</div>
			</div>

		</div>

		

	<?php 
		$lOctave = 4;
		$hOctave = 5;
	?>	



    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>

<script type="text/javascript">
	multichoice("chord-type","chord-type-0");
</script>

</html>