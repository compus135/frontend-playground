import { useEffect } from "react";
import { useState } from "react";
import { doGetTodosByName } from "../services/index";

const Demo05RaceCondition = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // 先请求的后返回
    // 先返回的应该设置,后返回的不应该再设置了
    // 如果上一个请求还没返回,就发起下一个请求,上一个请求的结果就应该忽略掉
    let ignore = false;
    doGetTodosByName(name).then((res) => {
      if (!ignore) {
        setTodos(res);
      }
    });
    return () => {
      ignore = true;
    };
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

export default Demo05RaceCondition;
