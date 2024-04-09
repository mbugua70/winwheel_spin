import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from "../pages/userformPage";
// import SpinWheel from "../pages/spinwheelPage";
import ParentLayout from "../layout/parentLayout";
import SpinWheel from "../pages/spinwheelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentLayout />,
    children: [
      {
        index: true,
        element: <UserForm />,
      },
      {
        path: "/spin",
        element: <SpinWheel />,
      },
    ],
  },
]);
const ParentRouter = () => {
  return <RouterProvider router={router} />;
};

export default ParentRouter;
