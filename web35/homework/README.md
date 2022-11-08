# Context

Trong ứng dụng React, data thường truyền từ trên xuống dưới thông qua props. Nhưng cách này sẽ trở nên phức tạp đối với các loại dữ liệu global như locale, theme…, chúng ta phải truyền chúng qua nhiều lớp component để sử dụng. Context lúc này như vị cứu tinh của React: cung cấp một cách chia sẻ dữ liệu giữa các component như một biến global mà không cần phải truyền props qua mỗi cấp component.

![alt](https://wiki.tino.org/wp-content/uploads/2021/10/context-react-idea.drawio.png)

Context được thiết kế để chia sẻ dữ liệu như một biến global cho một cây component. Ví dụ các giá trị như authenticated user (thông tin người dùng lúc đăng nhập), theme, languages… được sử dụng thường xuyên ở các tầng React component.

## Ưu – nhược điểm của Context

### Ưu điểm

Giảm thiểu code dư thừa khi một component nhận props nhưng không sử dụng đến.
Giảm thiểu việc lặp code khi gọi một props cho nhiều component.
Quản lý dữ liệu ở một nơi giúp việc truy xuất và cập nhật dễ dàng.

### Nhược điểm

- Khó tái sử dụng lại component vì dữ liệu tập trung một chỗ.

## Cách sử dụng Context (Context API)

### React.createContext

API này cho phép khởi tạo một đối tượng Context.

```js
// defaultValue là giá trị được khởi tạo mặc định lúc đầu của MyContext
const MyContext = React.createContext("defaultValue");
```

### Context.Provider

Mỗi đối tượng Context đều đi cùng với một Provider như một React component.

```js
MyContext.Provider value={/* some value */}>{children}</MyContext.Provider>
```

### Class.contextType

Thuộc tính contextType được sử dụng cho các class component. Thuộc tính này được gán vào đối tượng Context khai báo bằng React.createContext().

Ta lấy giá trị props “value” của component <Provider> thông qua cú pháp this.context, ta có thể sử dụng nó trong mọi phương thức của lifecycle:

```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* ... */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* ... */
  }
}
MyClass.contextType = MyContext;
```

### Context.Consumer

Để lấy giá trị props “value” của component <Provider> trong một function component, ta dùng component Consumer.

Function component nhận giá trị “value” của <Provider> gần nhất trong các tầng component và trả về React element.
