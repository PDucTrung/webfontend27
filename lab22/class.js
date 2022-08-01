// Static properties and methods
// Chúng ta cũng có thể gán một phương thức cho toàn bộ lớp. Các phương pháp như vậy được gọi là phương thức.

// Trong một khai báo lớp, chúng được thêm vào trước bởi từ khóa, như thế này:static

class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true


// Điều đó thực sự làm giống như việc gán nó làm tài sản trực tiếp:
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true

// Giá trị của trong cuộc gọi là chính hàm xây dựng lớp (quy tắc "đối tượng trước dấu chấm").thisUser.staticMethod()User

// Thông thường, các phương thức tĩnh được sử dụng để thực hiện các hàm thuộc về toàn bộ lớp, nhưng không thuộc về bất kỳ đối tượng cụ thể nào của nó.

// Các phương thức tĩnh không có sẵn cho các đối tượng riêng lẻ
// Các phương thức tĩnh có thể gọi trên các lớp, không phải trên các đối tượng riêng lẻ.
// Ví dụ:

// ...
article.createTodays(); /// Error: article.createTodays is not a function

// Kế thừa các thuộc tính và phương thức
// Các thuộc tính và phương thức được kế thừa.

// Ví dụ: trong đoạn mã dưới đây được kế thừa có thể truy cập được như :Animal.compare, Animal.planet, Rabbit.compare, Rabbit.planet

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// kế thừa từ Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth
// Bây giờ khi chúng ta gọi , người thừa kế sẽ được gọi.Rabbit.compare, Animal.compare

// Tóm tắt
// Các phương thức tĩnh được sử dụng cho chức năng thuộc về lớp "nói chung". Nó không liên quan đến một ví dụ lớp cụ thể.

// Ví dụ, một phương pháp để so sánh hoặc một phương pháp nhà máy .Article.compare(article1, article2) Article.createTodays()

// Chúng được dán nhãn bởi từ trong khai báo lớp.static

// Thuộc tính tĩnh được sử dụng khi chúng ta muốn lưu trữ dữ liệu cấp lớp, cũng không bị ràng buộc với một phiên bản.

// Cú pháp là:

class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
// Về mặt kỹ thuật, khai báo tĩnh cũng giống như gán cho chính lớp đó:

MyClass.property = ...
MyClass.method = ...
// Các thuộc tính và phương pháp tĩnh được kế thừa.

// Đối với nguyên mẫu của lớp, chính nó chỉ ra: . Vì vậy, nếu một trường không được tìm thấy trong , tìm kiếm tiếp tục trong .class B extends ABAB.[[Prototype]] = ABA

// Nhiệm vụ
// Class extends Object?

// tất cả các đối tượng thường kế thừa và có quyền truy cập vào các phương thức đối tượng "chung" như v.v.Object.prototypehasOwnProperty


//Class checking: "instanceof"

// Toán tử cho phép kiểm tra xem một đối tượng có thuộc về một lớp nhất định hay không. Nó cũng tính đến sự kế thừa.instanceof

// Kiểm tra như vậy có thể là cần thiết trong nhiều trường hợp. Ví dụ, nó có thể được sử dụng để xây dựng một hàm đa hình, hàm xử lý các đối số khác nhau tùy thuộc vào loại của chúng.

// Toán tử instanceof
// Cú pháp là:

obj instanceof Class
// Nó trả về nếu thuộc về hoặc một lớp kế thừa từ nó.trueobjClass

// Chẳng hạn:

class Rabbit {}
rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true
// Nó cũng hoạt động với các chức năng xây dựng:

// instead of class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true
// ... Và với các lớp học tích hợp như:Array

arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

// Tóm tắt

// Như chúng ta có thể thấy, về mặt kỹ thuật là một "tiên tiến hơn" .{}.toStringtypeof

// Và toán tử thực sự tỏa sáng khi chúng ta đang làm việc với hệ thống phân cấp lớp và muốn kiểm tra lớp có tính đến kế thừa hay không.instanceof

