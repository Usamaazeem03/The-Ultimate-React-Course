import { formatCurrency } from "../../utils/helpers";
import { Button } from "../../ui/Button";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button
            to={soldOut ? null : `/order/${pizza.id}`}
            disabled={soldOut}
            type="small"
          >
            {soldOut ? "Sold out" : "Add to cart"}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
