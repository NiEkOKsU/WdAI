const PASSWORD = document.querySelector('#passwordField');
const REPEATEDPASSWORD = document.querySelector("#repeatPassword")
let passwordStrength = 0;
const CAPITALLETTER = document.querySelector("#capitalLetter")
const NUM = document.querySelector("#number")
const LEN = document.querySelector("#length")
const SPECIAL = document.querySelector("#specialChar")


function checkPasswordStrength() {
    passwordStrength = 0
    let passwordValue = PASSWORD.value
    let patterns = [/[A-Z]/, /[0-9]/, /.{8}/, /[!-//:-@[-`{-ÿ]/]

    patterns.forEach(pattern => {
        if(pattern.test(passwordValue)){
            passwordStrength += 1
        }
    })
    
    if(patterns[0].test(passwordValue)){
        CAPITALLETTER.style.backgroundColor = "#00ff00"
    }
    else{
        CAPITALLETTER.style.backgroundColor = "grey"
    }
    if(patterns[1].test(passwordValue)){
        NUM.style.backgroundColor = "#00ff00"
    }
    else{
        NUM.style.backgroundColor = "grey"
    }
    if(patterns[2].test(passwordValue)){
        LEN.style.backgroundColor = "#00ff00"
    }
    else{
        LEN.style.backgroundColor = "grey"
    }
    if(patterns[3].test(passwordValue)){
        SPECIAL.style.backgroundColor = "#00ff00"
    }
    else{
        SPECIAL.style.backgroundColor = "grey"
    }
}

PASSWORD.addEventListener('keyup', checkPasswordStrength)
document.querySelector("#button").addEventListener('click', () =>{
    if(passwordStrength < 4){
        alert("Hasło jest za słabe")
        return
    }
    let passwordValue = PASSWORD.value
    let repeatedPasswordValue = REPEATEDPASSWORD.value
    if(passwordValue === repeatedPasswordValue){
        alert("Podane hasła są takie same i spełniają wszystkie warunki")
    }
    else{
        alert("Podane hasła różnią się od siebie")
    }
})

document.getElementById("on1").addEventListener('click', () =>{
    PASSWORD.type = "text"
    document.getElementById("on1").style.display = "none"
    document.getElementById("off1").style.display = "inline"
})

document.getElementById("off1").addEventListener('click', () =>{
    PASSWORD.type = "password"
    document.getElementById("on1").style.display = "inline"
    document.getElementById("off1").style.display = "none"
})

document.getElementById("on2").addEventListener('click', () => {
    REPEATEDPASSWORD.type = "text"
    document.getElementById("on2").style.display = "none"
    document.getElementById("off2").style.display = "inline"
})

document.getElementById("off2").addEventListener('click', () => {
    REPEATEDPASSWORD.type = "password"
    document.getElementById("on2").style.display = "inline"
    document.getElementById("off2").style.display = "none"
})