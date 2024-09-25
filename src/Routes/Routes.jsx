import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bookings from "../Pages/Booking/Bookings";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

// import Banner from "../Pages/Banner/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/bookings"),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
