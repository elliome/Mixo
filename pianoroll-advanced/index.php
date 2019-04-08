<html>
<head>
<title>DIMBRY</title>

<?php $doc_root = "/"; ?>
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/main.css">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/drumroll-canvas.css">
	<link rel="stylesheet" href="<?php echo $doc_root?>stylesheets/piano-roll-canvas.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
 
    <script type="text/javascript">
        var pageNumber = 6
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>Pianoroll Advanced</h1>

		<div class="left-colomn-container">

		<div class="left-colomn-section-header">
			<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
		</div>

		<div class="left-colomn-section-header">
			<p class="left-colomn-section-header" style="margin-top:240px">Instructions</p>
		</div>

		</div>


		<div class="paragraph-container">

		<p>On this page you will find more advanced options to enhance the way you use the pianoroll.</p>
		<p>Below you will find instructions for each parameter and an explination of what it does.</p>

		<div class="paragraph-divider"></div>
			<div class="instructions">
				<h2>Wave Type</h2>
				<P>Wave type referse to the shape of each wave. Each wave has a distinct sound to it. Experement with each one to see how it changes the sound.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Note color</h2>
				<P>This option is purely cosmetic. You can change the color of notes to differentiate each hand or to show different wave types.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Stamp chord</h2>
				<P>You should be familar with this function as we've gone over it from the previous lesson. All it does is stamp the chord to save you from placing each note.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Snap</h2>
				<P>You might have noticed that each note snaps to the grid. This is called "quantizing" and it's done to keep everything in time. If you want to place notes with shorter durtation or you want to play more notes per bar you can change the snap slider to change the size of the grid on the pianoroll.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Duration</h2>
				<P>This one simply changes how long each note lasts, it's especially usefull if you want to play a chord progression behind your melody.</P>
			</div>
			

		</div>



	</div>


    <?php //include "include/drumpattern.php"; ?>

	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 4;
		$hOctave = 6;
	?>
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>
</body>

<script type="text/javascript">
	multichoice('wave-type','sine')
	multichoice("chord-stamp","chord-stamp-0");
</script>

</html>