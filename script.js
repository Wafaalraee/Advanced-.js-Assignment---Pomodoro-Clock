const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const customTimeInput = document.getElementById('custom-time');
const timeLeftDisplay = document.getElementById('time-left');
let timer;
let customTime = customTimeInput.value * 60; // Convert minutes to seconds

startButton.addEventListener('click', startPomodoro);
resetButton.addEventListener('click', resetPomodoro);

function startPomodoro() {
    if (startButton.textContent === 'Start') {
        startButton.textContent = 'Pause';
        timer = setInterval(updateTimeLeft, 1000);
    } else {
        startButton.textContent = 'Start';
        clearInterval(timer);
    }
}

function resetPomodoro() {
    startButton.textContent = 'Start';
    clearInterval(timer);
    customTime = customTimeInput.value * 60;
    updateTimeLeft();
}

function updateTimeLeft() {
    if (customTime === 0) {
        clearInterval(timer);
        alert('Pomodoro is done!');
        resetPomodoro();
    } else {
        const minutes = Math.floor(customTime / 60);
        const seconds = customTime % 60;
        timeLeftDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        customTime--;
    }
}