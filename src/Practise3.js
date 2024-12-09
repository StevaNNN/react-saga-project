import React, { useCallback, useEffect, useState } from "react";

export const useFetch = ({ api, onSuccess, onError }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const data = await response.json();
        setLoading(false);
        setData(data);
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };
    if (api) fetchData();
    // if we add this onError or onSuccess as deps here
    // we need to make sure they are wrapped with useCallback hook
    // because they are recreated on each re-render without it with useCallback react caches those callbacks
  }, [api, onError, onSuccess]);

  if (api) {
    return { data, setData, loading };
  }
  return null;
};

export const TodoItem = ({ data, removeTodo, completeTodo }) => {
  return (
    <li
      style={{
        border: "1px solid black",
        borderRadius: 8,
        listStyleType: "none",
        padding: 8,
        width: 700,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data.title}
      <div>
        <label htmlFor={`completeTodo-${data.id}`}>
          Complete Todo
          <input
            id={`completeTodo-${data.id}`}
            type="checkbox"
            checked={data.completed}
            onChange={() => completeTodo && completeTodo(data.id)}
          />
        </label>
        <button onClick={() => removeTodo && removeTodo(data.id)}>
          Delete todo
        </button>
      </div>
    </li>
  );
};

const TodoApp = () => {
  const getTodos = useFetch({
    api: "https://jsonplaceholder.typicode.com/todos",
    onSuccess: useCallback(() => console.log("this is successull request"), []),
    onError: useCallback((err) => console.log(err), []),
  });
  const { data: todos, setData: setTodos, loading } = getTodos;
  const [newTodoText, setNewTodoText] = useState("");
  const getAmountOfTodos = 10;
  const [clickedAmount, setClickedAmount] = useState(1);

  const removeTodoHandler = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodoHanlder = (id) => {
    const updatedTodos = todos.map((t) => {
      return t.id === id ? { ...t, completed: !t.completed } : t;
    });
    setTodos(updatedTodos);
  };

  const addNewTodo = () => {
    setClickedAmount((prevState) => prevState + 1);
    const localTodos = todos;
    const newTodo = {
      userId: 1,
      id: getAmountOfTodos + clickedAmount,
      title: newTodoText,
      completed: false,
    };
    newTodoText && localTodos.push(newTodo);
    setTodos(localTodos);
    setNewTodoText("");
  };

  return (
    <>
      {loading ? (
        <h1>LOADING......</h1>
      ) : (
        <>
          <h1>Add new todo</h1>
          <input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button onClick={addNewTodo}>Add new todo</button>
          <h1>Todo list </h1>
          <ul
            style={{
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {todos.length
              ? todos?.map((todo, idx) => (
                  <React.Fragment key={todo.id}>
                    <TodoItem
                      data={todo}
                      removeTodo={removeTodoHandler}
                      completeTodo={completeTodoHanlder}
                    />
                  </React.Fragment>
                ))
              : "No todos found"}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoApp;
