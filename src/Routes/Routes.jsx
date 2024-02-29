import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import { element } from "prop-types";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/Home/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
        path: "/services",
        element: <Services/>,
        loader: ({ params }) => fetch(`http://localhost:5000/services`),
        
        
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        
        
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        
        
      },
      {
        path: "/about",
        element:<About/>
      }
     
    ],
  },
]);
