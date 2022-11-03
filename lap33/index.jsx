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

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

// tim hieu ve xu ly su kien trong react
// tim hiue ve key khi su dung map
// tim hieu ve hook va usestate

