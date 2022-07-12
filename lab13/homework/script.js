//string - basic
//1
let str = " hello WOrld ";

function capitalize(str) {
  let trimed = str.trim();
  return trimed.slice(0, 1).toUpperCase().concat(trimed.slice(1).toLowerCase());
}

console.log(capitalize(str));

//2

let str1 = " hello world t23 ";

function title(str) {
  let string = str.trim().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i]
      .slice(0, 1)
      .toUpperCase()
      .concat(string[i].slice(1).toLowerCase());
  }
  return string.join(" ");
}

console.log(title(str1));

//3

let email = "baga@gmail.com";

function protectEmail(email) {
  let string = email.trim().split("@");
  string[0] = string[0].replace(string[0].slice(2), "...");
  return string.join("@");
}

console.log(protectEmail(email));

//4
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello ba ga"));

//5
function countVowel(str) {
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("truog"));

//6
let str2 = "thuan ga hoi non";

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords(str2));

//7
function randomHex() {
  let hex = "#";
  for (let i = 0; i < 6; ++i) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}

console.log(randomHex());

//8
function parameterize(str) {
  return str.trim().split(" ").join("-");
}

console.log(parameterize(" thuan hoi non "));

//9
function isPalindrome(str) {
  let a = str.trim().split(" ").join("").toLowerCase();
  if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
  else return false;
}
console.log(isPalindrome(" ba aB "));
console.log(isPalindrome(" ba ga "));
//Intermediate - string
//1
str8 = "Hello Worldo";
function mostCommonCharacter(str) {
  const d = {};
  const result = {};
  str = str.trim().toLowerCase().split(" ").join("");
  arr = str.trim().toLowerCase().split("");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tg = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tg;
      }
    }
  }
  str = arr.join("");
  for (let i = 0; i < str.length; i++) {
    sub = str[i];
    count = str.split(sub).length - 1;
    d[str[i]] = count;
    max = count;
  }
  for (let key in d) {
    if (d[key] > max) max = d[key];
  }
  for (let key in d) {
    if (d[key] == max) result[key] = d[key];
  }
  return result;
}
console.log(mostCommonCharacter(str8));

//2
const students = [
  { name: "Hoàng Thị Ngọc Linh", point: 0 },
  { name: "Bùi Lan Nhi", point: 0 },
  { name: "Nguyễn Ba", point: 10 },
];

// let a = students[0].name.split(" ");
// console.log(((students[0].name.split(" "))[(students[0].name.split(" ")).length - 1]));

function sortByName(students) {
  for (let i = 0; i < students.length; i++) {
    let idmin = i;
    for (let j = i + 1; j < students.length; j++) {
      if (
        students[j].name.split(" ")[students[j].name.split(" ").length - 1] <
        students[idmin].name.split(" ")[
          students[idmin].name.split(" ").length - 1
        ]
      )
        idmin = j;
    }
    let tg = students[0];
    students[0] = students[i];
    students[i] = tg;
  }
  return students;
}

console.log(sortByName(students));

//basic array

let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

console.log(arr);

console.log(arr.length);

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[arr.length - 1]);

console.log(arr[-1]);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

arr.push("Ba");

arr[arr.length] = "Thảo";

arr.unshift("Béo ú");

arr.pop();

arr.shift();

arr.slice(0, 2);

arr.slice(0);

arr.slice(arr1.length - 3); //lay 3 phan tu cuoi

arr.splice(1, 2); // xoa phan tu thu 2,3

arr.splice(1, 0, "Nhi", "Hùng"); // 1-start, 0 - so phan tu muon xoa

console.log(arr.indexOf("Ba"));

console.log(arr.indexOf("Thảo"));

console.log(arr.includes("Mai Anh"));

console.log(arr.toString());

arr.join("-");

arr.reverse();

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

arr.splice();

//intermediate
//1
function max(arr) {
  let gg = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (gg < arr[i]) gg = arr[i];
  }
  return gg;
}

console.log(max([1, 5, 3, 4, 2]));

//2
let arr = [1, 5, 3, 4, 2];

function minMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

console.log(minMax(arr));

//3
function avg(arr) {
  count = 0;
  for (i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count / arr.length;
}

console.log(avg([1, 5, 3, 4, 2]));

arr = [1, 5, 3, 4, 2];
function avg() {
  let total = arr.reduce(function (sum, number) {
    sum += number;
    return sum;
  });
  return total / arr.length;
}

console.log(avg([1, 5, 3, 4, 2]));
//4
let a = [1, 5, 3, 4, 2];

function swap(arr, x, y) {
  let tg;
  tg = arr[x];
  arr[x] = arr[y];
  arr[y] = tg;
  return arr;
}

swap(a, 0, 2);

console.log(a);

//5
function secondLargest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 2];
}

