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