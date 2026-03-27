import { getOrder } from "../../services/apiRestaurant";

async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default orderLoader;
