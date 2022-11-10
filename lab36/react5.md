# **React router**

# 1) React-Router là gì?

- **React-Router** là một thư viện định tuyến (routing) tiêu chuẩn trong React. Nó giữ cho giao diện của ứng dụng đồng bộ với **URL** trên trình duyệt. **React-Router** cho phép bạn định tuyến "luồng dữ liệu" (**data flow**) trong ứng dụng của bạn một cách rõ ràng. Nó tương đương với sự khẳng định, nếu bạn có URL này, nó sẽ tương đương với Route này, và giao diện tương ứng.

- Install

```js
npm install react-router-dom --save
```

# 2) Các thành phần trong React-Router

## 2.1) BrowserRouter vs HashRouter

- **React-Router** cung cấp cho chúng 2 thành phần hay sử dụng đó là **BrowserRouter** & **HashRouter**. Hai thành phần này khác nhau ở kiểu **URL** mà chúng sẽ tạo ra và đồng bộ.

- **BrowserRouter**: Được sử dụng phổ biến hơn, nó sử dụng **History API** có trong **HTML5** để theo dõi lịch sử bộ định tuyến của bạn.

- **HashRouter**: Sử dụng **hash** của **URL** (window.location.hash) để ghi nhớ mọi thứ.

```js
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
```

## 2.2) Route

**Route**: Định nghĩa một ánh xạ (mapping) giữa một URL và một **Component**. Điều đó có nghĩa là khi người dùng truy cập theo một URL trên trình duyệt, một **Component** tương ứng sẽ được **render** trên giao diện.

```js
<Router>
  <div className="App">
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </div>
</Router>
```

Trong đó:

- **path**: Là đường dẫn trên URL.
- **exact**: Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
- **component**: Là component sẽ đươc load ra tương ứng với Route đó.

## 2.3) Link

Trong HTML thì cặp thẻ để chuyển hướng đó là thẻ `<a></a>` thì trong react chúng ta sẽ dử dụng cặp thẻ `<Link></Link>` được **import** từ **React-Router**.

```js
<Link to="/about">About</Link>
```

trong đó:

- **to**: Giống như thuộc tính href trong thẻ a.
