let i = 0;
let board = document.getElementById("board");
let zombieRunTime = {};
let scoreBox = document.getElementById("score");
let healthBox = document.getElementById("health");
let userMenu = document.getElementById("usernameprompt-container");
let userNameBox = document.getElementById("name");
let hs = document.getElementById("hs-container");
let userName = "";
let score = 0;
let health = 3;
let gameRunning;
let mouseCursor = document.getElementById("customcursor");

const startGame = () => {
    userMenu.style.transform = "translateY(0%)";
    document.getElementById("startgame").addEventListener("click",startgameHandler);
}

function startgameHandler(){
    let form = document.getElementById("username");
    let enteredUsername = form.value;
    if(!form.checkValidity())
        return
    userMenu.style.transform = "translateY(-200%)";
    userNameBox.textContent= enteredUsername;
    userName = enteredUsername;
    gameStart();
}

const generateZombie = () => {
    let offset = 200;
    let cur_bgpos = 0;
    let cur_pos = 0;
    let interval;
    let speed = genRandInt(0, 5)
    let top = genRandInt(0, 20)
    let size = genRandInt(0, 3)/2 + 0.5
    let start_pos = genRandInt(0, 20);
    let zombie = document.createElement("div");
    zombie.style.top = 40 + top + "vh"
    zombie.style.left = 100 + start_pos + "vw"
    zombie.style.transform = "scale(" + size + ")"
    switch(speed){
        case 0:
            interval=50;
            break;
        case 1:
            interval=40;
            break;
        case 2:
            interval=30;
            break;
        case 3:
            interval=20;
            break;
        case 4:
            interval=15;
            break;
        default:
            interval=50;
            break;
    }
    zombie.classList.add("zombie")
    zombie.setAttribute("id", idx)
    zombie.addEventListener("click", function (){
        score += 18
        updateScore()
        clearInterval(zombieRunTime[this.id])
        this.remove()
    })
    board.appendChild(zombie)
    idx += 1
    zombieRunTime[zombie.id] = setInterval ( () => {
        zombie.style.backgroundPosition = cur_bgpos + offset +"px 0px";
        zombie.style.left = 101 - cur_pos + "vw";
        cur_bgpos -= offset
        cur_pos++;
        if (cur_bgpos==-1800)
            cur_bgpos=0;
        if(cur_pos==115){
            zombie.remove();
            score -= 6;
            health -= 1;
            updateScore();
            updateHealth();
            if(health <= 0)
                gameEnd();
            clearInterval(zombieRunTime[zombie.id]);
        }
    }
    , interval );
}

function genRandInt (min, max) {
    return Math.floor(Math.random() * max + min)
}

const updateScore = () => {
    scoreBox.textContent=score;
}
const updateHealth = () => {
    healthBox.textContent = "";
    for(let i = 0; i<health; i++){
        healthBox.textContent+="❤";
    }
}

function boardShot(){
    score -= 6;
    updateScore();
}
function zombieShot(){
    score += 18;
    updateScore();
    clearInterval(zombieRunTime[this.id]);
    this.remove();
}

function startgame2Handler(){
    hs.style.transform = "translateY(-200%)";
    gameStart();
}

function followcursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

const gameEnd = () => {
    clearInterval(gameRunning);
    Object.keys(zombieRunTime).forEach(function(key) {
        clearInterval(zombieRunTime[key]);
    });
    board.removeEventListener("click", boardShot);
    window.removeEventListener("mousemove", followcursor)
    document.body.style.cursor="default";
    highscoresPrompt();
}
const gameStart = () => {
    health = 3;
    score = 0;
    idx = 0;
    updateHealth();
    updateScore();
    document.body.style.cursor="none";
    board.addEventListener("click", boardShot);
    window.addEventListener("mousemove", followcursor)
    let zombies = document.querySelectorAll("div.zombie");
    for (let i = 0; i < zombies.length; i++)
        zombies[i].remove();
    gameRunning = setInterval ( () => {
        generateZombie();
    }
    , 500);
}

function cmpFn(a,b){
    if (a["score"]<b["score"])
        return 1;
    else return -1;
}

async function highscoresPrompt(){
    hs.style.transform = "translateY(0%)";
    document.getElementById("startgame2").addEventListener("click",startgame2Handler);
}


startGame();