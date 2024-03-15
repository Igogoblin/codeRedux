const reactionObj = {
  good: "+",
  soso: "+/-",
  bad: "-",
};
const UserReaction = ({ product }) => {
  const userReaction = Object.entries(reactionObj).map([name,image])=>{
    return(
        <button key={name} type="button" className="reaction-button">
            {image} {product.reactions[name]}
        </button>
    )
  };
  return <div>{userReaction}</div>
};
export default UserReaction;
