import { formatCurrency } from "../../utils/helpers";
import { Button } from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { DeleteItem } from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const currentQuantityById = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantityById > 0;
  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "opacity-70 grayscale" : ""}`}>
      <img src={imageUrl} alt={name} className="w-24" />
      <div className="flex grow flex-col pt-0.5">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}{" "}
          {isInCart && (
            <div className="flex items-center gap-8 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantityById}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!isInCart && !soldOut && (
            <Button
              // to={soldOut ? null : `/order/${id}`}
              disabled={soldOut}
              type="small"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
