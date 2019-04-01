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
        var pageNumber = 6
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>Pianoroll Advanced</h1>

		<div class="paragraph-container">
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