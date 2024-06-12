import { useEffect } from "react";
import { useState } from "react";
import { doAddTodo, doGetTodos } from "../services";

const Demo02UpdateState = () => {
  const [todos, setTodos] = useState();
  const [isFetching, setFetching] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    doGetTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setFetching(false);
      });
    setFetching(true);
  }, []);

  return isFetching && todos === undefined ? (
    "fetching..."
  ) : isError ? (
    "error..."
  ) : (
    <div>
      <button
        onClick={() => {
          doGetTodos()
            .then((data) => {
              setTodos(data);
            })
            .catch(() => {
              setError(true);
            })
            .finally(() => {
              setFetching(false);
            });
          setFetching(true);
        }}
      >
        refresh{" "}
      </button>{" "}
      <button
        onClick={() =>
          doAddTodo({
            id: Math.round(100000 * Math.random()),
            name: "todo-name" + Math.round(100000 * Math.random()),
          }).then(() => {
            doGetTodos()
              .then((data) => {
                setTodos(data);
              })
              .catch(() => {
                setError(true);
              })
              .finally(() => {
                setFetching(false);
              });
            setFetching(true);
          })
        }
      >
        add todo
      </button>
      {isFetching ? "fetching..." : ""}
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
};

export default Demo02UpdateState;
