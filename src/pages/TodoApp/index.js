import React, { useCallback, useState } from "react";
import { useFetch } from "../../helpers/hooks/hooks";
import { TodoItem } from "./components/TodoItem";
import { JSON_PLACEHOLDER_API } from "../../api";

const TodoApp = () => {
  const getAmountOfTodos = 200;
  const getTodos = useFetch({
    api: `${JSON_PLACEHOLDER_API}/todos`,
    onSuccess: useCallback(() => console.log("this is successull request"), []),
    onError: useCallback((err) => console.log(err), []),
  });
  const { data: todos, setData: setTodos, loading } = getTodos;
  const [newTodoText, setNewTodoText] = useState("");

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
    const tempTodos = todos;
    const newTodo = {
      userId: 1,
      id: getAmountOfTodos + clickedAmount,
      title: newTodoText,
      completed: false,
    };
    newTodoText && tempTodos.push(newTodo);
    setTodos(tempTodos);
    setNewTodoText("");
    const lis = document.querySelectorAll("li");
    const last = lis[lis.length - 1];
    last.scrollIntoView({ behavior: "smooth" });
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
              ? todos?.map((todo) => (
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
