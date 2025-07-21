import { createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./Layout";
import { Home } from "./Pages/Home";
import { Tutoriais } from "./Pages/Tutoriais";
import { Register } from "./Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tutoriais",
                element: <Tutoriais />
            },
            {
                path: "/cadastrar",
                element: <Register />
            },
        ]
    }
]);

export default router;