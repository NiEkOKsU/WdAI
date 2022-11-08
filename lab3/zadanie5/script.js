let points = 0;
let clicked = false;
let propagation = true;

let blue_clicked = false;
let red_clicked = false;
let yellow_clicked = false;

function changePoints(addd){
    points += addd;
    document.getElementById("points").textContent = points;
}

function resetbuttons(){
    blue_clicked = false;
    red_clicked = false;
    yellow_clicked = false;
}

function clearInfo(){
    document.getElementById("info1").textContent = "-";
    document.getElementById("info2").textContent = "-";
    document.getElementById("info3").textContent = "-";
}

function displayInfo(){
    document.getElementById("info1").textContent= "-"
    document.getElementById("info2").textContent= "-"
    document.getElementById("info3").textContent= "-"
    if (blue_clicked)
        document.getElementById("info1").textContent= "Nacisnąłeś niebieski o wartości 1"
    if (red_clicked)
        document.getElementById("info2").textContent= "Nacisnąłeś czerwony o wartości 2"
    if (yellow_clicked)
        document.getElementById("info3").textContent= "Nacisnąłeś żółty o wartości 5"
}

function yellowClick(){
    if (points>50)
        return;
    changePoints(5);
    yellow_clicked = true;
    if (!propagation){
        displayInfo();
        resetbuttons();
    }
}


function redClick(){
    if (points>30)
        return;
    red_clicked = true;
    if (!propagation){
        displayInfo();
        resetbuttons();
    }
        
    changePoints(2);
}

function blueClick(){
    changePoints(1);
    blue_clicked = true;
    displayInfo();
    resetbuttons();
}

function clickHandler(id){
    if(!clicked){
        switch(id){
            case "big":
                blueClick();
                break;
            case "med":
                redClick();
                break;
            case "small":
                yellowClick();
                break;
        }

    }
    if (!propagation)
        clicked = true;
}

function clickHandlerReset(){
    clicked = false;
}


function reset(){
    points = 0;
    clearInfo();
    resetbuttons();
    document.getElementById("points").textContent = points;
}

function prop(){
    if (this.classList.contains("cur-stop")){
        propagation = false;
        this.classList.remove("cur-stop");
        this.classList.add("cur-start");
        this.textContent="Start Propagation";
    }
    else if (this.classList.contains("cur-start")){
        propagation = true;
        this.classList.remove("cur-start");
        this.classList.add("cur-stop");
        this.textContent="Stop Propagation";
    }
    return
}


document.getElementById("reset").addEventListener('click', reset);
document.getElementById("propagation").addEventListener('click', prop);
document.getElementById("small").addEventListener('click', () => {
    clickHandler("small");
});
document.getElementById("med").addEventListener('click', () => {
    clickHandler("med");
});
document.getElementById("big").addEventListener('click', () => {
    clickHandler("big");
    clickHandlerReset();
});
document.getElementById("points").textContent = points;
