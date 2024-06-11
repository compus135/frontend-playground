import { useQuery } from "@tanstack/react-query";
import { doGetTodos } from "../../services/index";
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
  const { data, isLoading } = useQuery({
    queryKey: ["doGetTodos"],
    queryFn: () => {
      return doGetTodos();
    },
  });
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
  const { data, isLoading } = useQuery({
    queryKey: ["doGetTodos"],
    queryFn: () => {
      return doGetTodos();
    },
  });
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
