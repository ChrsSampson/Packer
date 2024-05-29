import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { UserProvider } from "./lib/useUser.jsx";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/Login.jsx";
import FourOFour from "./pages/FourOFour.jsx";

const routes = [
    {
        index: true,
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <FourOFour />,
    },
];

const Router = createBrowserRouter(routes);

function App() {
    return (
        <ConfigProvider>
            <RouterProvider router={Router}>
                <UserProvider>
                    <Outlet />
                </UserProvider>
            </RouterProvider>
        </ConfigProvider>
    );
}

export { routes };
export default App;
