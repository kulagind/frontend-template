import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Test from "./app/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
