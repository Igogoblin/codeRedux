import { useSelector } from "react-redux";

const SellerOfProd = ({ sellerId }) => {
  const seller = useSelector((state) =>
    state.find((seller) => seller.id === sellerId)
  );
  return <span>by {seller ? seller.name : "unknown"}</span>;
};

export default SellerOfProd;
