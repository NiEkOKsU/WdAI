const NAMEINPUT = document.getElementById("name")
const TELINPUT = document.getElementById("tel")
const FORM = document.querySelector("form")
const BUTTON = document.getElementById("add")


function addAdress(){
    if(!NAMEINPUT.checkValidity() || !TELINPUT.checkValidity()){
        alert("Nie poprawne dane")
        return
    }
    let adresses = document.getElementById("adresses")

    let adress = document.createElement("section")
    adress.classList.add("adress")

    let left = document.createElement("div")
    left.classList.add("left")

    let left_h2 = document.createElement('h2');
    left_h2.textContent=FORM.name.value;
    let left_p = document.createElement('p');
    left_p.textContent=FORM.tel.value;

    left.appendChild(left_h2)
    left.appendChild(left_p)

    adress.appendChild(left)

    let right = document.createElement('div');
    right.classList.add("right");
    right.textContent="🗑️"
    right.addEventListener('click', deleteContact)

    adress.appendChild(right)

    adresses.appendChild(adress)
    FORM.name.value = ""
    FORM.tel.value = ""
}


function deleteContact(){
    let parent = document.getElementById("adresses")
    let index = Array.from(parent.children).indexOf(this.parentNode);
    console.log("1")
    parent.removeChild(parent.children[index]);
}

BUTTON.addEventListener('click', addAdress)