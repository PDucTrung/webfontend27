const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      {value}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

const Square = ({ value }) => {
  const style = {
    width: 100 + value * 10,
    height: 100 + value * 10,
  };
  return <div className="square" style={style}></div>;
};

const App = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="container">
      <Counter
        // two-way data binding
        // truyen trang thai tu component cha
        value={value}
        // dong thoi truyen xuong ham de cho phep component cap nhat trang thai
        onIncrement={() => setValue(value + 1)}
        onDecrement={() => setValue(value - 1)}
      />
      <Square value={value} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

// lifecycle methods- phuong thuc vong doi: la phuong thuc duoc react dinh nghia va chay khi component dat den giai doan cua the
// Mounting:
// render()
// componentDidMount()
// Updating:
// componentDidUpdate()
// Ummount:
// compoentWillUnmount()