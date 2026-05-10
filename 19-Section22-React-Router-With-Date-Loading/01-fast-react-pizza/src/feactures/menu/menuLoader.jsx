import { getMenu } from "../../services/apiRestaurant";

async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export default menuLoader;
