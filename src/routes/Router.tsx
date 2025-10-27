import { createBrowserRouter } from "react-router";
import Men from "../pages/Men";
import Women from "../pages/Women";
import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/Category";

export const router = createBrowserRouter([
    {
        element: <App />, children: [
            { path: "/", element: <Home /> },
            { path: "/women", element: <Women /> },
            { path: "/men", element: <Men /> },
            { path: "/categories/:category/:gender?", element: <Category /> },
        ]
    },

])