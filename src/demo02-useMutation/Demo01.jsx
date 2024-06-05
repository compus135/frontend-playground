import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { doAddTodo, doGetUsers } from "../services/index";

const Demo01 = () => {
  const queryClient = useQueryClient();
  const { isFetching, data } = useQuery({
    queryKey: ["doGetTodos"],
    queryFn: () => {
      return doGetUsers();
    },
  });
  const { mutate } = useMutation({
    mutationFn: (data) => {
      console.log("mutationFn");
      return doAddTodo(data);
    },
    onSuccess: () => {
      console.log("onSuccess");
      queryClient.invalidateQueries(["doGetTodos"]);
    },
  });
  console.log(isFetching, data);
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      <button
        onClick={() =>
          mutate({
            id: Math.round(100000 * Math.random()),
            name: "todo-name" + Math.round(100000 * Math.random()),
          })
        }
      >
        Click me
      </button>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Demo01;
