// ajax
// ky thuat cho phep client va server giao tiep  du lieu ma khong phai reload

//http

// client gui di http
//startline: path(endpoint) - method(hanh dong) - get (doc du lieu) - post (tao moi du lieu) - push ( chinh sua du lieu) - delete (xoa)
//header: metadata
//body: data

//server tra ve http response
//startus (thanh cong hay that bai) (1xx - 2xx (thanh cong) - 3xx (chuyen huong) - 4xx (loi phia client) - 5xx(loi phia server))
//header: meta
//body: data tu server

// fetch

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
//   headers: {},
//   body: {},
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     //kiem tra trang thai
//     //kiem tra kieu du lieu tra ve
//     //phan tach cac gia tri trong header
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

//thu vien ben thu 3

//axios

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const e = (tag, attributes, ...children) => {
  //tao ra the tuong ung vs tag
  const element = document.createElement(tag);

  //gan tat ca cac thuoc tinh cho element
  Object.assign(element, attributes);

  //them cac phan tu con
  element.append(...children);

  return element;
};

const createUserCard = ({ name, email, phone }) => {
  return e(
    "div",
    { className: "user" },
    e("div", { className: "user-name" }, name),
    e("div", { className: "user-email" }, email),
    e("div", { className: "user-phone" }, phone)
  );
};

const renderUserList = async () => {
  try {
    const { data } = await getUsers();
    //bien doi mang obj -> html
    const users = data.map(createUserCard);
    document.querySelector(".user-list").append(users);
  } catch (err) {
    console.log(err);
  }
};

//innerHTML
// const renderUserList = async () => {
//   try {
//     const { data } = await getUsers();
//     //bien doi mang obj -> html
//     const html = data
//       .map((user) => {
//         return `
//         <div class="user">
//             <div class="user-name">${user.name}</div>
//             <div class="user-email">${user.email}</div>
//             <div class="user-phone">${user.phone}</div>
//         </div>`;
//       })
//       .join("");

//     document.querySelector(".user-list").innerHTML = html;
//   } catch (err) {
//     console.log(err);
//   }
// };

renderUserList();

//innerHTML (string) - document.createElement
