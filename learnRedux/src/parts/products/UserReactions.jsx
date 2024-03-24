import { useDispatch } from "react-redux";
import { reactionClicked } from "./ProductsSlice";
const reactionObj = {
  good: "+",
  soso: "+/-",
  bad: "-",
};
const UserReactions = ({ product }) => {
  const dispatch = useDispatch();
  const userReactions = Object.entries(reactionObj).map(([name, image]) => {
    return (
      <button
        key={name}
        type="button"
        className="reaction-button"
        onClick={() =>
          dispatch(reactionClicked({ productId: product.id, reaction: name }))
        }
      >
        {image} {product.reactions[name]}
      </button>
    );
  });
  return <div>{userReactions}</div>;
};
export default UserReactions;
