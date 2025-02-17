import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddProductPage from "../Pages/Add Product Page/AddProductPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/AddProductPage',
          element: <AddProductPage></AddProductPage>
        }
      ]
    },
  ]);