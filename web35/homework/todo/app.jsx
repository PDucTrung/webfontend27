const TodoList = ({ todos, onUpdateTodo, deleteTodo }) => {
  const a = (todo) => {
    if (todo.completed == true) {
      return {
        textDecorationLine: "line-through",
        color: "gray",
      };
    }
  };

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div
              className="title d-flex align-items-center gap-2"
              style={a(todo)}
            >
              <div className="form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onUpdateTodo(todo)}
                />
              </div>
              {todo.title}
            </div>
            <div className="check-delete">
              <button
                className="btn-del btn btn-danger"
                onClick={() => {
                  confirm("Are you sure you want to delete?");
                  deleteTodo(todo);
                }}
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  // client state
  const [todos, setTodos] = React.useState([]);
  //
  const [a, setA] = React.useState([]);
  const [c, setC] = React.useState([]);
  const [all, setAll] = React.useState([]);
  //
  const [state, setState] = React.useState("all");
  React.useEffect(() => {
    const controller = new AbortController();
    // server state
    fetch("https://jsonsv.herokuapp.com/todos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setA(data);
        setC(data);
        setAll(data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setA(newTodos);
    setC(newTodos);
    setAll(newTodos);
    setTodos(newTodos);
  };

  // false
  const onChangevalue = (event) => {
    const allTodos = [...all];
    const activeTodos = [...a];
    const completedTodos = [...c];
    setState(event.target.value);
    const active = activeTodos.filter((todo) => todo.completed == false);
    const completed = completedTodos.filter((todo) => todo.completed == true);
    return event.target.value == "active"
      ? setTodos(active)
      : event.target.value == "completed"
      ? setTodos(completed)
      : setTodos(allTodos);
  };
  //

  const createTodo = () => {
    const input = document.querySelector(".todo-txt").value;
    const newTodos = [...todos];

    newTodos.push({
      userId: 1,
      id: newTodos.length + 1,
      title: input,
      completed: false,
    });
    setA(newTodos);
    setC(newTodos);
    setAll(newTodos);
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    newTodos.splice(todoItemIndex, 1);

    if (state == "active") {
      a.splice(todoItemIndex, 1);
    } else if (state == "completed") {
      c.splice(todoItemIndex, 1);
    } else {
      all.splice(todoItemIndex, 1);
    }

    setA(a);
    setC(c);
    setAll(all);
    setTodos(newTodos);
  };

  const clearAll = () => {
    const newTodos = [...todos];
    newTodos.length = 0;
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="text-center">Todos App</h1>
      <div className="todotodo">
        <input
          type="text"
          className="todo-txt form-control"
          placeholder="What do you want todo ?"
          aria-describedby="basic-addon2"
        />
        <button className="btn-create btn btn-primary" onClick={createTodo}>
          Create
        </button>
      </div>
      <form className="form-radio d-flex gap-3" onChange={onChangevalue}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="all"
            checked={state === "all"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            All
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="active"
            checked={state === "active"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            value="completed"
            checked={state === "completed"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Completed
          </label>
        </div>
      </form>
      <TodoList
        todos={todos}
        onUpdateTodo={onUpdateTodo}
        deleteTodo={deleteTodo}
      />
      <div className="clear d-flex justify-content-between align-items-center">
        <div className="">
          You have{" "}
          <b className="font-bold">
            {todos.filter((todo) => todo.completed == false).length}
          </b>{" "}
          pending task
        </div>
        <button className="btn-delall btn btn-danger" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
