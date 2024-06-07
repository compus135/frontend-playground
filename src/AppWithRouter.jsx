import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Foo from "./react-router/cache/Foo";
import Bar from "./react-router/cache/Bar";

const Home = () => {
  return (
    <div>
      <Link to="/bar">Go to bar</Link>
      <br></br>
      <Link to="/foo">Go to foo</Link>
      <br></br>

      <Outlet />
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
