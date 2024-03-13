import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app/Root";
import ProductsList from "./parts/products/ProductsList";
import ProductPage from "./parts/products/ProductPage";
// import ProductsList from "./parts/products/ProductsList";
// import { ProductsList } from "./parts/products/ProductsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "/products/:productId",
        element: <ProductPage></ProductPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
