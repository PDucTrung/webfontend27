const App = () => {
  const pokemons = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
  const user = {
    name: "trung",
    isAdmin: true,
  };
  const user2 = {
    name: "tuyen",
    isAdmin: false,
  };

  const names = ["trung", "tuyen", "thuan", "trong"]; // => [<Hello name="trung"/>, <Hello name="tuyen"/>]
  const listHello = names.map((name, i) => <Hello name={name} key={i} />);
  return (
    <div className="Container">
      {listHello}
      <User user={user} />
      <User user={user2} />
      <User user={undefined} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

const HandlingEvent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = () => {
    console.log(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} onChange={handleChange}>
      <input type="text" name="userName" />

      <select name="gender" id="">
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

class State extends React.Component {
  state = {
    value: 1,
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>plus</button>
        {this.state.value}
        <button onClick={this.decrement}>minus</button>
      </div>
    );
  }
}

const App2 = () => {
  const [count, setCount] = React.useState(0);

  const timer = React.useRef(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount((preriousCount) => preriousCount - 1);
  };

  const colorValue = {
    color: count > 0 ? "blue" : count < 0 ? "red" : "#333333",
  };

  // const start = () => {
  //   if (!timer.current)
  //     timer.current = setInterval(() => {
  //       setCount((preriousCount) => preriousCount + 1);
  //     }, 1000);
  // };

  // const stop = () => {
  //   if (timer.current) clearInterval(timer, current);
  // };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <div style={colorValue}>{count}</div>
      <button onClick={increment}>+</button>
      {/* <div>{count}</div>
      <button onClick={start}>start</button>
      <button onClick={stop}>pause</button> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App2 />);

// tim hieu ve xu ly su kien trong react
// tim hiue ve key khi su dung map
// tim hieu ve hook va usestate
