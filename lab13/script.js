//Mỗi 1 loại đối tượng có sẵn trong JavaScript thì sẽ có Proprotype riêng, và thông qua prototype thì cung cấp các phương thức để làm việc với nó
// let name = "trung";

// name.slice(-5, -2);

// name.indexOf("hashd") //-1
// name.indexOf("tru") //1

let str = "hello WOrld";

function capitalize(str) {
  let trimed = str.trim();
  return trimed.slice(0, 1).toUpperCase().concat(trimed.slice(1).toLowerCase());
}

console.log(capitalize(str));

// 1. Là dãy ký tự đặt trong '', "", ``
// 2. Mỗi ký tự trong chuỗi thì được đánh thứ tự (chỉ mục - index) bắt đầu từ 0
// 3. Chuỗi là một đối tượng built-in, và có các phương thức kế thừa từ String.prototype
// 4. Chuỗi là bất biến (immutable), các phương thức của chuỗi thì không biết đổi chuỗi mà trả về 1 chuỗi mới
// 5. Thuộc tính length cho biết độ dài chuỗi

// Các chú ý khi tham khảo phương thức của bất kỳ loại đối tượng nào:
// 1. Phương thức thuộc về kiểu đổi tượng nào/sử dụng để làm gì
// 2. Các phương thức nhận tham số gì/trả về kết quả là gì
// 3. Các phương thức có biến đổi trực tiếp giá trị (đối tương) hay không

// month() sử dụng giá trị tháng 0 - 11

// Các lưu ý về Datetime:
// 1. Các giá trị khi được tạo/thay đổi thì tự động điều chỉnh (adjust) nếu như giá trị không phù hợp/vượt quá phạm vi
// 2. Giá trị tháng thì trong khoảng 0 - 11, khi thao tác phải tăng/giảm 1 tháng
// 3. Một số phương thức Date.now()/getTime() => trả về số miliseconds đã trôi qua tính từ thời điểm UNIX Time

//thuoc tinh length trong mang co the thay doi dc

// typeof Array = object
// length cập nhật theo số phần tử trong mảng; length = 0 ==> xóa sạch phẩn tử trong mảng

let names = ["thuan", "an", "cut", "cho"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of "trung") {
  console.log(name);
}

//basic array ( ve nha lam 6 bai dau tien)
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
