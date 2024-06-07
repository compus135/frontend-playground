import { useEffect } from "react";
import { useState } from "react";
import { doGetTodos } from "../../services/index";

const Bar = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    doGetTodos()
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
};

export default Bar;
