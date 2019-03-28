var animationElements = document.getElementsByClassName("animation");

for(i = 0; i < animationElements.length; i++){
    //crumbs[i].style.color = "#FF1430";
    animationElements[i].style.animmationDelay = (i * 1) + "s";
}