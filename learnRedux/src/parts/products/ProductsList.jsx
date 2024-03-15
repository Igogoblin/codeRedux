import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NewProductForm } from "./NewProductForm";
import SellerOfProd from "./SellerOfProd";

const ProductsList = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispProducts = products.map((product) => (
    <div key={product.id} className="product-excerpt">
      <h3>{product.name}</h3>
      <SellerOfProd sellerId={product.seller} />
      <p>{product.desc.substring(0, 100)}</p>
      <Link to={`/products/${product.id}`} className="link-btn">
        view
      </Link>
      {/* <p>Price: {product.price}</p>
      <p>Amount: {product.amount}</p> */}
    </div>
  ));
  console.log(dispProducts);
  return (
    <div>
      <NewProductForm />
      <h2>Products</h2>

      {dispProducts}
    </div>
  );
};

export default ProductsList;
