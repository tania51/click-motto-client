import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddImage from "../component/AddImage/AddImage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/add-image",
      element: <AddImage></AddImage>
    }
  ]);

  export default router;