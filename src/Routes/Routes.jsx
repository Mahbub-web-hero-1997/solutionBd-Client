import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [{
            
        }]
    }
])