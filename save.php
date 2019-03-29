<?php 

//$pianoRoll = serialize($_GET["pianoroll"]);
$pianoRoll = $_POST["pianoroll"];
$fileName = $_POST["fileName"];

$handle = fopen($_SERVER["DOCUMENT_ROOT"] . "/Mixo/saves/$fileName","w");
fwrite($handle,$pianoRoll);
fclose($handle);
echo $pianoRoll;

?>