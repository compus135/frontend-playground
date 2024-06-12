import { useQuery } from "@tanstack/react-query";

const App = () => {
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

  return (
    <div>
      {query.data?.map((item) => (
        <li key={item.key}>{item.title}</li>
      ))}
    </div>
  );
};

export default App;
