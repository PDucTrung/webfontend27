// bai1
function usd2vnd(amount) {
  vnd = amount * 23000;
  return vnd;
}

console.log("2$ = " + usd2vnd(2) + "VND");
console.log("10$ = " + usd2vnd(10) + "VND");

// bai 2
function findArea(a, b) {
  S = a * b;
  return S;
}

console.log(
  "Diện tích hình chữ nhật có độ dành 2 cạnh (2, 3) là " + findArea(2, 3)
);
console.log(
  "Diện tích hình chữ nhật có độ dành 2 cạnh (3, 5) là " + findArea(3, 5)
);

// bai 3
function celsiusToFahrenheit(c) {
  f = c * 1.8 + 32;
  return f;
}

console.log(
  "Với c = 0 nhiệt độ tương đương ở thang nhiệt Fahrenheit là " +
    celsiusToFahrenheit(0)
);
console.log(
  "Với c = 37 nhiệt độ tương đương ở thang nhiệt Fahrenheit là " +
    celsiusToFahrenheit(37)
);
console.log(
  "Với c = 100 nhiệt độ tương đương ở thang nhiệt Fahrenheit là " +
    celsiusToFahrenheit(100)
);

// bai 4
function pow(a, b) {
  luythua = a ** b;
  return luythua;
}

console.log("Lũy thừa của 2 mũ 2 là " + pow(2, 2));
console.log("Lũy thừa của 2 mũ 3 là " + pow(3, 3));
console.log("Lũy thừa của 5 mũ 1 là " + pow(5, 1));

// bai 5
function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2; //tinh p
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - c)); // tinh s
  return S;
}

console.log(
  "Diện tích hình tam giác có độ dài 3 cạnh(10, 17, 21) la " +
    findAreaOfTriangle(10, 17, 21)
); // hien thi ket qua
