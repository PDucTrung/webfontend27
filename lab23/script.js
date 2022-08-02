// Synchonous - Đồng bộ: CT thực hiện từng câu lệnh thực hiên trong mã theo thứ tự
// cau lenh trc ket thuc thi den cau lenh tiep theo
// Ưu điểm: chương trình dễ kiểm soát

// const loadScript = (
//   src /* Ten file */,
//   callback /*hàm gọi lại sau khi tải xong*/
// ) => {
//   const script = document.createElement("script");
//   script.src = src;
//   script.onload = () => {
//     callback(script)
//   }
//   // them vao head
//   document.head.append(script); //trình duyệt lúc này tải file script
// };

// loadScript(
//   "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js",
//   (script) =>{
//     $("h1").text("Hello jquery");
//   }
// );

// Promise => nhận vào 2 tham số
// Tham số đâu tiên executor (hành động mà mình cần làm)
// tham số thứ 2 callback ( được truyền vào có 2 tham số resolve - thông báo trong TH thành công, reject -  thông báo cho hành động thất bại)
// Mỗi Promise có 3 trạng thái: Pending - đang chờ; Fulfill - thành công; Reject -  thất bại
// cho đến khi nào goi resolve, reject

// const promise = new Promise( (resolve, reject) =>{
//   console.log("Di mua ga");
//   const yes = Math.round(Math.random());
//   setTimeout(()=>{
//     if(yes){
//       resolve("Co ga")
//     } else {
//       reject("Ga vao het chuong roi!!")
//     }
//   },1000)
// });
//  promise
//    .then((value) => {
//      console.log("Ngon" + value);
//    })
//    .catch((reason) => {
//      return new Promise((resolve, reject) => {
//        console.log("Tim ga khac");
//        const yes = Math.round(Math.random());
//        setTimeout(() => {
//          if (yes) {
//            resolve("Co ga");
//          } else {
//            reject("Ga vao het chuong roi!!");
//          }
//        }, 1000);
//      });
//    })
//    .then((value) => {
//      console.log("Mai moi tim dc" + value);
//    }).catch((reason)=>{
//     console.log("Toan ga ban, k an nua!!")
//    });

// function diTimGa() {
//   return new Promise((resolve, reject) => {
//     console.log("Tim ga khac");
//     const yes = Math.round(Math.random());
//     setTimeout(() => {
//       if (yes) {
//         resolve("Co ga");
//       } else {
//         reject("Ga vao het chuong roi!!");
//       }
//     }, 1000);
//   });
// }

// async function action() {
//   try {
//     const value = await diTimGa();
//   } catch (err) {
//     try {
//       const value = await diTimGa();
//     } catch (err) {
//       console.log("Toan ga ban, k an nua!!");
//     }
//   }
// }

// action()

// AJAX
// Ký thuật cho phép Client và server giao tiếp/ trào đổi dữ liệu mà không cần phải load lại trang
// HTTP
// Trang tĩnh (HTML, CSS)

// https://jsonplaceholder.typicode.com/

// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//   // Kiểm tra trạng thái
//   // Kiểm tra kiểu dữ liệu trả về
//   // Phân tách cá giá trị trong header
//   return response.json();
// }).then((json)=>{
//   console.log(json);
// })

// Thư viện bên thứ 3
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getUsers = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/users");
// };
// // const e = (tag,attributes, ...children) =>{
// //   const element = document.createElement(tag);

// //   Object.assign(element,attributes);

// //   element.append(...children);

// //   return element;
// // };
// // const createUserCard = ({name, email,phone})=>{
// //   return e(
// //     "div",
// //     { classname: "user" },
// //     e("div", { classname: "user-name" }, name),
// //     e("div", { classname: "user-email" }, email),
// //   e("div",{classname: "user-phone"},phone));
// // };
// const renderUsertList = async () => {
//   try {
//     const { data } = await getUsers();
//     const html = data.map((user) => {
//       return `<div class="user">
//         <div class="user-name">${user.name}</div>
//         <div class="user-email">${user.email}</div>
//         <div class="user-phone">${user.phone}</div>
//       </div>`;
//     });
//     document.querySelector(".user-list").innerHTML = html;
//     // const user = data.map(createUserCard);

//     // document.querySelector(".user-list").append(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// renderUsertList();
// // DOM
// // InnerHTML
