import { createBrowserRouter } from "react-router";
import Men from "../pages/Men";
import Women from "../pages/Women";
import App from "../App";

export const router = createBrowserRouter([
    {
        element: <App />, children: [
            { path: "/women", element: <Women /> },
            { path: "/men", element: <Men /> },
        ]
    },

])