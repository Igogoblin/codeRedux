import {useDispatch} from "react-redux";
import { reactionClicked } from "./ProductsSlice";
const reactionObj = {
  good: "+",
  soso: "+/-",
  bad: "-",
};
const UserReaction = ({ product }) => {
  const dispatch = useDispatch();
  const userReaction = Object.entries(reactionObj).map([name,image])=>{
    return(
        <button key={name} type="button" className="reaction-button"
        onClick={dispatch(reactionClicked({productId:product.id,reaction:name}))}
        >
            {image} {product.reactions[name]}
        </button>
    )
  };
  return <div>{userReaction}</div>
};
export default UserReaction;
