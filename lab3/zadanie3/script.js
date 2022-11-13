let zmienna = 5

document.getElementById("add").onclick = function() {
    let el = document.createElement("li");
    let textNode = document.createTextNode("Item-" + zmienna);
    zmienna++
    el.appendChild(textNode);
    document.getElementById("list").appendChild(el);
}



document.getElementById("delete").onclick = function() {
    let toRemove = document.getElementById("list");
    console.log(toRemove.childNodes[0])
    toRemove.removeChild(toRemove.childNodes[0]);
}