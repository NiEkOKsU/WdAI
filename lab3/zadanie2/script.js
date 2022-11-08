document.getElementById("btn1").onclick = function(){
    document.getElementById("img1").style.visibility= "hidden";
    document.getElementById("img3").style.visibility= "hidden";
    document.getElementById("img2").style.visibility= "visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "visible";
};
document.getElementById("btn2").onclick = function(){
    document.getElementById("img1").style.visibility= "hidden";
    document.getElementById("img2").style.visibility= "hidden";
    document.getElementById("img3").style.visibility= "visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "visible";
};
document.getElementById("btn3").onclick = function(){
    document.getElementById("img2").style.visibility= "hidden";
    document.getElementById("img3").style.visibility= "hidden";
    document.getElementById("img1").style.visibility= "visible";
    document.getElementById("img1").style.border= "5px solid black";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("btn1").style.visibility = "visible";

};