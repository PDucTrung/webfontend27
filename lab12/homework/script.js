//basic
let dog = {
  name: "yi",
  age: 2,
  bread: "husky",
  gender: "male",
  color: "yellow",
  legs: 4,
  "favorite food": "cake",
  eat() {
    console.log(
      this.name + " is eating " + this["favorite food"] + " , yum yum..."
    );
  },
  run() {
    console.log(this.name + " is running on " + this.legs + " ...");
  },
  bark() {
    console.log("Woof woof woof ...");
  },
};

console.log(dog);

console.log(dog.name);

console.log(dog["favorite food"]);

dog.age += 2;
console.log(dog.age);

dog.eat();

dog.run();

for (let key in dog) {
  console.log(key);
}

for (let key in dog) {
  console.log(dog[key]);
}

dog.isCrazy = true;
console.log(dog.isCrazy);

dog.crazy = function () {
  if (dog.isCrazy == false) {
    console.log(this.name + " is not crazy");
  } else {
    for (let i = 0; i <= 5; i++) {
      dog.eat();
      dog.bark();
    }
  }
};

dog.isCrazy = !dog.isCrazy;
console.log(dog.isCrazy);

dog.crazy();

delete dog.isCrazy;
dog.crazy();

for (let key in dog) {
  console.log(key + " : " + typeof dog[key]);
}

let clone = dog;

clone.name = "vang";
console.log(clone);
console.log("day la dog");
console.log(dog);

//console.log(dog) sau khi clone name cua clone thi gia tri name cua dog se thay doi ?

let copy = {};

for (let key in dog) {
  copy.key = dog.key;
  copy[key] = dog[key];
}

copy.name = "thuan";
console.log(copy);
console.log(dog);

//Intermediat
//1
const guess_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  for (let key in guess_list) {
    if (name != key) {
      console.log("Hi! I'm a guess.");
    } else {
      console.log(
        "Hi, I'm " + this.name + " , and I'm from " + guess_list[key] + "!"
      );
      break;
    }
  }
}

greeting("Wendy");

//2
function afterNYears(family, years) {
  for (let key in family) {
    console.log(key + " : " + (family[key] + years));
  }
}

const family = {
  zed: 28,
  syndra: 27,
};

afterNYears(family, 2);

//3
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function calcNameScore(name) {
  let score = 0;
  for (i = 0; i < name.length; i++) {
    for (let key in scores) {
      if (name[i] == key) score += scores[key];
    }
  }
  if (score <= 60) console.log("NOT TOO GOOD");
  else if (score <= 300) console.log("PRETTY GOOD");
  else if (score <= 600) console.log("VERY GOOD");
  else console.log("THE BEST");
}

calcNameScore("TRUNG");

//4

function invert(object) {
  const result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }

  return result;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(invert(obj));

//
const items = {
  tv: 300,
  ipad: 1000,
};

function totalAmount(items) {
  let total = 0;
  for (let key in items) {
    total += items[key];
  }
  console.log(total);
}

totalAmount(items);

//6
const items2 = {
  "Gucci Fur": 3000,
  Icecream: 4,
  "Dolce Gabana Heels": 4000,
  Humbergur: 10,
};

function expensiveItems(items) {
  const result = {};
  for (let key in items) {
    if (items[key] >= 1000) result[key] = items[key];
  }
  return result;
}

console.log(expensiveItems(items2));
