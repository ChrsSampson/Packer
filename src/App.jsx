import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

import HomePage from "./pages/HomePage";

const routes = [
    {
        index: true,
        path: "/",
        element: <HomePage />,
    },
];

const Router = createBrowserRouter(routes);

function App() {
    return (
        <ConfigProvider>
            <RouterProvider router={Router} />
        </ConfigProvider>
    );
}

export default App;
