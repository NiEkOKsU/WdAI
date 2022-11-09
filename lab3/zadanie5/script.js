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
let reverse = false

let small = document.getElementById("small")
let med = document.getElementById("med")
let big = document.getElementById("big")
let reset = document.getElementById("reset")
let propagationButton = document.getElementById("propagation")
let change = document.getElementById("change")

let el
let textNode

function addToSmall(){
    if (reverse){
        if(smallOver){
            big_clicked = true
            return
        }
        points += howMuchPoint[0]
        big_clicked = true
        document.getElementById("points").textContent = points
        el = document.createElement("li");
        textNode = document.createTextNode("Dodano " + howMuchPoint[0] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
    else{
        points += howMuchPoint[2]
        small_clicked = true
        document.getElementById("points").textContent = points
        el = document.createElement("li");
        textNode = document.createTextNode("Dodano " + howMuchPoint[2] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
}

function addToMed(){
    if (reverse){
        if(!big_clicked || propagation){
            points += howMuchPoint[1]
            med_clicked = true
            document.getElementById("points").textContent = points
            el = document.createElement("li");
            textNode = document.createTextNode("Dodano " + howMuchPoint[1] + " pkt");
            el.appendChild(textNode);
            document.getElementById("list").appendChild(el);
        }
        return
    }
    if (!small_clicked || propagation){
        points += howMuchPoint[1]
        med_clicked = true
        document.getElementById("points").textContent = points
        el = document.createElement("li");
        textNode = document.createTextNode("Dodano " + howMuchPoint[1] + " pkt");
        el.appendChild(textNode);
        document.getElementById("list").appendChild(el);
    }
}

function addToBig(){
    console.log(small_clicked)
    console.log(med_clicked)
    console.log(big_clicked)
    if (reverse){
        if ((!big_clicked && !med_clicked) || propagation){
            points += howMuchPoint[2]
            small_clicked = true
            document.getElementById("points").textContent = points
            el = document.createElement("li");
            textNode = document.createTextNode("Dodano " + howMuchPoint[2] + " pkt");
            el.appendChild(textNode);
            document.getElementById("list").appendChild(el);
        }
        pointStatusCheckRev()
        return
    }
    else{
        if ((!small_clicked && !med_clicked) || propagation){
            points += howMuchPoint[0]
            document.getElementById("points").textContent = points
            big_clicked = true
            el = document.createElement("li");
            textNode = document.createTextNode("Dodano " + howMuchPoint[0] + " pkt");
            el.appendChild(textNode);
            document.getElementById("list").appendChild(el);
        }
        pointStatusCheck()
    }
}

function setSmallTrue(){
    small_clicked = true
}

function setMedTrue(){
    med_clicked = true
}

function setBigTrue(){
    big_clicked = true
}

function pointStatusCheck(){
    if (points > 30 && !medOver){
        med.removeEventListener('click', addToMed, false)
        med.addEventListener('click', setMedTrue, false)
        medOver = true
    }
    if (points > 50 && !smallOver){
        small.removeEventListener('click', addToSmall, false)
        small.addEventListener('click', setSmallTrue, false)
        smallOver = true
    }
    small_clicked = false
    med_clicked = false
    big_clicked = false
}

function pointStatusCheckRev(){
    if (points > 30 && !medOver){
        med.removeEventListener('click', addToMed, false)
        med.addEventListener('click', setMedTrue, false)
        medOver = true
    }
    if (points > 50 && !smallOver){
        small.removeEventListener('click', addToSmall, false)
        small.addEventListener('click', setBigTrue, false)
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
    if (reverse){
        reverse = false
        small_clicked = true
        big_clicked = false
        if(medOver){
            med.removeEventListener('click', addToMed, false)
            med.addEventListener('click', setMedTrue, false)
        }
        if(smallOver){
            small.removeEventListener('click', addToSmall, false)
            small.removeEventListener('click', setBigTrue, false)
            small.addEventListener('click', setSmallTrue, false)
        }
    }
    else{
        reverse = true
        small_clicked = false
        big_clicked = true
        if(medOver){
            med.removeEventListener('click', addToMed, false)
            med.addEventListener('click', setMedTrue, false)
        }
        if(smallOver){
            small.removeEventListener('click', addToSmall, false)
            small.removeEventListener('click', setSmallTrue, false)
            small.addEventListener('click', setBigTrue, false)
        }
    }
    small_clicked = false
    med_clicked = false
    big_clicked = false
    el = document.createElement("li");
    textNode = document.createTextNode("Zmieniono wartościowanie pudełek");
    el.appendChild(textNode);
    document.getElementById("list").appendChild(el);
}

function start() {
    small.addEventListener('click', addToSmall, false)
    med.addEventListener('click', addToMed, false)
    big.addEventListener('click', addToBig, false)
    reset.addEventListener('click', restart, false)
    propagationButton.addEventListener('click', prop, false)
    change.addEventListener('click', changer, false)
}

start()
