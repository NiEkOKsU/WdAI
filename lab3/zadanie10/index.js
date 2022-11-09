let circle = document.querySelector("#circle");
let main = document.querySelector("main");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let mainClick = false;

function getClickPosition(e) {
    let parentPosition = getPosition(e.currentTarget);
    let xPosition = e.clientX - parentPosition.x - (circle.clientWidth / 2);
    let yPosition = e.clientY - parentPosition.y - (circle.clientHeight / 2);
    h1.textContent = ""
    body.style.backgroundColor = "white";
    mainClick = true; 
    circle.style.left = xPosition + "px";
    circle.style.top = yPosition + "px";
}

function getPosition(el) {
  let xPos = 0;
  let yPos = 0;
 
  while (el) {
    if (el.tagName == "body") {
      let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      let yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

function alarm(el){
    if (!mainClick){
        h1.textContent = "Naciśnięto poza obszar"
        body.style.backgroundColor = "red";
        return;
    }
    mainClick = false;
}

main.addEventListener("click", getClickPosition, false);
body.addEventListener("click", alarm)