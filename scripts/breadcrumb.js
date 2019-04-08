if (pageNumber == null){
    var pageNumber = 0;
}

document.getElementById("page" + pageNumber).style.color = "#FF1430";
document.getElementById("page" + pageNumber).style.fontWeight = "900";
//document.getElementById("page" + pageNumber).style.color = "white";

if(pageNumber != 8){
    document.getElementById("page" + (pageNumber + 1)).style.color = "white";
}

var crumbs = document.getElementsByClassName("breadcrumb-text");

if(pageNumber > 0){
    for(i = 0; i < pageNumber*2; i++){
        //crumbs[i].style.color = "#FF1430";
        crumbs[i].style.color = "#fff";
        crumbs[i].style.opacity = "";
        console.log(crumbs[i]);
    }
}   


// document.body.scrollTop = "0";

// window.addEventListener('scroll', function(e) {
//     if(document.body.scrollTop === 0){
//         document.getElementsByClassName("boxAnimation")[0].style.padding = "200px"; 
//         document.getElementsByClassName("boxAnimation")[0].style.top = "80px";
//         document.getElementsByClassName("boxAnimation")[0].style.transform = "translateY(0px)";
//     }else{
//         document.getElementsByClassName("boxAnimation")[0].style.transitionDuration = "0s";
//         //document.getElementsByClassName("boxAnimation")[0].style.padding = "20px 200px";
//         //document.getElementsByClassName("boxAnimation")[0].style.transform = "translateY(-80px)";
//     }

//     if(document.body.scrollTop < 430){
//         document.getElementsByClassName("boxAnimation")[0].style.transitionDuration = "0s";
//         document.getElementsByClassName("boxAnimation")[0].style.padding = (400 - (document.body.scrollTop)) / 2 + "px 200px";
//         document.getElementsByClassName("boxAnimation")[0].style.position = "fixed";
//         //document.getElementsByClassName("boxAnimation")[0].style.top = 80 - ((document.body.scrollTop / 500) * 80) + "px";
//     }else{
//         document.getElementsByClassName("boxAnimation")[0].style.transitionDuration = "0s";
//         document.getElementsByClassName("boxAnimation")[0].style.position = "fixed";
//         //document.getElementsByClassName("boxAnimation")[0].style.top = "-200px";
//         document.getElementsByClassName("boxAnimation")[0].style.transform = "translateY("+  (430 - (document.body.scrollTop ))  +"px)";
//     }
// })
