//Destructuring
//Khi destructure arrays, thứ tự mà các biến được khai báo là rất quan trọng.
//phan ra nhanh cac gia tri ben trong 1 collection (array,object) thanh bien rieng biet

//Destructuring array
//befor
const vehicles = ["mustang", "f-150", "expedition"];

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//es6
const vehicless = ["mustang", "f-150", "expedition"];

const [cars, trucks, suvs] = vehicles;

//
const arr = [1, 2, 3, 4, 5];
//phan tach array su dung cu phap []
const [a, b] = arr; // gan 2 phan tu o vi tri index 0,1 cho a va b
const [c, , d] = arr; //giua

//phan tach object su dung cu phap {}
var obj = {
  name: "bar",
  age: 30,
  job: "Teacher",
  x: { y: 1 },
};

const { name, age } = obj;

//phan tach object trong khai bao ham
const getNames = ({ name }) => name;

getNames = ({ name, x: { y } }) => y;

//chu y su dung dung ten thuoc tinh, neu thuoc tinh khong ton tai thi gia tri la undefined

//Destructuring object
// Lưu ý rằng các thuộc tính đối tượng không phải được khai báo theo một thứ tự cụ thể.
//befor
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message =
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    ".";
}

//es6
const vehicleOnes = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle(vehicleOne);

function myVehicle({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
}

//Spread operator
//ES6 cung cấp một toán tử mới gọi là spread operator bao gồm ba dấu chấm (...).
//Spread operator cho phép bạn trải ra các phần tử của một đối tượng có thể lặp lại, chẳng hạn như một array, map hoặc set.
//cho phep tach roi cac gia tri trog 1 collection ra thanh cac gia tri rieng biet
//thuong su dung de sao chep nhanh mot mang, object, hoac la tach cac gia tri trong collection thanh cac tham so rieng biet khi tuyen vao ham

arr = [1, 2, 3, 4, 5];
const clone = arr.slice();
//befor
var arr_1 = [1, 2, 3];
var arr_2 = [4, 5, 6];

arr_3 = arr_1.concat(arr_2);
console.log(arr_3); //  [1, 2, 3, 4, 5, 6]

//es6
const arr_1 = [1, 3, 5];
const arr_2 = [2, 4, 6, ...odd];
console.log(arr_2); // [ 2, 4, 6, 1, 3, 5 ]
//Trong ví dụ này, ba dấu chấm (...) nằm ở phía trước mảng odd là toán tử spread. Toán tử giải nén các phần tử của mảng odd.
//Sử dụng spread operator với array
//noi mang
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

//copy mang
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

clone = [...arr_1];

clone = [...arr_1, ...arr_2];

//object
var obj = { name: "ES6" };
// cloned = obj.assign({}, obj);

//su dung cu phap {} cho object
var cloned = { ...obj };
console.log(cloned);
// { name: 'ES6' }

//Spread operator được biểu thị bằng ba dấu châm (...)
//Spread operator giải nén các phần tử của các đối tượng có thể lặp như mảng, object và map vào một danh sách.
//Tuy nhiên, nó gói các đối số còn lại của hàm vào một mảng.
//Spread operator có thể được sử dụng copy array, object hoặc hợp nhất array, object thành một

const sum = (a, b) => a + b;

arr = [1, 2];
sum(...arr); //sum(1,2);

//defauft Parameter
//ES6 cho phép các tham số hàm có giá trị mặc định.
//xac dinh cac gia tri mac dinh cho tham so neu nhu k co gia tri doi so truyen vao

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15

function hello(name = "trung", age = 22, job = "student") {
  // name = name || "Strange"; //es5
  console.log(`hello ${name} ${age} ${job}`);
}

hello("thuan");

//Rest parameters
//de luu tru cac gia tri khong xac dinh dc truyen vao ham
//rest parameter (...) cho phép một hàm coi một số lượng đối số không xác định là một mảng:

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

sum = function (a, b) {
  //arguments - chua tat ca cac doi so truyen vao ham ( bao gom ca a va b)
  let total = a + b;

  for (let i = 2; i < arguments.length; i++) total += arguments[i];
  return total;
};

sum = (a, b, ...others) => {
  let total = a + b;

  for (let value of others) total += value;
  return total;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sum(...arr));

obj = {
  name: "Ba",

  children: [
    {
      name: "Non",
    },
  ],
};

obj.children?.name; // kiem tra xem co thuoc tinh child hay k

//https://javascript.info/classes
