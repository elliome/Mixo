<html>
<head>
<title>DIMBRY</title>

<?php $doc_root = "/"; ?>
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/main.css">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/drumroll-canvas.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/piano-roll-canvas.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
 
    <script type="text/javascript">
        var pageNumber = 5
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
			<h1>Now with both hands</h1>
		
		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>

				<p class="left-colomn-section-header" style="margin-top:270px">Instructions</p>

			</div>
		</div>
			
		<div class="paragraph-container">
			<p>When creating songs we would typicaly play a progression of chords with a melody on top. This would typicaly be done on a piano by playing with both hands.</p>
			<p>Since we're using a pianoroll and not an actual piano we can just place our chords and melodies on top of each other easily.</p>
			<div class="paragraph-divider"></div>
			<p>We've provided some presets below that use "both hands". You can also use the chord stamp tool to quickly create chord progressions.</p>
		</div>
		
		<div class="preset-container-container" style="margin-bottom:20px">
			<div class="preset-container" onclick="load('shelter3')">
				<img src="<?php echo $doc_root?>img/shelter.jpg" alt="">
				<p class="preset-label">Shelter</p>
			</div>

			<div class="preset-container" onclick="load('kids8')">
				<img src="<?php echo $doc_root?>img/kids.jpg" alt="">
				<p class="preset-label">Kids</p>
			</div>
			
			<div class="preset-container" onclick="load('sad')">
				<img src="<?php echo $doc_root?>img/sad.jpg" alt="">
				<p class="preset-label">SAD</p>				
			</div>
			
			<div class="preset-container" onclick="load('mobamba2')">
				<img src="<?php echo $doc_root?>img/mudboy.jpg" alt="">
				<p class="preset-label">Mo Bamba</p>				
			</div>
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

    <?php //include "include/drumpattern.php"; ?>

	<?php //include "include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 4;
		$hOctave = 8;
	?>				
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>




</html>