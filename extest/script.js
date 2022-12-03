const products = [
  {
    id: 1,
    img: "https://tfruit.vercel.app/img/pr-fr-1.png",
    name: "Red cabbage",
    price: 3.29,
    category: "Fruits",
    weight: 700,
    description:
      "Red cabbage is a nutrient-rich, cruciferous, or Brassica vegetable that's related to cauliflower and kale. It's sometimes called purple cabbage since its leaves are a dark purple-reddish color. Red cabbage typically is a little smaller and denser than green cabbage, and has a more peppery taste.",
  },
  {
    id: 2,
    name: "Pea",
    img: "https://tfruit.vercel.app/img/pr-fr-2.png",
    price: 3.99,
    category: "Vegetables",
    weight: 200,
    description:
      "A pea is a most commonly green, occasionally golden yellow, or infrequently purple pod-shaped vegetable, widely grown as a cool-season vegetable crop. The seeds may be planted as soon as the soil temperature reaches 10 °C (50 °F), with the plants growing best at temperatures of 13 to 18 °C (55 to 64 °F).",
  },
  {
    name: "Cherry",
    img: "https://tfruit.vercel.app/img/pr-fr-3.png",
    price: 2.99,
    id: 3,
    category: "Exotic",
    weight: 300,
    description:
      "The fruit is a fleshy drupe (stone fruit) that is generally heart-shaped to nearly globular, measures about 2 cm (1 inch) in diameter, and varies in colour from yellow through red to nearly black. The acid content of the sweet cherry is low.",
  },
  {
    name: "Pepper",
    img: "https://tfruit.vercel.app/img/pr-fr-4.png",
    price: 2.79,
    id: 4,
    category: "Vegetables",
    weight: 100,
    description:
      "Pepper or black pepper is the dried unripe fruit grown in the plant called piper nigrum. It's pungent smell, peppery/hot taste and health friendly properties make pepper a favorite spice all over the world and it is commonly used in all cuisines.",
  },
  {
    name: "Kiwi",
    img: "https://tfruit.vercel.app/img/pr-fr-5.png",
    price: 4.99,
    id: 5,
    category: "Exotic",
    weight: 300,
    description:
      "The ellipsoidal kiwi fruit is a true berry and has furry brownish green skin. The firm translucent green flesh has numerous edible purple-black seeds embedded around a white centre. The deciduous leaves are borne alternately on long petioles (leaf stems), and young leaves are covered with reddish hairs.",
  },
  {
    name: "Orange",
    img: "https://tfruit.vercel.app/img/pr-fr-6.png",
    price: 5.99,
    id: 6,
    category: "Fruits",
    weight: 500,
    description:
      "A globose berry with a yellowish to reddish-orange rind and a sweet edible pulp He peeled an orange. b : any of various small evergreen citrus trees (genus Citrus) with glossy ovate leaves, hard yellow wood, fragrant white flowers, and fruits that are oranges.",
  },
];

// product
const productList = document.querySelector(".products-list");

// func delete products
const deleteProdcut = (id) => {
  let index = products.findIndex((pr) => pr.id === id);
  if (confirm("Ban co chac muon xoa")) {
    products.splice(index, 1);
    productList.innerHTML = "";
    productList.innerHTML = renderProduct(products);
  }
};

// func render products
const renderProduct = (products) =>
  products
    .map(
      (pr) =>
        `
        <div class="product">
          <img src="${pr.img}" alt="">
          <div>${pr.name}</div>
          <div>${pr.category}</div>
          <div>${pr.price}</div>
          <button onclick="deleteProdcut(${pr.id})" class="delete">delete</button>
        </div>
       `
    )
    .join("");

// render procduct
productList.innerHTML = renderProduct(products);

// user
const users = [
  {
    name: "admin",
    pass: "admin",
    admin: true,
  },
  {
    name: "nam",
    pass: "nampeo",
    admin: false,
  },
  {
    name: "trung",
    pass: "trung",
    admin: false,
  },
];

const userLogin = document.querySelector(".user");

const btnLogin = document.querySelector(".login");

btnLogin.addEventListener("click", () => {
  const name = document.querySelector("input.name").value;
  const pass = document.querySelector("input.pass").value;
  const user = users.filter((user) => user.name === name && user.pass === pass);
  const isAdmin = user.filter((bool) => bool.admin === true);
  if (user.length < 1) {
    alert("tai khoan hoac mat khau sai");
  } else if (isAdmin.length > 0) {
    userLogin.style.color = "red";
    userLogin.textContent = user.map((user) => `${user.name}`);
  } else {
    userLogin.style.color = "blue";
    userLogin.textContent = user.map((user) => `${user.name}`);
  }
});
