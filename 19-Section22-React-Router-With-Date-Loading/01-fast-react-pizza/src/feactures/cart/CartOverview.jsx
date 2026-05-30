import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCost } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCost = useSelector(getTotalCost);
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCost.toFixed(2)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
