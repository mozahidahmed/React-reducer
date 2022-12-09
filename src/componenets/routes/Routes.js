import { createBrowserRouter } from "react-router-dom";
import GetData from "../Getdata/GetData";
import TopRated from "../Getdata/TopRated/TopRated";
import Home from "../Home";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <GetData/>,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      }
      
      
    ],
  },
]);

export default Routes;



 