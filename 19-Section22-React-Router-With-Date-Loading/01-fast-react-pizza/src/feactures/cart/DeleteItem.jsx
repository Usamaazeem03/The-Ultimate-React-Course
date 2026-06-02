import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";
import { removeItem } from "./cartSlice";
export function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
}
