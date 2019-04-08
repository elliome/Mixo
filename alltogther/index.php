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
        var pageNumber = 8;
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>All Together</h1>
		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
			</div>

		</div>

		<div class="paragraph-container">
			<p>Here is everything you've learned!</p>
			<p>Haven't you come far?</p>
			<p>On this page you are free to let your imagination run wild. Experiment with drums, melodies and chords all together.</p>
			<p>If you're unsure about anything you can always go to a previous page to learn more.</p>
		</div>



	</div>
	<?php 
		$lOctave = 1;
		$hOctave = 6;
	?>	


    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/drumpattern.php"; ?>

	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll-settings.php"; ?>

    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>

	<script type="text/javascript">
	multichoice('wave-type','sine')
	multichoice("chord-stamp","chord-stamp-0");
</script>

</body>
</html>