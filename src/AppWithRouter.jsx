import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      { path: "foo", element: <div>foo</div> },
      { path: "bar", element: <div>bar</div> },
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
