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

```js
const FunctionComponent = (props) => (
  <MyContext.Consumer>
    {(val) => <span className={val}>Function Component</span>}
  </MyContext.Consumer>
);
```

### Context.displayName

Sau khi một Context được khởi tạo bởi createContext(), nó nhận một thuộc tính displayName kiểu string (chuỗi).

React DevTools sẽ sử dụng chuỗi này để hiển thị lại tên Context. Điều này hữu ích cho việc debug.

```js
const MyContext = React.createContext(/* vài giá trị */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

# Tìm nạp dữ liệu với useEffect

Khi chúng ta muốn thực hiện hành động này một lần, đặc biệt là khi sử dụng loads hoặc mounts, có thể sử dụng useEffect() để thực hiện. Trong trường hợp cụ thể dưới đây, chúng ta gọi fetch() yêu cầu GET khi ứng dụng được mount, sử dụng một array rỗng làm giá trị phụ thuộc:

```js
import { useState, useEffect } from "react";

const UseCaseFetchApi = (props) => {
  const [bio, setBio] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api/people/1/");
      const data = await response.json();
      console.log(data);
      setBio(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running once on mount: fetch API data</h3>
      <p>bio:</p>
      <pre>{JSON.stringify(bio, null, "\t")}</pre>
    </>
  );
};

export default UseCaseFetchApi;
```

# Custom hooks

## Custom hooks là gì ?

Custom hooks là việc các bạn tự tạo ra một hook mới với chức năng riêng biệt của nó. Việc này giúp tách phần code logic ra khỏi UI giúp code tường minh, dễ quản lý hơn, tránh lặp lại code và tái sử dụng.

## example

- Khi không dùng custom hook:

```js
import { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";

const App = () => {
  const [width, setWidth] = useState < number > window.innerWidth;

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return <>{width >= 1024 && <Sidebar />}</>;
};
```

Bây giờ muốn dùng window width ở component khác thì phải lặp lại phần code trên. Đây là lúc custom hooks phát huy tác dụng.

- Xây dựng custom hooks

Tạo ra hook useWindowSize để giải quyết vấn đề.

```js
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return windowSize;
};
```

Giờ có thể sử dụng hook useWindowSize ở bất kì component nào.

```js
import { useWindowSize } from "hooks";

const App = () => {
  const { width, height } = useWindowSize();

  return <>{width >= 1024 && <Sidebar />}</>;
};
```
