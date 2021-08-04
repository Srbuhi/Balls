
appendButton("start");
appendButton("stop");
let st;

let _start = document.getElementById("start");
_start.addEventListener("click", function (){
       st = setInterval(function (){
        createBall();
        moveBall();
    }, 1000);

});

let _stop = document.getElementById("stop");
_stop.addEventListener("click", function (){
    clearInterval(st);
})

function appendButton(atr) {
    let btn = document.createElement("button");
    btn.setAttribute("id", atr);
    document.body.appendChild(btn);
    btn.innerText = atr.toUpperCase();
}


function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min );
}

function createBall() {
    let px = "px",
        size = getRandomNumber(200, 50),
        top = getRandomNumber(window.innerHeight - size, size),
        left = getRandomNumber(window.innerWidth - size, size),
        color = `rgb(${getRandomNumber(255, 0)}, ${getRandomNumber(255, 0)}, ${getRandomNumber(255, 0)})`;
    let divStyle = {
        width: size + px,
        height: size + px,
        background: color,
        borderRadius: "50%",
        position: "absolute",
        top: top + px,
        left: left + px
    };
    let myDiv = document.createElement("div");
    myDiv.setAttribute("class", "circle");
    for(let style in divStyle){
        myDiv.style[style] = divStyle[style];
    }
    document.body.appendChild(myDiv);

}

function moveBall() {
    let moveBall = document.querySelectorAll(".circle");
    moveBall.forEach((item, index) => {
      item.addEventListener("click", function () {
        item.style.transform = `translate(${getRandomNumber(200,20)}px, ${getRandomNumber(30, -200)}px)`;
        item.style.transitionDuration = "5s";
        item.style.transitionTimingFunction = "linear";
     })
    })
}


