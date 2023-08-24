var Timer = 60;
var score = -19;
var randomNo = 0;

const scoreValue = ()=>{
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

const makeBubble = () => {
  var clutter = "";

  for (var i = 1; i < 169; i++) {
    var randomNo = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNo}</div>`;
  }


  document.querySelector("#pbtm").innerHTML = clutter;
};


const runTimer = () => {
  var clearTimer = setInterval(() => {
    if (Timer > 0) {
      Timer--;
      document.querySelector("#timervalue").textContent = Timer;
    }else{
        document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1><br/> <h1>your total score is ${score} </h1>`
        clearInterval(clearTimer);
    }
  }, 1000);
};

const getNewHit = ()=>{
  randomNo = Math.floor(Math.random()*10);
  document.querySelector("#hitvalue").textContent = randomNo;
}

document.querySelector("#pbtm")
.addEventListener("click", (details)=>{
  var clickedNumber = Number(details.target.textContent);
  if(clickedNumber === randomNo){
    scoreValue();
    makeBubble();
    getNewHit();
  }

})




runTimer();
makeBubble();
getNewHit();  
scoreValue();
scoreValue();
