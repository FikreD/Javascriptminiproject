

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

function startTimer() {
    interval = setInterval(() => {
        millisecond += 10;
        if (millisecond == 1000) {
            millisecond = 0;
            second++;
        }
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            minute = 0;
            hour++;
        }
        displayTimer();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    displayTimer();
}

function displayTimer() {
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;
    timer.textContent = `${h}:${m}:${s}:${ms}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


