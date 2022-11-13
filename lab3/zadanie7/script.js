async function getData() {
    let miasta = await fetch("http://localhost:3000/cities").then(res => res.json())
    return miasta
}

async function getA(data){
    const cities = data
    const filtered = cities.filter(city => city.province === "małopolskie")
    let answer = ""
    for (let city in filtered){
        answer += filtered[city].name + ", "
    }
    answer = answer.substr(0, answer.length - 2) + "."
    document.getElementById("answerA").textContent = answer
}

function doubleA(city){
    let aCounter = 0
    for(let letter in city){
        if(city[letter] === 'a' || city[letter] === 'A'){
            aCounter += 1
        }
    }
    return aCounter === 2
}

async function getB(data){
    const cities = data
    const filtered = cities.filter(city => doubleA(city.name))
    let answer = ""
    for (let city in filtered){
        answer += filtered[city].name + ", "
    }
    answer = answer.substr(0, answer.length - 2) + "."
    document.getElementById("answerB").textContent = answer
}

async function getC(data) {
    const cities = data;
    let citiesArray = new Array;
    for (let prop in cities) {
        citiesArray.push([cities[prop].name, cities[prop].people / cities[prop].area]);
    }
    citiesArray.sort(function (a, b) {
        if (a[1] < b[1])
            return 1
        else if (a[1] > b[1])
            return -1
        return 0
    });
    document.getElementById("answerC").textContent = citiesArray[4][0];

}

async function getD(data){
    const cities = data;
    const filtered = cities.filter(city => city.people > 100000)
    let answer = ""
    for (let city in filtered){
        answer += filtered[city].name + " City, "
    }
    answer = answer.substr(0, answer.length - 2) + "."
    document.getElementById("answerD").textContent = answer
}

async function getE(data){
    const cities = data;
    const citiesUnder80 = cities.filter(city => city.people < 80000)
    const citiesOver80 = cities.filter(city => city.people >= 80000)
    const numUnder80 = citiesUnder80.length
    const numOver80 = citiesOver80.length
    let answer = ""
    if(numUnder80 > numOver80){
        answer = "Więcej jest miast poniżej 80tys. "
    }
    else{
        answer = "Więcej jest miast powyżej 80tys. "
    }
    answer += "Liczba miast poniżej 80tys " + numUnder80 + ", liczba miast ponad 80tys " + numOver80
    document.getElementById("answerE").textContent = answer
}

async function getF(data){
    const cities = data;
    const filtered = cities.filter(city => city.township[0] === "p")
    const lenFiltered = filtered.length
    let sumArea = 0;
    console.log(filtered)
    for(let city in filtered){
        sumArea += filtered[city].area
    }
    let answer = "Średnia powierzchnia miast z powiatów zaczynających się na literę P wynosi: " + sumArea/lenFiltered
    document.getElementById("answerF").textContent = answer
}

async function getG(data){
    const cities = data;
    const filtered = cities.filter(city => city.province === "pomorskie")
    const flitered2 = filtered.filter(city => city.people > 5000)
    let answer = ""
    if(filtered.length === flitered2.length){
        answer += "Wszystkie miasta w tym wojewódtwie są ponad 5tys mieszkańców. "
    }
    else{
        answer += "Nie wszystkie miasta w tym wojewódtwie są ponad 5tys mieszkańców. "
    }
    answer += "Ilosc miast ponad 5tys mieszkańców " + flitered2.length + " ilosc wszytskich miast " + filtered.length
    document.getElementById("answerG").textContent = answer
}

async function loadSite() {
    let json = await getData();
    getA(json)
    getB(json)
    getC(json)
    getD(json)
    getE(json)
    getF(json)
    getG(json)
}

loadSite();