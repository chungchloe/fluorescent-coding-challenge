//1. First Solution - addEventListner
//Benefits: Easty to write, no modification to html necessary
//Limitations: Manual. Same lines of code have to be duplicated for the function to be applied to a new image.
/*document.getElementById("red-button").addEventListener("click", function() {
    document.getElementById("red").scrollIntoView();
});

document.getElementById("green-button").addEventListener("click", function() {
    document.getElementById("green").scrollIntoView();
});

document.getElementById("navy-button").addEventListener("click", function() {
    document.getElementById("navy").scrollIntoView();
});*/



//2. Second Solution(?) - addEventListner 2
/*var colourButtons = document.querySelectorAll(".colour-button").length;
var myId = null;

for (var i=0; i<colourButtons; i++) { 
    myId = document.querySelectorAll(".product-img")[i].id;
    document.querySelectorAll(".colour-button")[i].addEventListener("click", function() {
        document.getElementById(myId).scrollIntoView();
    });
}*/



//3. Third Solution - Switch statement
//Benefits: All functions are combined into one.
//Limitations: HTML has to be modified, a new switch statement has to be added whenever there is a new image.
/*function scrollToImg(buttonId) {
    var productImgId = null;
    
    switch (myId) {
        case "green-button" :
        myImgId = "green";
        break;

        case "red-button" :
        myImgId = "red";
        break;

        case "navy-button" :
        myImgId = "navy";
        break;
    }
    
    document.getElementById(productImgId).scrollIntoView();
}*/



//4. Fourth Solution - substring method
//Benefits: Simple code
//Limitations: HTML has to be modified. Image ids and button ids have to strictly follow a certain naming convention.
function scrollToImg(buttonId) {
    var productImgId = null;

    productImgId = buttonId.substring(0, buttonId.indexOf('-'));

    document.getElementById(productImgId).scrollIntoView();
}



//5. Fifth Solution - Anchor tag
//Benefits: Easy to write, accessible.
//Limitations: Image ids cannot be changed.



//Liquid
/*{% if product.id[i] === colour.id[i] %}
    product[i].scrollIntoView();
{% endif %}*/
