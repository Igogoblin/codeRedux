import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdded, productUpdate } from "./ProductsSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  const { productId } = params;
  const product = useSelector((state) =>
    state.find((product) => product.id === productId)
  );
  const [name, setName] = useState(product.name);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const onNameChanged = (e) => setName(e.target.value);
  const onDescChanged = (e) => setDesc(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onAmountChanged = (e) => setAmount(e.target.value);

  const onSaveProductClick = () => {
    console.log("we are here");
    if (name && desc && price && amount) {
      dispatch(
        productUpdate({
          id: productId,
          name,
          desc,
          price,
          amount,
        })
      );
      navigate(`/products/${productId}`);
      console.log("alllllll");
    }
    setAmount("");
    setDesc("");
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <p>
          <label htmlFor="productName">Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={name}
            onChange={onNameChanged}
          />
        </p>
        <p>
          <label htmlFor="productDesc">Description:</label>
          <textarea
            name="productDesc"
            id="productDesc"
            cols="30"
            rows="10"
            value={desc}
            onChange={onDescChanged}
          ></textarea>
        </p>
        <p>
          <label htmlFor="productPrice">Price:</label>
          <input
            id="productPrice"
            name="productPrice"
            value={price}
            onChange={onPriceChanged}
          ></input>
        </p>
        <p>
          <label htmlFor="productAmount">Amount:</label>
          <input
            id="productAmount"
            name="productAmount"
            value={amount}
            onChange={onAmountChanged}
          ></input>
        </p>
        <button type="button" onClick={onSaveProductClick}>
          save
        </button>
      </form>
    </div>
  );
};
export default EditProductForm;
