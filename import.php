<?php

$preset = $_GET["preset"];

$filename = "presets/".$preset.".preset";

$handle = fopen($filename , "r");
$contents = fread($handle, filesize($filename));
fclose($handle);

echo $contents;

?>