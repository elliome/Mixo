<html>
<head>
<title>DIMBRY</title>

<?php $doc_root = ""; ?>

	<link rel="stylesheet" href="stylesheets/main.css">
	<link rel="stylesheet" href="stylesheets/drumroll-canvas.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" href="stylesheets/piano-roll-canvas.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
    
  


</head>
<body>
	<?php include "include/navbar.php"; ?>

	<div class="margin-container">
		<h1 class="boxAnimation">Introduction to the Digital Music Production Workflow</h1>
		<div class="left-colomn-container">

			<div class="left-colomn-section-header">
				<p class="left-colomn-section-header" style="margin-top:80px">Introduction</p>
			</div>

		</div>
		<div class="animation paragraph-container">
			<p>These next pages will teach you the basics of producing music in a digital enviroment. No prior knowledge is required. Nor is any software as everything will be done right here, in your browser.</p>
			<p>To get started click on one of the presets below to see what we can be created.</p>
		</div>

		<div class="preset-container-container" >
			<div class="preset-container" onclick="load('shelter3')">
				<img src="img/shelter.jpg" alt="">
				<p class="preset-label">Shelter</p>
			</div>

			<div class="preset-container" onclick="load('kids8')">
				<img src="img/kids.jpg" alt="">
				<p class="preset-label">Kids</p>
			</div>
			
			<div class="preset-container" onclick="load('kubs')">
				<img src="img/entertainer.png" alt="">
				<p class="preset-label">Entertainer</p>				
			</div>
			
			<div class="preset-container" onclick="load('mobamba2')">
				<img src="img/mudboy.jpg" alt="">
				<p class="preset-label">Mo Bamba</p>				
			</div>
		</div>

	</div>


    <?php //include "include/drumpattern.php"; ?>

	<?php //include "include/pianoroll-settings.php"; ?>
	<?php 
		$lOctave = 1;
		$hOctave = 6;
	?>	
	<?php include "include/pianoroll.php"; ?>
	<script type="text/javascript" src="/dim/scripts/animationTiming.js"></script>
</body>
</html>