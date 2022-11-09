let points = 0
let clicked = false
let propagation = true

let howMuchPoint = [1, 2, 5]
const boxNum = 3
let number = 0

let small_clicked = false
let med_clicked = false
let big_clicked = false
let smallOver = false
let medOver = false

let small = document.getElementById("small")
let med = document.getElementById("med")
let big = document.getElementById("big")
let reset = document.getElementById("reset")
let propagationButton = document.getElementById("propagation")
let change = document.getElementById("change")

let el
let textNode

function addToList(){
    if(small_clicked && !smallOver){
        el = document.createElement("li");
        console.log(el)
        textNode = document.createTextNode("Dodano " + howMuchPoint[(number + 2) % boxNum] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
    if(med_clicked && !medOver){
        el = document.createElement("li");
        textNode = document.createTextNode("Dodano " + howMuchPoint[(number + 1) % boxNum] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
    if(big_clicked){
        el = document.createElement("li");
        textNode = document.createTextNode("Dodano " + howMuchPoint[(number) % boxNum] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
}
function addToSmall(){
    points += howMuchPoint[(number + 2) % boxNum]
    small_clicked = true
    document.getElementById("points").textContent = points
}

function addToMed(){
    if (!small_clicked || propagation){
        points += howMuchPoint[(number + 1) % boxNum]
        med_clicked = true
        document.getElementById("points").textContent = points
    }
}

function addToBig(){
    if ((!small_clicked && !med_clicked) || propagation){
        points += howMuchPoint[number % boxNum]
        document.getElementById("points").textContent = points
        big_clicked = true
    }
    addToList()
    pointStatusCheck()
}

function setSmallTrue(){
    small_clicked = true
}

function setMedTrue(){
    med_clicked = true
}

function pointStatusCheck(){
    if (points > 30){
        med.removeEventListener('click', addToMed, false)
        med.addEventListener('click', setMedTrue, false)
        medOver = true
    }
    if (points > 50){
        small.removeEventListener('click', addToSmall, false)
        small.addEventListener('click', setSmallTrue, false)
        smallOver = true
    }
    small_clicked = false
    med_clicked = false
    big_clicked = false
}

function restart(){
    points = 0
    number = 0
    document.getElementById("points").textContent = points
    let toRemove = document.getElementById("list");
    len = toRemove.childNodes.length
    for (i = 0; i < len; i++){
        toRemove.removeChild(toRemove.childNodes[0]);
    }
    el = document.createElement("li");
    textNode = document.createTextNode("Zresetowano");
    el.appendChild(textNode);
    document.getElementById("list").appendChild(el);
    start()
}

function prop(){
    if(propagation){
        propagation = false
        propagationButton.innerHTML = "Start propagation"
        el = document.createElement("li");
        textNode = document.createTextNode("Propagacja zatrzymana");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
    else{
        propagation = true
        propagationButton.innerHTML = "Stop propagation"
        el = document.createElement("li");
        textNode = document.createTextNode("Propagacja wznowiona");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
}

function changer(){
    number += 1
    el = document.createElement("li");
    textNode = document.createTextNode("Zmieniono wartościowanie pudełek");
    el.appendChild(textNode);
    document.getElementById("list").appendChild(el);
}

function start() {
    if (points === 0){
        small.addEventListener('click', addToSmall, false)
        med.addEventListener('click', addToMed, false)
        big.addEventListener('click', addToBig, false)
        reset.addEventListener('click', restart, false)
        propagationButton.addEventListener('click', prop, false)
        change.addEventListener('click', changer, false)
    }
}

start()
