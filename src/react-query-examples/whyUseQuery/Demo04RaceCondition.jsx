import { useEffect } from "react";
import { useState } from "react";
import { doGetTodosByName } from "../services/index";

const Demo03RaceCondition = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    doGetTodosByName(name).then((res) => {
      setTodos(res);
    });
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo03RaceCondition;
