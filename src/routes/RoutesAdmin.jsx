import { createBrowserRouter, Outlet } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";
import ProductsScreen from "../screens/Products/ProductsScreen";
import OrdersScreen from "../screens/Orders/OrdersScreen";
import TrackingScreen from "../screens/Tracking/TrackingScreen";
import Sidebar from '../components/Sidebar'
const AppLayout = () => {
  return (
    <div className="bg-gray-800 flex ">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

 export const RoutesAdmin = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/home",
        element: <HomeScreen />,
      },
      {
        path: "/products",
        element: <ProductsScreen />,
      },
      {
        path: "/orders",
        element: <OrdersScreen />,
      },
      {
        path: "/users",
        element: <OrdersScreen />,
      },
      {
        path: "/tracking",
        element: <TrackingScreen />,
      },
    ],
  },
]);

