import { createBrowserRouter } from "react-router";
import Men from "../pages/Men";
import Women from "../pages/Women";
import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Account from "../pages/Account";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";

export const router = createBrowserRouter([
    {
        element: <App />, children: [
            { path: "/", element: <Home /> },
            { path: "/women", element: <Women /> },
            { path: "/men", element: <Men /> },
            { path: "/categories/:category/:gender?", element: <Category /> },
            { path: "/product/:id", element: <Product /> },
            { path: "/user/:id", element: <Account /> },
            { path: "/wishlist", element: <Wishlist /> },
            { path: "/checkout", element: <Checkout /> },
        ]
    },

])