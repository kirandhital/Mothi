import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import CategoryList from "./Pages/category_list/CategoryList";
import DrinkList from "./Pages/drink_list/DrinkList";
import Drink from "./Pages/drink/Drink";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <CategoryList />
        },
        {
          path: 'drink-list',
          element: <DrinkList />
        },
        {
          path: 'drink/:id',
          element: <Drink />
        }

      ]
    },

  ]);

  return <RouterProvider router={router} />
}