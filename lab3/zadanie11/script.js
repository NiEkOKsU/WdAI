let visible = []
let bigger = []

function addToSec(section, name, el, content){
    el = document.createElement("p")
    el.classList.add(name)
    el.textContent = content
    section.appendChild(el)
}

function eventsStarts(data, subregionsNames){
    const main = document.querySelector("main")
    let container
    let buttons = document.getElementsByClassName("arrow-down")
    let section
    let countrySub
    let countryName
    let population
    let area
    Array.from(buttons).forEach(button =>{
        button.addEventListener('click', () => {
            let containerID = parseInt(button.id) + 100
            let countryContainer = document.createElement("div")
            countryContainer.id = 1000 + parseInt(button.id)
            data.forEach(country => {
                if (country.subregion === undefined && subregionsNames[button.id][0] === undefined){
                    container = document.getElementById("" + containerID)
                    section = document.createElement("section")
                    addToSec(section, "subregion-name", countrySub, country.name.common)
                    addToSec(section, "country-name", countryName, country.capital)
                    addToSec(section, "subregion-population", population, country.population)
                    addToSec(section, "subregion-area", area, country.area)
                    countryContainer.appendChild(section)
                    container.appendChild(countryContainer)
                }
                else if(country.subregion === subregionsNames[button.id][0]){
                    container = document.getElementById("" + containerID)
                    section = document.createElement("section")
                    addToSec(section, "subregion-name", countrySub, country.name.common)
                    addToSec(section, "country-name", countryName, country.capital)
                    addToSec(section, "subregion-population", population, country.population)
                    addToSec(section, "subregion-area", area, country.area)
                    countryContainer.appendChild(section)
                    container.appendChild(countryContainer)
                }
            })
            let botId = parseInt(button.id) + 25
            document.getElementById("" + botId).style.display = "inline-block"
            document.getElementById(button.id).style.display = "none"
            visible.push(countryContainer.id)
            bigger.push("" + containerID)
        })
    })

    let buttons2 = document.getElementsByClassName("arrow-up")
    Array.from(buttons2).forEach(button =>{
        button.addEventListener('click', () =>{
            let divIndex = parseInt(button.id) - 25 + 1000
            let biggerDivId = parseInt(button.id) - 25 + 100
            document.getElementById(biggerDivId).removeChild(document.getElementById(divIndex))
            let botId = divIndex - 1000
            document.getElementById("" + botId).style.display = "inline-block"
            document.getElementById(button.id).style.display = "none"
            let index = visible.findIndex(el => el === ""+divIndex)
            let index2 = visible.findIndex(el => el === ""+biggerDivId)
            visible.splice(index, 1)
            bigger.splice(index2, 1)
        })
    })

    let change1 = document.getElementById("change1")
    let change2 = document.getElementById("change2")
    let change3 = document.getElementById("change3")
    change1.addEventListener('click', () =>{
        site1.style.display = "flex"
        site2.style.display = "none"
        site3.style.display = "none"
        removeItems()
    })
    change2.addEventListener('click', () =>{
        site1.style.display = "none"
        site2.style.display = "flex"
        site3.style.display = "none"
        removeItems()
    })
    change3.addEventListener('click', () =>{
        site1.style.display = "none"
        site2.style.display = "none"
        site3.style.display = "flex"
        removeItems()
    })
}

function removeItems(){
    let n = visible.length
    let bigD
    let smallD
    for(let i = 0; i < n; i++){
        bigD = bigger.pop()
        smallD = visible.pop()
        document.getElementById(bigD).removeChild(document.getElementById(smallD))
    }
}

async function loadPage(){
    const json = await fetch("https://restcountries.com/v3.1/all")
    const data = await json.json()
    console.log(data)
    let subregionsNames = [[undefined, 0, 0]]
    let subregionName
    let index
    data.forEach(country => {
        subregionName = subregionsNames.find(name => name[0] === country.subregion)
        if(subregionName === undefined && country.subregion !== undefined){
            subregionsNames.push([country.subregion, country.population, country.area])
        }
        else{
            index = subregionsNames.findIndex(name => name[0] === country.subregion)
            subregionsNames[index][1] += country.population
            subregionsNames[index][2] += country.area
        }
    })
    const main = document.querySelector("main")
    let container
    let section
    let subName
    let subPopulation
    let subArea
    let i = 0
    let site1 = document.createElement("div")
    site1.id = "site1"
    let site2 = document.createElement("div")
    site2.id = "site2"
    let site3 = document.createElement("div")
    site3.id = "site3"
    subregionsNames.forEach(subregion =>{
        container = document.createElement("div")
        container.id = 100 + i
        section = document.createElement("section")

        subName = document.createElement("p")
        subName.classList.add("subregion-name")
        if(subregion[0] === undefined){
            subName.innerHTML = "<span class=\"material-symbols-outlined arrow-down\" id=" + i + ">keyboard_arrow_down</span> <span class=\"material-symbols-outlined arrow-up\" id=" + parseInt(i + 25) + " style=\"display: none;\">keyboard_arrow_up</span>" + " undefined"
        }
        else{
            subName.innerHTML = "<span class=\"material-symbols-outlined arrow-down\" id=" + i + ">keyboard_arrow_down</span>  <span class=\"material-symbols-outlined arrow-up\" id=" + parseInt(i + 25) + " style=\"display: none;\">keyboard_arrow_up</span>" + subregion[0]
        }
        section.appendChild(subName)
        i += 1
        subPopulation = document.createElement("p")
        subPopulation.classList.add("subregion-population")
        subPopulation.textContent = subregion[1]
        section.appendChild(subPopulation)

        subArea = document.createElement("p")
        subArea.classList.add("subregion-area")
        subArea.textContent = subregion[2]
        section.appendChild(subArea)
        if (i <= 10){
            container.appendChild(section)
            site1.appendChild(container)
            main.appendChild(site1)
        }
        else if(i <= 20){
            container.appendChild(section)
            site2.appendChild(container)
            main.appendChild(site2)
        }
        else{
            container.appendChild(section)
            site3.appendChild(container)
            main.appendChild(site3)
        }
    })
    site2.style.display = "none"
    site3.style.display = "none"
    eventsStarts(data, subregionsNames)
}
loadPage()
