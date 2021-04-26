/*document.getElementById("red-button").addEventListener("click", function() {
    document.getElementById("red").scrollIntoView();
});

document.getElementById("green-button").addEventListener("click", function() {
    document.getElementById("green").scrollIntoView();
});

document.getElementById("navy-button").addEventListener("click", function() {
    document.getElementById("navy").scrollIntoView();
});*/



/*var colourButtons = document.querySelectorAll(".colour-button").length;
var myId = null;

for (var i=0; i<colourButtons; i++) { 
    myId = document.querySelectorAll(".product-img")[i].id;
    console.log("myId = (" + myId+ "), myId = (" + myId+ ")"); 
    document.querySelectorAll(".colour-button")[i].addEventListener("click", function() {
        document.getElementById(myId).scrollIntoView();
    });
}*/


function scrollToImg(buttonId) {
    //console.log(buttonId);
    var productImgId = null;
    
    /*switch (myId) {
        case "green-button" :
        myImgId = "green";
        break;

        case "red-button" :
        myImgId = "red";
        break;

        case "navy-button" :
        myImgId = "navy";
        break;
    }*/

    productImgId = buttonId.substring(0, buttonId.indexOf('-'));
    
    document.getElementById(productImgId).scrollIntoView();
}
