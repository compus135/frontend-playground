import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from "@tanstack/react-query";
import { doGetTodos } from "../services";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Link to="/bar">Go to bar</Link>
      <br></br>
      <Link to="/foo">Go to foo</Link>
      <br></br>

      <Outlet />
    </QueryClientProvider>
  );
};

const Foo = () => {
  return <h1>Foo</h1>;
};

const Bar = () => {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["bar"],
    queryFn: () => doGetTodos(),
  });
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>{isFetching ? "fetching..." : ""}</div>
      {data.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
        </div>
      ))}
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [
      { path: "foo", element: <Foo /> },
      { path: "bar", element: <Bar /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const AppWithRouter = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default AppWithRouter;
