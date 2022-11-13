let i = 0;
document.getElementById("clickNum").innerHTML = i;

function increment(){
    i += 1;
    document.getElementById("clickNum").innerHTML = i;
}

document.getElementById("on").onclick = function(){
    document.getElementById("inc").addEventListener('click', increment, false);
}

document.getElementById("off").onclick = function(){
    document.getElementById("inc").removeEventListener('click', increment, false);
}
