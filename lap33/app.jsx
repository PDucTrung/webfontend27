//prop la readonly
// co mot ro props dac biet
// children la cac the con
// propstype=> xac thuc kieu du lieu cho props /goi y turyen p

function Hello({ name = "trung", children }) {
  return (
    <h1>
      Hello React {name},{children}
    </h1>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

// Hello.defaultProps = {
//   name: "trung",
// };

// Avatar component
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  src: "https://dauduavietcoco.com/wp-content/uploads/2022/01/hinh-nen-gai-xinh-1-1-edited-400x400.jpg",
  alt: "img",
};

function Time() {
  const now = new Date();
  return <p>It's {now.toLocaleTimeString()}</p>;
}

function App() {
  const currentUser = {
    name: "trung",
    age: 22,
    role: "admin",
  };
  return (
    <div>
      <Hello />
      <Time />
      <Avatar />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
