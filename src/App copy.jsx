import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const App = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      console.log(1);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return new Array(1)
        .fill(true)
        .map((item, index) => ({ key: index, title: "todo" + index }));
    },
  });
  console.log(query, "query-------");

  const mutation = useMutation({
    mutationFn: () => {
      console.log("mutationFn");
    },
    onSuccess: () => {
      console.log("onSuccess");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      {query.data?.map((item) => (
        <li key={item.key}>{item.title}</li>
      ))}
      <button
        onClick={() => {
          mutation.mutate({ key: "key-new", title: "todo-title" });
        }}
      >
        add todo
      </button>
    </div>
  );
};

export default App;
