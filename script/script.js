
let seconds = 0;
let minutes = 0;
let hours = 2;
let days = 8;

let hourView = document.querySelector(".hours")
let minutesView = document.querySelector(".minutes")
let secondsView = document.querySelector(".seconds")
let dayView = document.querySelector(".day")
const buttonModal = document.querySelector(".btnModal")
const btnBack = document.querySelector(".btnBack");
const modalContainer = document.querySelector('.modal-container')
btnBack.addEventListener('click', handleModal);
buttonModal.addEventListener('click', handleModal);

function handleTime() {
    if(seconds == 0) {
        seconds = 60;
        if(minutes == 0) {
            minutes = 60
            if(hours === 0) {
                alert('TIME TO LAUNCH')
            }
            hours -= 1
            if(hours == 0) {
                hours = 23
                days -= 1;
            }
        }
        minutes -= 1;
    }
    seconds -= 1;

    if(days < 10 ) {
        dayView.innerHTML = '0' + days;
    } else {
        dayView.innerHTML = days
    }
    
    if(hours < 10 ) {
        hourView.innerHTML = '0' + hours;
    } else {
        hourView.innerHTML =  hours;
    }
    

    if(minutes < 10 ) {
        minutesView.innerHTML = '0' + minutes;
    } else {
        minutesView.innerHTML = minutes;
    }
    
    if(seconds < 10 ) {
        secondsView.innerHTML = '0' + seconds;
    } else {
        secondsView.innerHTML = seconds;
    }
}

function handleModal() {
    modalContainer.classList.toggle('desactive')
}

setInterval(handleTime, 1000);