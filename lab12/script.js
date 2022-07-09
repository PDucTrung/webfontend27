// let infor = {
//   //properties
//   name: "trung",
//   age: 22,
//   hobbies: "play game",
//   phone: "0123456789",
//   "thuan an cut": 1,

//   // methods
//   speak() {
//     console.log("hello");
//   },
//   eat() {
//     console.log("cake");
//   },
// };

// infor.speak();
// console.log(infor);
// console.log(infor["thuan an cut"]);
//uu tien su dung dot natation
//dot notation => obj.key / obj.methods()

//su dung voi key la mot bien -> backet notation => obj["key"]/ obj[methods]()
//ten thuoc tinh khong gioi han nhu la ten bien => luu theo dang chuoi

// let obj = {};
// const keys = prompt("nhap key");
// const value = prompt("value");
// obj[keys] = value;

// const key = prompt("ban muon biet thong tin j ve toi");
// console.log(infor[key]);

// infor.name = "dasd";

// console.log(infor.name);

// delete infor.phone;

// console.log(infor);

// console.log("name" in infor);
// let key = "age";
// console.log(key in infor);

//duyet qua cac thuoc tinh trong doi tuong

// for (let key in infor) {
//   console.log(key);
// }

// for (let key in infor) {
//   console.log(infor[key]);
// }

// for (let key in infor) {
//   console.log(key + " : " + infor[key]);
// }

//this la doi tuong trc dau cham

// let trung = {
//   age: 13,
//   speak() {
//     console.log(this.age);
//   },
// };

// trung.speak();

// let dog = {
//   name: "bingo",
//   age: 1,
//   breed: "husky",
//   legs: 4,

//   bark() {
//     console.log(this.name + "is barking");
//   },

//   run() {
//     console.log(this.name + " go " + this.breed + " ngao");
//   },
//   gg() {
//     this.bark();
//     this.run();
//   },

//   //obj to pimitive
//   //tu dong goi khi can chuyen doi tuong ve kieu nguyen thuy
//   toString() {
//     return this.name;
//   },
//   valueOf() {
//     return this.age;
//   },
// };

// dog.gg();

// console.log(dog - 1);

// let obj = {};
// let dogg = {};
// obj[dogg] = 1;
// console.log(obj); //{ '[object Object]': 1 }

// function Book(isbn, author, title, page) {
//   this.isbn = isbn;
//   this.author = author;
//   this.title = title;
//   this.page = page;
// }

// const book1 = new Book("1", "trung", "js", 10);
// const book2 = new Book("2", "thuan", "html", 10);
// const book3 = new Book("3", "tuyen", "css", 10);

// function Dog(name, age, breed) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
// }

// Dog.prototype.bark() = function() {
//     console.log(this.name + "is barking");
// }

// Dog.prototype.eat() = function() {
//     console.log(this.name + "is eating");
// }

// let sam = new Dog("sam", 1, "husky")
// console.log(sam);
// sam.bark();
// sam.eat();

//bt
function Weapon(name, type, damage, speed) {
  this.name = name;
  this.damage = damage;
  this.type = type;
  this.speed = speed;
}

function Character(name, blood, amor, level, weapon) {
  this.name = name;
  this.blood = blood;
  this.amor = amor;
  this.level = level;
  this.weapon = weapon;
}

Character.prototype.attack = function (other) {
  const damaged = this.weapon.damage - other.amor;
  other.blood -= damaged;
};

Character.prototype.changeWeapon = function (newWeapon) {
  this.weapon = newWeapon;
};

const knife = new Weapon("dao", 200, "knife", 1.0);
const shortGun = new Weapon("short gun", 1000, "Gun", 4.0);

const trung = new Character("trung", 2000, 100, 1, shortGun);
const thuan = new Character("thuan", 2000, 100, 1, knife);

console.log(knife);
console.log(shortGun);
console.log(trung);
console.log(thuan);

// trung.changeWeapon(knife);
// thuan.changeWeapon(shortGun);

trung.attack(thuan);
console.log(thuan);
