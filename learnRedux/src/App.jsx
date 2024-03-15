import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app/Root";
import ProductsList from "./parts/products/ProductsList";
import ProductPage from "./parts/products/ProductPage";
import EditProductForm from "./parts/products/EditProductForm";
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
      {
        path: `/editProduct/:productId`,
        element: <EditProductForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
