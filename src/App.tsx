import Error from "./pages/Error";
import About from "./pages/About";
import HomeLayout from "./pages/HomeLayout";
import Products from "./pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { loader as blogLoader } from "./pages/Blog";

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
        path: "/our-products",
        element: <Products />,
      },
      {
        path: "/blogs",
        element: <Blog />,
        loader: blogLoader,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
