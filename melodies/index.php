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
        var pageNumber = 3
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>Melodies</h1>
		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>

				<p class="left-colomn-section-header" style="margin-top:190px">Scales</p>

				<p class="left-colomn-section-header" style="margin-top:710px">Presets</p>
			</div>

		</div>

		<div class="paragraph-container">
			<p>The definition of a melody is a sequence of notes that provide a musicly satsifying tune.</p>
			<p>To create a basic melody we can chose notes from a specific scale. If all of the notes are from the same scale the melody won't sound "wrong".</p>
			
			<p>Here are some notes from different scales you can use to craft your own melodies in the pianoroll below.</p>

			<div class="instructions">
				<h2>C Major</h2>
				<p class="h2Desc">IONIAN</p>
				<P style="word-spacing:10px">Notes: C D E F G A B <span style="word-spacing:0px">(All the white notes).</span></P>
				<div class="paragraph-divider no-margin"></div>

				<h2>D# Minor</h2>
				<p class="h2Desc">Aeolian</p>
				<P style="word-spacing:10px">D#  F  F#  G#  A#  B  C#</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>G Major</h2>
				<p class="h2Desc">IONIAN</p>
				<P style="word-spacing:10px">G A B C D E F# G</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>E</h2>
				<p class="h2Desc">Mixolydian</p>
				<P style="word-spacing:10px">E F# G# A B C# D</P>
				<div class="paragraph-divider no-margin"></div>

				<h2>D Major Pentatnoic</h2>
				<p class="h2Desc">IONIAN</p>
				<P style="word-spacing:10px">D E F# A B</P>
			</div>

			<div class="paragraph-divider"></div>

			<p>Or you can experement with these presets from real songs.</p>

		</div>

		<div class="preset-container-container" >
			<div class="preset-container" onclick="load('shelterLEAD')">
				<img src="<?php echo $doc_root?>img/shelter.jpg" alt="">
				<p class="preset-label">Shelter</p>
			</div>

			<div class="preset-container" onclick="load('kidsLEAD')">
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


	</div>


    <?php //include "include/drumpattern.php"; ?>

	<?php //include "include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 3;
		$hOctave = 4;
	?>	
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>



</html>