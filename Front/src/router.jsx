import { createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./Layout";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
]);

export default router;