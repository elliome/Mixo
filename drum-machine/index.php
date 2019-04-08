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
        var pageNumber = 7
    </script>

</head>
<body>
	<?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/navbar.php"; ?>

	<div class="margin-container">
		<h1>Drum Machine</h1>

		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
			</div>

		</div>
		<div class="paragraph-container">
			<p>On this page you will learn about the drum machine.</p>
			<p>The drum machine is used for programing drums into your song. It's similar to the pianoroll as the x axis represents time.</p>
			<p>Where it differs is that the y axis doesn't refer to the pitch. Each track in the drum machine is a different percussive instrument.</p>
			<p>This drum machine only has for instruments but other ones can have as many as you want. We'll go through the different instruments below.</p>
		

			<div class="instructions">
				<h2>Kick</h2>
				<P>The kick is the deepest drum on this drum machine. Sometimes refered to as the "bass" drumb it can provide the base to build up from.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>Snare</h2>
				<P>The snare is often found off beat in most generes of music. It's typically used to fill space and proved a rhythm for the listner.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>HiHat Closed</h2>
				<P>HiHats can be used in many genres of music. When they are closed they are short with a sharp attack and little sustain. They can be used in many different ways. In modern Hip Hip they are used as tripplets and in rock they are often found filling space between snares and kicks.</P>
				<div class="paragraph-divider no-margin"></div>
				<h2>HiHat Open</h2>
				<P>When hihats are open they can provide a suspense and release of energy in a song. They last much longer than closed hihats.</P>
			</div>
		</div>

	</div>


    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/drumpattern.php"; ?>

	<?php 
		$lOctave = 4;
		$hOctave = 6;
	?>
	<?php //include "include/pianoroll-settings.php"; ?>
    <?php include $_SERVER["DOCUMENT_ROOT"].$doc_root."include/pianoroll.php"; ?>

	<script type="text/javascript">
	
	document.getElementById("hide-me-lol").style.display = "none";
	
	</script>

</body>
</html>