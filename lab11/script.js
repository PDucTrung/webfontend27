//lap tu 1 - 10
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

//in ra so chan trong khoang tu 1 - 100
// for (i = 1; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i);
// }

//in ra bang cuu chuong cua 3
// for (let i = 1; i <= 10; i++) {
//   console.log("3 * " + i + " = " + i * 3);
// }

//in cac so le trong khoang 1 - 100 theo thu tu giam dan
// for (let i = 100; i > 0; i--) {
//   if (i % 2 != 0) console.log(i);
// }

// let accept = false;
// while(accept == false){
//   accept = confirm("gg")
// }
// console.log("go")

// const user = {
//   username: "user",
//   password: "123456",
// };

// let username;
// let password;

// while (username != user.username || password != user.password) {
//   username = prompt("Ten tai khoan");
//   password = prompt("mat khau");
// }
// console.log("wellcome " + user.username);

// const girls = ["xinh", "xau", "xau", "xinh", "xau"];

// for (let each of girls) {
//   if (each != "xinh") {
//     continue;
//   }

//   console.log("nhan tin");
//   console.log("choi");
//   console.log("di an");
//   break;
// }

//level1
//1
// function printNumbers(a, b) {
//   if (a < b) {
//     for (let i = a; i <= b; i++) console.log(i);
//   } else console.log("a phai nho hon b");
// }

// printNumbers(2, 5);

//2

// function printNumbers(a, b) {
//   if (a < b) {
//     for (let i = b; i >= a; i--) console.log(i);
//   } else console.log("a phai nho hon b");
// }

// printNumbers(2, 10);

//3
// function sumOfOddNumbers(a, b) {
//   let sum = 0;
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       if (i % 2 == 1) sum += i;
//     }
//     console.log(sum);
//   } else if (a > b) {
//     for (let i = a; i >= b; i--) {
//       if (i % 2 == 1) sum += i;
//     }
//     console.log(sum);
//   }
// }

// function sumOfOddNumbers(a, b) {
//   let sum = 0;
//   if (a > b) {
//     tg = a;
//     a = b;
//     b = tg;
//   }
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 1) sum += i;
//   }
//   console.log(sum);
// }

// sumOfOddNumbers(30, 1);

//4
// function divisor(number) {
//   for (let i = 0; i <= number; i++) {
//     if (number % i == 0) console.log(i);
//   }
// }

// divisor(44);

//5
// function factorial(number) {
//   let a = 1;
//   for (i = 1; i <= number; i++) a *= i;
//   console.log(a);
// }

// factorial(5);

//6
// function countFolding(thickness) {
//   let count = 0;
//   thickness *= 1000;
//   let currentThicknes = 0.1;
//   while (currentThicknes < thickness) {
//     currentThicknes *= 2;
//     count++;
//   }
//   return count;
// }

// console.log(countFolding(1));

//7
// function countYears(dad, son) {
//   let year = 0;
//   while (dad != 2 * son) {
//     dad++;
//     son++;
//     year++;
//   }
//   return year;
// }

//8
// function numOfLegs() {
//   const chick = 2;
//   const dog = 4;
//   let chicken = 1;
//   let dogs = 36 - chicken;

//   while (chicken * chick + dogs * dog != 100) {
//     chicken++;
//     dogs--;
//   }
//   console.log("so ga la", chicken);
//   console.log("so cho la", dogs);
// }

// numOfLegs();

//level 2
//1
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

// isPrime(17);

//2
function sumOfPrimes(a, b) {
  sum = 0;
  for (i = a; i <= b; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

sumOfPrimes(2, 11);

//3
function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      temp = i;
    } else {
      temp = a + b;
      a = b;
      b = temp;
    }
    console.log(temp);
  }
}

fibonacci(8);

//4
function isPalindrome(n) {
  let N = n;
  let reNum = 0;
  let temp;
  while (n > 0) {
    temp = n % 10;
    n = (n - temp) / 10;
    reNum = reNum * 10 + temp;
  }
  if (N == reNum) return true;
  else return false;
}

isPalindrome(12321);
isPalindrome(13321);

//5
function sumOfPalindrome(n) {
  sum = 0;
  for (i = 0; i <= n; i++) {
    if (isPalindrome(i)) sum += i;
  }
  return sum;
}
sumOfPalindrome(12);

//6
// function reverseNumber(n) {
//   n = n.toString();
//   return n.split("").reverse().join("");
// }
// let n = prompt(" nhap mot so nguyen duong: ");
// console.log("So dao nguoc: " + reverseNumber(n));

function reverseNumber(n) {
  let reNum = 0;
  let temp;
  while (n > 0) {
    temp = n % 10;
    n = (n - temp) / 10;
    reNum = reNum * 10 + temp;
  }
  return reNum;
}

reverseNumber(123);
