document.getElementById("btn").onclick = function(){
    let imie = prompt("Podaj imię: ")
    let lastLetter = imie[imie.length-1]
    if (lastLetter === 'a'){
        document.querySelector("p").innerHTML = "Witam Panią " + imie;
    }
    else{
        document.querySelector("p").innerHTML = "Witam Pana " + imie;
    }
}

