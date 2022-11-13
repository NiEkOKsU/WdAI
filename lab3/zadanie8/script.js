const password = document.querySelector('#passwordField');
const repeatedPassword = document.querySelector("#repeatPassword")
let passwordStrength = 0;

function checkPasswordStrength() {
    passwordStrength = 0
    let passwordValue = password.value
    let patterns = [/[A-Z]/, /[0-9]/, /.{8}/, /[!-//:-@[-`{-ÿ]/]
    patterns.forEach(pattern =>{
        if (pattern.test(passwordValue)){
            passwordStrength++;
        }
    })
    let capitalLetOk = patterns[0].test(passwordValue)
    let numOk = patterns[1].test(passwordValue)
    let lengthOk = patterns[2].test(passwordValue)
    let specialCharOk = patterns[3].test(passwordValue)
    if(capitalLetOk){
        document.querySelector("#capitalLetter").style.backgroundColor = "#00ff00"
    }
    else{
        document.querySelector("#capitalLetter").style.backgroundColor = "grey"
    }
    if(numOk){
        document.querySelector("#number").style.backgroundColor = "#00ff00"
    }
    else{
        document.querySelector("#number").style.backgroundColor = "grey"
    }
    if(lengthOk){
        document.querySelector("#length").style.backgroundColor = "#00ff00"
    }
    else{
        document.querySelector("#length").style.backgroundColor = "grey"
    }
    if(specialCharOk){
        document.querySelector("#specialChar").style.backgroundColor = "#00ff00"
    }
    else{
        document.querySelector("#specialChar").style.backgroundColor = "grey"
    }
}

password.addEventListener('keyup', checkPasswordStrength)
document.querySelector("#button").addEventListener('click', () =>{
    if(passwordStrength < 4){
        alert("Hasło jest za słabe")
        return
    }
    let passwordValue = password.value
    let repeatedPasswordValue = repeatedPassword.value
    if(passwordValue === repeatedPasswordValue){
        alert("Podane hasła są takie same")
    }
    else{
        alert("Podane hasła różnią się od siebie")
    }
})

document.getElementById("on1").addEventListener('click', () =>{
    password.type = "text"
    document.getElementById("on1").style.display = "none"
    document.getElementById("off1").style.display = "inline"
})

document.getElementById("off1").addEventListener('click', () =>{
    password.type = "password"
    document.getElementById("on1").style.display = "inline"
    document.getElementById("off1").style.display = "none"
})

document.getElementById("on2").addEventListener('click', () => {
    repeatedPassword.type = "text"
    document.getElementById("on2").style.display = "none"
    document.getElementById("off2").style.display = "inline"
})

document.getElementById("off2").addEventListener('click', () => {
    repeatedPassword.type = "password"
    document.getElementById("on2").style.display = "inline"
    document.getElementById("off2").style.display = "none"
})