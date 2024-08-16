import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/Home/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bookings from "../Pages/Booking/Bookings";
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
        path: "/services",
        element: <Services/>, 
              
        },
      {
        path: "services/:id",
        element: <ServiceDetails />,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)        
        
      },     
      {
        path: "checkout/:id",
        element: <CheckOut />,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)      
        
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/register",
        element:<Register/>
      },
      {
        path: "/bookings",
        element: <Bookings />,
        loader: () => fetch('http://localhost:5000/booking')
      }
      
     
    ],
  },  

]);
