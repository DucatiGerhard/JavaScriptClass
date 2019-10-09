const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPostition = (hr * 360 / 12) + (min * 360 / 60 / 12);
    let minPosition = (min * 360 / 60) + (sec * 360 / 60 / 60);
    let secPosition = sec * 360 / 60;

function runTheClock() {
    
    secPosition = secPosition + 6;
    minPosition = minPosition + 1 / 10;
    hrPostition = hrPostition + 1 / 120;

    HOURHAND.style.transform = "rotate(" + hrPostition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    // console.log("Hours: " + hr + " Minutes: " + min + " Sec: " + sec);
}

var interval = setInterval(runTheClock, 1000);
