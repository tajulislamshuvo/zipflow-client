import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index:true,
        Component: Home
      },{
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch('/services.json').then(res => res.json())
      }
    ]
  }
]);