$(".box-list")
  .find(".box")
  .on("click", (e) => {
    return e.target
      .closest(".box-list")
      .querySelector("img")
      .classList.toggle("active");
  });

$(".box-list")
  .find("img")
  .on("click", (e) => {
    return e.target.classList.remove("active");
  });
