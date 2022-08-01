//es6
//1
const isOddNumber = (number) => (number % 2 != 0 ? true : false);
console.log(isOddNumber(3));
//2
const maxOfTwo = (a, b) => (a > b ? a : b);
//3
const divisibleByThreeAndFive = (number) =>
  number % 3 == 0 && number % 5 == 0 ? true : false;
//4
const season = (month) => {
  let Winter = [12, 1, 2],
    Spring = [3, 4, 5],
    Summer = [6, 7, 8],
    Fall = [9, 10, 11];
  for (i = 0; i < 3; i++) if (Winter[i] == month) return "winter";
  for (i = 0; i < 3; i++) if (Spring[i] == month) return "spring";
  for (i = 0; i < 3; i++) if (Summer[i] == month) return "summer";
  for (i = 0; i < 3; i++) if (Fall[i] == month) return "fall";
};

// const hello = () => {
//   console.log(this); //window
// };

//1
const arr = [5, 3, 8, 1];
const filterRange = (arr, a, b) => arr.filter((item) => a <= item && item <= b);
console.log(filterRange(arr, 1, 4));

//2
const users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

const getNames = (users) => users.map((item) => item.name);

console.log(getNames(users));

//ternary operato - ?
//dang rut gon cua if else,su dung de gan gia tri cho mot bien theo dieu kien nhat dinh

let isValid = condition ? true : false;

// cu phap tong quat keyword variablename = condition ? value_if_condition_is_true : value_if_condition_is_false

const graduate = (point) =>
  point < 4
    ? "F"
    : point < 5.5
    ? "D"
    : point < 7
    ? "C"
    : point < 8.5
    ? "B"
    : "A";

console.log(graduate(4));
//toan tu 3 ngoi la 1 bieu thuc, nen co the su dung trong template string
let age = 18;
let msg = `{age >= 18 ? "Elegible" : "Not Elegible"} for...`;

//tim hieu tiep va cac cu phap moi hon
//Destructuring

//Spread operator

//defauft Parameter

//Rest parameters

//thuc hanh dom(may tinh, quiz) va es6
//js project
