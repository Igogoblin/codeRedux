import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productAdded } from "./ProductsSlice";

const NewProductForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescChanged = (e) => setDesc(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onAmountChanged = (e) => setAmount(e.target.value);

  const onSaveProductClick = () => {
    console.log("we are here");
    if (name && desc && price && amount) {
      dispatch(
        productAdded({
          id: nanoid(),
          name,
          desc,
          price,
          amount,
        })
      );
      console.log("alllllll");
    }
    setAmount(0);
    setDesc("");
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <h2>Add a new Product</h2>
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
export default NewProductForm;
