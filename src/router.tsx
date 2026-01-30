import { createBrowserRouter } from "react-router-dom";
import { Home, Layout } from "./views";

export const Router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
        ]
    }
])