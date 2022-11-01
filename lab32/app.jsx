// const h1 = React.createElement("h1", {
//   id: "message",
//   onClick: function () {
//     console.log("clicked");
//   },
//   children: ["Hello world", "xin chao", "?"],
// });

// const img = React.createElement("img", {
//   src: "https://am-a.akamaihd.net/image?resize=750:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457397135_T1_Faker_784x621.png",
//   alt: "ads",
// });

// const input = React.createElement("input", {
//   type: "text",
//   className: "non",
//   value: "safaga",
// });

// const div = React.createElement("div", {
//   className: "wapper",
//   children: [
//     h1,
//     img,
//     input,
//     React.createElement("p", {
//       children: "hello",
//     }),
//     React.createElement("form", {
//       className: "form",
//       children: [
//         React.createElement("div", {
//           className: "dasd",
//         }),
//       ],
//     }),
//   ],
// });

// -------------------------------------------------------------------------------------------------

// const myName = "Trung";
// const bestYi = true;
// function createApp() {
//   const now = new Date();
//   return (
//     <div className="wrapper" id={myName}>
//       <h1 className="heading" onClick={() => console.log("faker")}>
//         Hello {myName}
//       </h1>
//       <p>Bay gio la: {now.toLocaleTimeString()}</p>
//       <img
//         src="https://am-a.akamaihd.net/image?resize=750:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457397135_T1_Faker_784x621.png"
//         alt="dsd"
//       />

//       {bestYi && <div>best master yi</div>}

//       <form action="">
//         <div className="form-field">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" />
//           <button>Submit</button>
//         </div>
//       </form>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
//         voluptates debitis. Facilis, maxime deserunt, assumenda est voluptatum
//         voluptatibus corporis quae, alias tempore atque non quisquam? Assumenda
//         vero accusantium error adipisci!
//       </p>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.querySelector("#app"));

// setInterval(() => {
//   root.render(createApp());
// }, 1000);

// -------------------------------------------------------------------------------------------------

// comppiler : jsx => javascript => chay

// component base

function Hello({ name, age, role }) {
  return (
    <h1>
      Hello React {name},{age},{role}
    </h1>
  );
}
console.log(Hello);
console.log(<Hello />);
// viet hoa chu cai dau moi hieu la component

function Time() {
  const now = new Date();
  return <p>It's {now.toLocaleTimeString()}</p>;
}

setInterval(() => {
  root.render(<App />);
}, 1000);

function App() {
  const currentUser = {
    name: "trung",
    age: 22,
    role: "admin",
  };
  return (
    <div>
      <Hello {...currentUser} />
      <Time />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
