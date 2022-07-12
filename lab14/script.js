//foreach
// forEach gọi hàm callback 1 lần với mỗi giá trị trong mảng, callback có thể nhận tối đa 3 tham số (value, index,arr)
arr = ["Sang", "Tuan", "Dat", "Thuan"];

arr.forEach(function (name) {
  console.log(name);
});

//ex call back

function func(data1) {
  console.log(data1);
}

function demo(tuyen) {
  let data = 10;
  tuyen(data);
}

demo(func);

//fine - tim mot gia tri trong mang khop voi dieu kien(duoc danh gia boi callback truyen vao)
let name1;
arr1 = ["Sang", "Tuan", "Dat", "Thuan"];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].startsWith("T")) {
    name1 = arr1[i];
    break;
  }
}
///////////////

a = arr1.find(function (name) {
  if (name.startsWith("T")) return true;
  else return false;
});

console.log(a);
///filter
result = [];
for (let index = 0; index > arr.length; index++) {
  if (arr[index].startsWith("T")) result.push(arr[index]);
}

arr.filter(function (name) {
  return name.startsWith("T");
});

//map
for (let index = 0; index < arr.length; index++) {
  result.push(arr[index].charAt(0));
}

arr.map(function (name) {
  return name.charAt(0);
});

//
arr3 = ["Sang", "Tuan", "Dat", "Thuan"];
a = arr3.map(function (name) {
  return name.length;
});

console.log(a);

//reduce
x = 10;
let arr = [5, 4, 6, 2];
arr.reduce(function (total, value) {
  total += value;
  return total;
}, x);

//sort() mang dinh sap xep theo chuoi, chi hoat dong tot neu cac gia tri trong mang deu la chuoi
//callback truyen vao sort phai tra ve 1 gia tri so nguyen(am,0,duong) cho biet gia tri nao nho hon

arr = [5, 4, 6, 2, 22];
arr.sort(function (number1, number2) {
  if (number1 < number2) return -1;
  else return 1;
});

arr = [5, 4, 6, 2, 22];
arr.sort(function (a, b) {
  return a - b;
});

cong = {
  name: "cong",
  age: 24,
  weight: 98,
};

tuan = {
  name: "tuan",
  age: 23,
  weight: 70,
};

sang = {
  name: "sang",
  age: 27,
  weight: 60,
};
dat = {
  name: "dat",
  age: 23,
  weight: 45,
};

students = [cong, tuan, sang, dat];

students.sort(function (number1, number2) {
  if (number1.weight < number2.weight) return -1;
  else return 1;
});

cong = {
  name: "cong",
  age: 24,
  weight: 98,
};

tuan = {
  name: "tuan",
  age: 23,
  weight: 70,
};

sang = {
  name: "sang",
  age: 27,
  weight: 60,
};
dat = {
  name: "dat",
  age: 23,
  weight: 45,
};

students = [cong, tuan, sang, dat];

students.sort(function (number1, number2) {
  if (number1.name < number2.name) return -1;
  else return 1;
});

console.log(students);
students.sort(function (a, b) {
  return a.name - b.name;
});

//arr.findIndex()
//reduceRight()
//arr.some()
//arr.every()
//arr.flat()
