import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <Error message="La page que vous recherchez n'existe pas." />,
      },
    ],
  },
]);

export { router };
