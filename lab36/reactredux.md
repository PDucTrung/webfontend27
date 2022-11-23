# **Redux là gì**

- Redux được xem là một thư viện được thiết kế để quản lý state trong các project JavaScript. Redux đảm bảo rằng mỗi **component** đều có quyền truy cập trực tiếp vào state của project mà không cần phải truyền **props** xuống các **component** con hoặc sử dụng các hàm callback để truyền data lên các **component** cha.

## Khi nào cần redux

- Khi project ngày càng lớn, với ngày càng nhiều **component**, việc chỉ sử dụng duy nhất React để quản lý state sẽ trở nên rất phức tạp.
- Redux có một store nơi chứa tất cả các state. Nếu một state thay đổi ở component A, nó sẽ được phản ánh lên store, và những component cần biết đến sự thay đổi state này ở component A có thể subcribe lên store.

![alt](https://images.viblo.asia/fcf84f2c-9440-49e7-a946-6a526b1d878f.png)

- Component A gửi thay đổi state lên store, nếu component B và C cần state này thì chúng có thể lấy trực tiếp từ store.
