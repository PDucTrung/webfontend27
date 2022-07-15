//https://www.w3schools.com/jsref/obj_window.asp
//localStorage(BOM) de luu tru thong tin
//document.title
//document.documentElement(html)
//document.body
//document.head

a = document.querySelector("img");
a.src =
  "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg";

a.alt = "non";

a.width = 200;

console.log(img.attributes.type);
console.log(img.dataset.type);
img.getAttribute("type");
img.setAttribute("demo");

//tao the img
const avt = document.createElement("img");

avt.src = "./avatar.png";
avt.alt = "anh dai dien";

const app = document.querySelector("#app");
app.append(avt); // chi them 1 lan duy nhat
