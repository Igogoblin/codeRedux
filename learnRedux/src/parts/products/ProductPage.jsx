import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let params = useParams();
  const { productId } = params;
  const product = useSelector((state) =>
    state.find((product) => product.id === productId)
  );
  console.log(product);
  if (!product) {
    return <p>No such product</p>;
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.desc}</p>
      <p>Price: {product.price}</p>
      <p>Amount:{product.amount}</p>
    </div>
  );
};

export default ProductPage;
