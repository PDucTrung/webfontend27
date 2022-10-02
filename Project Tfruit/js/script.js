// Page loader //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).on("load", function () {
  $(".preloader").fadeOut(2000);
});

// hide page header //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".page-header").style.top = "0";
  } else {
    document.querySelector(".page-header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

// modal1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let modal = document.getElementById("userModal");

let btn = document.getElementById("userBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// modal2 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let modal2 = document.getElementById("regModal");

let btn2 = document.getElementById("regBtn");

let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal.style.display = "none";
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// validator form ///////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  Validator({
    form: "#form-1",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [
      Validator.isRequired("#fullname", "Please enter your full name"),
      Validator.isEmail("#email"),
      Validator.minLength("#password", 6),
      Validator.isRequired("#password_confirmation"),
      Validator.isConfirmed(
        "#password_confirmation",
        function () {
          return document.querySelector("#form-1 #password").value;
        },
        "Re-enter unknown password correctly"
      ),
    ],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    },
  });

  Validator({
    form: "#form-2",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [Validator.isEmail("#email"), Validator.minLength("#password", 6)],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    },
  });
});
