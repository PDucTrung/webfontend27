// alert("hello Trung");
// alert de hien thi mot thong bao tren trinh duyet
// alert(message)

console.log("heloooooooooooooo!");
// de hien thi mot thong bao , gia tri, ket qua ra tab console
// console.log(data)

console.log("xin chaooooo");

// var, let, const de khai bao bien ( lt va const chi khai bao 1 lan)
// cu phap: keyword variableName = value;
// khai bao bien kem voi gia tri
let myName = "Trung";
let myAge = 22;
let myJob = "student";

//khai bao bien khong kem gia tri
let myPhoneNumber;

//bien giong nhu mot cai hop cho phep chua cac gia tri ben trong
myPhoneNumber = "0123456";

// thay doi du lieu cau bien
myJob = "Developer";

// try cap gia tri cua bien
console.log(myPhoneNumber, myAge, myJob);
console.log(myName);
console.log(myJob);
console.log(myAge);

// hang so const chi su dung cho nhung gia tri duoc xac dinh tu dau va gia tri do khong bao h thay doi

let myFirstName = "trung";
const MY_BIRTHDAY = "2000/07/11";

//var let = 10 ( trh dac biet van dat ten dung) nhung let var = 10 (k dc)

// so - su dung ky tu so de bieu dien gia tri
let todayLuckyNumber = 68;
let myHeight = 1.6;

let myFullName = "dad";
//chuoi - cho phep su dung ky tu bat ky
// dat ben trong "" ,''

// logic (Boolean) - chi co 2 hang so true/false
let amI = true; //1
let gg = false; //0

// undefined - dai dien cho mot gia tri chua duoc xac dinh
let something; // undefined

//null - dai dien cho 1 bien khong co gia tri
let abc = null;

// object, function - kieu phuc hop
// cho phep luu tru nhieu gia tri trong mot bien duy nhat
// mot gia tri(value) anh xa voi 1 khoa(key/property)
// Trung 22 student playgame
let trung = {
  name: "trung",
  age: 22,
  job: "student",
  hobbies: "play game",
  isRick: false,
};

// in ra toan bo gia tri
console.log(trung);

// cu phap de truy cap tung gia tri don le
// object.key

console.log(trung.name);
console.log(console);

//typeof kiem tra kieu
//ket qua la mot chuoi dai dien cho kieu du lieu
console.log(typeof trung);
console.log(typeof abc);
console.log(typeof something);
console.log(typeof myAge);
console.log(typeof myFirstName);
console.log(typeof myFullName);
console.log(typeof myJob);
console.log(typeof todayLuckyNumber);

//function la cach de cau truc ma ( goi ma vao trong 1 block/khoi ma)
// giup mk tai su dung duoc
// function la 1 chuong trinh
// cu phap function fuctionName(){}
//input cua ham duoc khai bao ben trong () paramenter
function greeting(name) {
  // su dung cu phap noi chuoi
  console.log("chao mung " + name + " den voi trang web");

  // su dung , de cho phep in hang loat
  console.log("ham nhan vao tham so name co gia tri", name);
}

// goi han function
// truyen input vao cho ham - arguments
//input truyen vao theo thu tu tuong ung trong khai bao
greeting("trung"); //name = "trung"
greeting("tuyen"); //name = "tuyen"

// 1 - thuc hien tac vu/ cong viec nao do

function add(a, b) {
  let result = a + b;

  // su dung cau lenh return de tra lai ket qua cho vi tri goi ham
  return result;
}

const result = add(1, 2);
console.log("ket qua phep tinh 1 + 2 = " + result);

function sub(a, b) {
  let ketqua1 = a - b;
  return ketqua1;
}
console.log("ket qua phep tinh 3 - 1 = " + sub(3, 1));

function sub(a, b) {
  let ketqua2 = a / b;
  return ketqua2;
}
console.log("ket qua phep tinh 6 / 2  = " + sub(6, 2));

function sub(a, b) {
  let ketqua3 = a * b;
  return ketqua3;
}
console.log("ket qua phep tinh 3 * 2 = " + sub(3, 2));

// voi toan tu +
// neu co 1 toan hang la chuoi thi se chuyen toan hang con lai thanh chuoi => phep noi chuoi 
//con cac truong hop khac chuyen ve so va cho ve phep cong so => cong so
// voi tat ca cac toan tu khac - * / % ** chuyen ve so => tinh toan so

//NaN neu la cong chuoi thi tra ve chuoi => chuoi
// => neu la cac phep tinh khac => NaN
// username = username || "stranger" dung khi ham rong bien - greeting ()