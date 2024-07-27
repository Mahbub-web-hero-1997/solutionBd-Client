import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/Home/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import Banner from "../Pages/Banner/Banner";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // {
      //   path: '/banner',
      //   element: <Banner />,
      //   loader: () => fetch('http://localhost:5000/carousels/')
      // },
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
        
        
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
        
        
        
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
      }
      
     
    ],
  },  

]);
