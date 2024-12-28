let time = 0;
let interval;
let value = document.getElementById("time");
let btn = document.getElementById("butn");
let wait = document.getElementById("stp");
function timer(){
interval = setInterval(() => {
time += 1;
value.innerText = time;
btn.style.display = "none";
   },300);
}

function stop(){
    wait.innerHTML = '<i class="fa-solid fa-play" style="color: #ffffff;"></i>';
    clearInterval(interval);
}

function reset(){
    stop();
    time = 0;
    value.innerText = time;
}