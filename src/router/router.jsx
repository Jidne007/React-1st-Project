import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/AboutUs/About";
import Pricing from "../components/Pricing/Pricing";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:
            [
              {
                path: '/',
                element: <Home />
            },
              
            {
              path: '/about',
              element: <About />,
            },
            {
              path: '/pricing',
              element: <Pricing />,
            },
            
            {
              path: "/contact",
              element:<Contact/>
            },
            
            {
              path: "/services",
              element:<Services/>
            }

           ]
        
    }
])

export default router;