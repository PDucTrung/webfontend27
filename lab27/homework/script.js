// countdown
var countDownDate = new Date("Nov 8, 2022 5:32:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.querySelector(".number-del1").innerHTML = days;

  document.querySelector(".number-del2").innerHTML = hours;

  document.querySelector(".number-del3").innerHTML = minutes;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".number-del1").innerHTML = "Ba ga";

    document.querySelector(".number-del2").innerHTML = "Ba ga";

    document.querySelector(".number-del3").innerHTML = "Ba ga";
  }
}, 1000);

////
