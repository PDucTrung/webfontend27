// countdown
var countDownDate = new Date("Sep 1 2022 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".number-del1").innerHTML = days;

  document.querySelector(".number-del2").innerHTML = hours;

  document.querySelector(".number-del3").innerHTML = minutes;

  document.querySelector(".number-del4").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".number-del1").innerHTML = "00";

    document.querySelector(".number-del2").innerHTML = "00";

    document.querySelector(".number-del3").innerHTML = "00";

    document.querySelector(".number-del4").innerHTML = "00";
  }
}, 1000);

////
