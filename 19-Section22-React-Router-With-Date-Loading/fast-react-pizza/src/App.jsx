import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./feactures/menu/Menu";
import Card from "./feactures/cart/Cart";
import CreateOder, {
  action as createOrderAction,
} from "./feactures/order/CreateOrder";
import Order from "./feactures/order/Order";
import menuLoader from "./feactures/menu/menuLoader";
import orderLoader from "./feactures/order/orderLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/order/new",
        element: <CreateOder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
