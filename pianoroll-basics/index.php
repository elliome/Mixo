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
        var pageNumber = 1
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1 class="boxAnimation">Pianoroll Basics</h1>

		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:320px">Video</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:470px">MIDI</p>
			</div>

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:445px">Instructions</p>
			</div>
		
		</div>

		<div class="paragraph-container">
			<p>This page will walk you through the basic functions of the pianoroll.</p>
			<p>The pianoroll was created to allow musicians to program melodies that could be played back on a computer.</p>

			<p>An analog similar to the piano roll is the music box. The way a music box has cut outs at different positions used to trigger a sound is simiar to how a pianroll uses notes to create sounds.</p>
			<div class="paragraph-divider"></div>
			<div class="ytVidContainer">
				<div class="ytVidContainerCorner">
					<iframe width="600" height="338" src="https://www.youtube-nocookie.com/embed/1ANsm1IxDOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
			<div class="paragraph-divider"></div>
			<p>Midi files store each note and it's properties e.g. length, velocity, pan, pitch and more. This is unlike the audio files you're probably used to (.mp3, .wave, .ogg ect) which capture pure sound.</p>
			<p>The fact that each note has to be synthesized on playback means that the instrument's sound can be different across midi playback software.</p>
			<p>Also the fact that midi stores notes and not sound means that vocals and other organic sound can not be effectivly stored in this format.</p>
			<p>Whilst the pianoroll used in this website does not meet the MIDI specification it does try to emulate the main features of a pianoroll used it popular DAW packages.</p>
			<div class="paragraph-divider"></div>
			<div class="instructions">
				<h2>Creating</h2>
				<P>To place a note use the left mouse button. </P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Deleting</h2>
				<P>To remove a note use the right mouse button. </P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Moving</h2>
				<P>To move a note hold down the left mouse button towards the center of the note and drag by moving the mouse. The note will snap to the scale and time markings.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Resizing</h2>
				<P>To resizing a note, hold down the left mouse button when the cursor is over either the left or right side of the note. You will know you're over the right area as the mouse cursor will change. Whilst holding down left mouse button move the mouse to resize the note. </P>
			</div>

		</div>
	</div>


    <?php //include "include/drumpattern.php"; ?>

	<?php //include "include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 5;
		$hOctave = 5;
	?>				
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>
</html>