console.log(secondLargest([4, 5, 5, 4, 2]));

//6
function mix(arr1, arr2) {
  let concat = [];
  let a;
  if (arr1.length < arr2.length) arr1.length = arr2.length;
  for (i = 0; i < arr1.length; i++) concat.push(arr1[i], arr2[i]);
  concat = concat.filter(Boolean);
  return concat;
}

console.log(mix([1, 2, 3], [4, 5, 6]));

//7
const arr = [10, 12, 15];
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log(shuffle(arr));

///
function swap(arr, x, y) {
  let tg;
  tg = arr[x];
  arr[x] = arr[y];
  arr[y] = tg;
  return arr;
}

arr = [10, 12, 15];
function shuffle(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const randomindex =
      Math.floor(Math.random() * (arr.length - i - 2)) + i + 1;
    swap(arr, i, randomindex);
  }
  return arr;
}

console.log(shuffle(arr));

//8
function intersection(arr1, arr2) {
  a = [];
  let tg;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        a.push(arr1[i]);
      }
    }
  }
  return a;
}

console.log(intersection([1, 2, 3], [3, 2, 5]));

//9
function difference(arr1, arr2) {
  a = [];
  let tg;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j]) {
        a.push(arr1[i]);
      }
    }
  }
  return a.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
}

console.log(difference([2, 2, 3], [3, 2, 5]));

//10
function removeDuplicate(arr) {
  return arr.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
}

console.log(removeDuplicate([1, 2, 3, 4, 5, 4, 3, 4, 1]));

//1
const arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}
console.log(filterRange(arr, 1, 4));

//2
const users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function getNames(users) {
  let names = users.map(function (item) {
    return item.name;
  });
  console.log(names);
}

getNames(users);
//3
users = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];

function mapFullname(users) {
  return users.map(function (user) {
    return { fullName: user.name + " " + user.surname, id: user.id };
  });
}
console.log(mapFullname(users));
//4
users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function greaterThan(users, age) {
  return users.filter(function (user) {
    return user.age >= age;
  });
}

console.log(greaterThan(users, 29));
//5
users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function avgAge(users) {
  return Math.ceil(
    users.reduce(function (prev, user) {
      return (prev += user.age);
    }, 0) / users.length
  );
}
console.log(avgAge(users));

//6
users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function sortUsersByAge(users) {
  return users.sort(function (a, b) {
    return b.age - a.age;
  });
}

console.log(sortUsersByAge(users));
//date
//1

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function curDate() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  month = checkTime(month);
  day = checkTime(day);

  console.log(day + "/" + month + "/" + year);
}

curDate();

//2
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function curTime() {
  let t = new Date();
  let h = t.getHours() + 1;
  let m = t.getMinutes() + 1;
  let s = t.getSeconds() + 1;

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  console.log(h + " : " + m + " : " + s);
}

curTime();

//3
function weekday() {
  let d = new Date();
  const dayname = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  let dayofweek = d.getDay();
  console.log(d.toString());
  console.log("Hôm nay là " + dayname[dayofweek]);
}

weekday();

//4
function getDateAgo(x) {
  const dateCur = new Date();
  const nextDay = new Date();
  nextDay.setDate(dateCur.getDate() - x);
  var date =
    ("0" + nextDay.getDate()).slice(-2) +
    "/" +
    ("0" + (nextDay.getMonth() + 1)).slice(-2) +
    "/" +
    nextDay.getFullYear();
  console.log(date);
}
getDateAgo(10);

//5
function getLastDayOfMonth(year, month) {
  return (
    "Tháng " + month + " có " + new Date(year, month, 0).getDate() + " ngày"
  );
}

console.log(getLastDayOfMonth(2022, 2));

//6
function getDaysToNextBirthday(year, month, date) {
  const today = new Date();
  if (today.getMonth() > month)
    birthday = new Date(today.getFullYear() + 1, month, date + 1);
  else var birthday = new Date(today.getFullYear(), month, date + 1);
  for (i = 1; i <= 365; i++) {
    today.setDate(today.getDate() + i);
    if (today.getDate() == date && today.getMonth() == month) return i;
  }
}

console.log(getDaysToNextBirthday(2000, 3, 25));
//7
function humanize(date) {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 5) return "just now";
  else if (diff < 60) return `${diff} seconds ago`;
  else if (diff < 3600) return `${Math.floor(diff / 60)} minutes`;
  else if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  else if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  else if (diff < 946080000) return `${Math.floor(diff / 2592000)} months ago`;
  else return `long time ago`;
}
const now = new Date();
console.log(humanize(now));

now.setSeconds(now.getSeconds() - 3);
console.log(humanize(now));

now.setSeconds(now.getSeconds() - 40);
console.log(humanize(now));

now.setSeconds(now.getMinutes() - 10);
console.log(humanize(now));
