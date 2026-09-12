let hoursInputEl = document.getElementById('hoursInput');
let minutesInputEl = document.getElementById('minutesInput');
let convertBtnEl = document.getElementById('convertBtn');
let errorMsgEl = document.getElementById('errorMsg');
let timeInSeconds = document.getElementById('timeInSeconds');

function timeConverter() {
    if (hoursInputEl.value === "") {
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("time-in-seconds");
        errorMsgEl.textContent = "Please enter a valid number of hours.";
        errorMsgEl.classList.add("error-message");
    } else if (minutesInputEl.value === "") {
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("time-in-seconds");
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
        errorMsgEl.classList.add("error-message");
    } else {
        errorMsgEl.textContent = "";
        let hoursInputElVal = parseInt(hoursInputEl.value);
        let minutesInputElVal = parseInt(minutesInputEl.value);
        let totalInSeconds = hoursInputElVal * 3600 + minutesInputElVal * 60;
        timeInSeconds.textContent = totalInSeconds + "s";
        timeInSeconds.classList.add("time-in-seconds");
    }
}

convertBtnEl.addEventListener('click', timeConverter);