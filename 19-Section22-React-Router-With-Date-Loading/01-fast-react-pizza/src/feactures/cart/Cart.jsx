import { LinkButton } from "../../ui/LinkButton";
import { Button } from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const userName = useSelector((state) => state.user.username);
  const cart = [
    {
      id: 1,
      name: "Margherita",
      quantity: 2,
      totalPrice: 19.98,
    },
    {
      id: 2,
      name: "Pepperoni",
      quantity: 1,
      totalPrice: 12.99,
    },
  ];
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-2xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
