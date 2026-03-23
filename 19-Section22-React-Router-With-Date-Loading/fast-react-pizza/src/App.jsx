import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Menu from "./feactures/menu/Menu";
import Card from "./feactures/cart/Cart";
import CreateOder from "./feactures/order/CreateOrder";
import Order from "./feactures/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/oder/new",
        element: <CreateOder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
