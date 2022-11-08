// const App = () => {
//   const [count, setCount] = React.useState(0);
//   const [e, setE] = React.useState(0);
//   React.useEffect(() => {
//     console.log("app mounted");
//     return () => {
//       // hoi khac voi componentWillUnmount
//       console.log("before re-render");
//     };
//   }, [e]);

//   React.useEffect(() => {}, []);

//   console.log("render app");

//   return (
//     <div className="container">
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//       <button onClick={() => setE(e + 1)}>{e}</button>
//     </div>
//   );
// };

const Todo = ({ userId, id, title, completed }) => {
  return <div className="todo-item">{title}</div>;
};

const TodoType = PropTypes.exact({
  userId: PropTypes.number,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

Todo.propTypes = TodoType;

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType),
};

const App = () => {
  // client state
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const controller = new AbortController();

    // server state
    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="todo-app">
      <TodoList todos={todos}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
