import { doGetTodos } from "../../services/index";
import { useState } from "react";
import { useEffect } from "react";
const Demo = () => {
  return (
    <div>
      <Comp1 />
      ------------------------
      <Comp2 />
    </div>
  );
};

const Comp1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    doGetTodos().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
};

const Comp2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    doGetTodos().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
};

export default Demo;
