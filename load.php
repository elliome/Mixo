<?php 

//$pianoRoll = serialize($_GET["pianoroll"]);
//$pianoRoll = $_POST["pianoroll"];
$fileName = $_POST["fileName"];

$doc_root = "";

//$handle = fopen($_SERVER["DOCUMENT_ROOT"] . "/dim/saves/" . $fileName,"r");
$handle = fopen($_SERVER["DOCUMENT_ROOT"] . $doc_root ."/saves/$fileName","r");
$pianoRoll = fread($handle,filesize($_SERVER["DOCUMENT_ROOT"] . $doc_root ."/saves/$fileName"));
fclose($handle);

echo $pianoRoll;

?>