import Error from "./pages/Error";
import About from "./pages/About";
import HomeLayout from "./pages/HomeLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   errorElement: <Error />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  //   errorElement: <Error />,
  // },
]);

export function App() {
  return <RouterProvider router={router} />;
}
