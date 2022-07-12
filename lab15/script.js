//xu ly so
//bai1
function vHinhCau(r) {
  let pi = 3.14;
  return (4 / 3) * pi * r ** 3;
}

console.log(vHinhCau(5));

//bai2
function sumInt(a, b) {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumInt(3, 8));

//bai3
function sumUoc(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) sum += i;
  }
  return sum;
}

console.log(sumUoc(8));

//bai4
function soNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(soNguyenTo(11));

//bai5
function sumSoNguyenTo(n) {
  let sum = 0;
  for (i = 0; i < n; i++) {
    if (soNguyenTo(i)) sum += i;
  }
  return sum;
}

console.log(sumSoNguyenTo(8));

//xu ly chuoi
//bai1
let a = "HELLO world";
function stringLowerCase(str) {
  let string = str.trim().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i]
      .slice(0, 1)
      .toUpperCase()
      .concat(string[i].slice(1).toLowerCase());
  }
  return string.join(" ");
}
console.log(stringLowerCase(a));

//bai2
a = "HELLO world";
function bai2(str) {
  let string = str.trim().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].toLowerCase();
  }
  return string.join("-");
}

console.log(bai2(a));

//bai3
function bai4(str) {
  let a = str.trim().split(" ").join("").toLowerCase();
  if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
  else return false;
}
console.log(bai4(" ba aB "));

//bai4
a = "HELLO world hey";
b = "hey";
function abc(str1, str2) {
  let string1 = str1.toLowerCase().split("");
  let string2 = str2.toLowerCase().split("");
  change = 0;
  for (i = 0; i < string2.length; i++) {
    for (j = 0; j < string1.length; j++) {
      if (string2[i] == string1[j]) {
        string1.splice(i, 1);
        change += 1;
        break;
      }
    }
  }
  if (change == string2.length) return true;
  else return false;
}
console.log(abc(a, b));

//
//Bai1
arr = [1, 2, false, null, undefined, NaN, 0, "", 3, 4];
function check(arr) {
  return arr.filter(Boolean);
}

console.log(check(arr));

//bai2

arr = ["aba", "aa", "ad", "c", "vcd"];
function length(arr) {
  a = [];
  let tg = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > tg) {
      tg = arr[i].length;
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length == tg) a.push(arr[i]);
  }
  return a;
}

console.log(length(arr));

//bai3
function difference(arr1, arr2) {
  return arr1
    .filter(function (x) {
      return !arr2.includes(x);
    })
    .concat(
      arr2.filter(function (x) {
        return !arr1.includes(x);
      })
    );
}

console.log(difference([1, 2, 3], [1, 3, 4, 5, 5]));

//bai4
function bai4(m, n) {
  let result = new Array();
  num = 1;
  for (i = 0; i < n; i++) {
    result[i] = [];
    if (i % 2 == 0)
      for (j = 0; j < m; j++) {
        result[i][j] = num;
        num++;
      }
    else
      for (j = m - 1; j >= 0; j--) {
        result[i][j] = num;
        num++;
      }
  }
  console.log(result);
}
bai4(4, 3);

//object
//bai1
arr = [
  { name: "Huy", age: 20 },
  { name: "tuyen", age: 40 },
  { name: "Trung", age: 20 },
  { name: "thuan", age: 10 },
];
function bai1(arr) {
  return arr.reduce(function (a, c) {
    return a + c.age;
  }, 0);
}
console.log(bai1(arr));

//bai2
arr = [
  { name: "Huy", age: 20 },
  { name: "tuyen", age: 40 },
  { name: "an", age: 20 },
  { name: "Zed", age: 10 },
];

function bai2(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
console.log(bai2(arr));

//3
arr = [
  { name: "Huy", age: 20 },
  { name: "tuyen", age: 40 },
  { name: "an", age: 20 },
  { name: "zed", age: 10 },
];
function bai3(arr) {
  return arr.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else return 1;
  });
}
console.log(bai3(arr));

//4
arr = [
  { name: "Huy", age: 20 },
  { name: "tuyen", age: 40 },
  { name: "an", age: 20 },
  { name: "Zed", age: 10 },
];

function bai4(arr) {
  return arr.filter(function (a) {
    return a.name.startsWith("H") || a.name.startsWith("h");
  });
}
console.log(bai4(arr));

//baitonghop
//bai2
function sapXep(x, y, h) {
  if (x < y) console.log("khong bo len dc dau");
  else return "Số ngày để bò lên là " + h / (x - y);
}

console.log(sapXep(3, 2, 10));

//bai3
