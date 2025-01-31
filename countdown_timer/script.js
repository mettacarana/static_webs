const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newyears = '1 Jan 2026';

function countdown(){
    const newYearsDate = new Date(newyears);
    const currentDate = new Date();
    const seconds = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mins = Math.floor(seconds/60) % 60;
    const secs = Math.floor(seconds) % 60;

    daysEl.innerHTML = days;  
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;     

    //console.log(days, hours, mins, secs);
}

function formatTime(time){
    return time < 10? `0${time}`: time;
}
countdown();

setInterval(countdown, 1000);