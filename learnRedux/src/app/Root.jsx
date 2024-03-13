// import NewProductForm from "../parts/products/NewProductForm.jsx";
// import ProductsList from "../parts/products/ProductsList.jsx";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div id="main">
      <div id="menu">
        <nav>
          {/* <a>Products</a> */}
          <NavLink to="/products" end>
            Products
          </NavLink>
          <a>Sellers</a>
        </nav>
      </div>
      <div id="main_page">
        <h2>My Products App</h2>
        <hr></hr>
        {/* <NewProductForm></NewProductForm>
        <ProductsList /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
