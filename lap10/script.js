// isRain = false;
// if (isRain) {
//   console.log("mua");
// } else {
//   console.log("khong mua");
// }

// gg = true;
// if (gg) {
//   console.log("non");
// } else {
//   console.log("khong non");
// }

// confirm("co xoa hay khong");

// let input = prompt("non", 0);
//1. neu nguoi dung bam cancel=>null
//2. ket qua tra ve khi nguoi dung nhap gia tri => string
//if else thuc hien 1 trong 2 doan ma
// thuc thi doan ma trong if ney dieu kien dung, neu khong dung thi khong lam j ca

// input = prompt("nhap chuoi", 0);
// if (input % 2 == 0) {
//   console.log(input + " la so chan");
// } else {
//   console.log(input + " la so chan");
// }

//Khi kiem tra dieu kien no lien quan den nhau ==> kiem tra dieu kien nho nhat(kieu/ tap gia tri nho nhat)
//ket hop cac dieu kien cho cau truc gon gang/toi uu
// neu condition la bieu thuc => tinh toan teuoc => gan vao bien => de doc

//lever 1
//1
function isOddNumber(number) {
  if (number % 2 != 0) return true;
  else return false;
}
console.log(isOddNumber(3));

//2
function maxOfTwo(a, b) {
  if (a > b) return a;
  else return b;
}

console.log("So lon hon la " + maxOfTwo(2, 3));

//3
function divisibleByThreeAndFive(number) {
  if (number % 3 == 0 && number % 5 == 0) return true;
  else return false;
}

console.log(divisibleByThreeAndFive(45));

//4
function season(month) {
  let Winter = [12, 1, 2],
    Spring = [3, 4, 5],
    Summer = [6, 7, 8],
    Fall = [9, 10, 11];
  for (i = 0; i < 3; i++) if (Winter[i] == month) return "winter";
  for (i = 0; i < 3; i++) if (Spring[i] == month) return "spring";
  for (i = 0; i < 3; i++) if (Summer[i] == month) return "summer";
  for (i = 0; i < 3; i++) if (Fall[i] == month) return "fall";
}

console.log(season(10));

//5
function trafficLight(light) {
  if (light == "Green") return "Duoc phep di chuyen";
  else if (light == "Yellow") return "Giam toc do va dung lai";
  else if (light == "Red") return "Dung lai";
}

console.log(trafficLight("Green"));

//6
function calcCommissions(totalSales) {
  if (totalSales <= 100000) return totalSales * 0.05;
  else if (totalSales <= 300000) return totalSales * 0.1;
  else return totalSales * 0.2;
}

console.log(calcCommissions(500000));

//level 2
//1
function isLeafYear(year) {
  if (year % 400 == 0) return true;
  else if (year % 4 == 0 && year % 100 != 0) return true;
  else return false;
}

console.log(isLeafYear(360));

//2
function daysOfMonth(month, year) {
  let month31Day = [1, 3, 5, 7, 8, 10, 12],
    month30Day = [4, 6, 9, 11];
  for (i = 0; i < 7; i++) if (month30Day[i] == month) return "31 ngay";
  for (i = 0; i < 4; i++) if (month31Day[i] == month) return "30 ngay";
  if (month == 2) {
    if (isLeafYear(year)) return "29 ngay";
    else return "28 ngay";
  }
}

console.log(daysOfMonth(2, 402));

//3
function calcGrade(point) {
  if (point >= 4.0) {
    if (point >= 5.5) {
      if (point >= 7.0) {
        if (point >= 8.5) return "Xe loai A";
        return "Xe loai B";
      }
      return "Xe loai C";
    }
    return "Xe loai D";
  } else return "Xe loai E";
}

console.log(calcGrade(5));

//4
function calcTaxiFee(km) {
  if (km <= 30) return km * 11000 + 10000;
  else return 30 * 11000 + (km - 30) * 9500 + 10000;
}

console.log("So tien can tra la " + calcTaxiFee(32));

//5
function maxOfThree(a, b, c) {
  let max = c;
  if (a > max) max = a;
  if (b > max) max = b;
  return max;
}

console.log("So lon nhat la " + maxOfThree(5, 6, 5));

//6
function solveEquation(a, b, c) {
  if (a == 0) {
    if (b == 0) {
      if (c == 0) return Infinity;
      return null;
    }
    return -c / b;
  } else {
    delta = b ** 2 - 4 * a * c;
    if (delta < 0) return null;
    else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return "[x1,x2] = " + [x1, x2];
    }
  }
}

console.log("phuong trinh co nghiem la " + solveEquation(0, 0, 0));
console.log("phuong trinh co nghiem la " + solveEquation(0, 0, 1));
console.log("phuong trinh co nghiem la " + solveEquation(0, 1, 1));
console.log("phuong trinh co nghiem la " + solveEquation(2, 2, 2));
console.log("phuong trinh co nghiem la " + solveEquation(4, -2, -6));

// switch (value) {
//   case case1:
//     break;
//   case case2:
//   case case3:
//     break;
//   default:
//     break;
// }

// function daysOfMonth(month, year) {
//   switch (month) {
//     case 2:
//       if (isLeafYear(year)) return 29;
//       else return 28;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     default:
//       return 31;
//   }
// }
