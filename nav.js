var page = window.location.pathname;
page = page.substring(5,page.length - 4);
var pageNumber;

switch (page) {
	case "index":
		pageNumber = 0;
		break;
	case "melodies":
		pageNumber = 1;
		break;
	case "chords":
		pageNumber = 2;
		break;
	case "scales":
		pageNumber = 3;
		break;
	default:

}

document.getElementById("page0").style.color = "rgb(241, 167, 2)";

for( i = 0; i < pageNumber; i++){
	console.log("1");
	document.getElementById("page" + i).style.color = "rgb(177, 91, 28)";
	document.getElementById("page" + (i+1)).style.color = "rgb(241, 167, 2)";
}
