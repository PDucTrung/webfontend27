// Page loader
$(window).on("load", function () {
  $(".preloader").fadeOut(2000);
});

// hide page header
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".page-header").style.top = "0";
  } else {
    document.querySelector(".page-header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

//AOS
AOS.init();
