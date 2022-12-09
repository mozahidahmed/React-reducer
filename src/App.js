import { RouterProvider } from "react-router-dom";
import ProductsProvider from "./componenets/context/ProductsProvider";
import routes from "./componenets/routes/Routes";

function App() {
  return (
    <div>
     
 <ProductsProvider>
 <RouterProvider router={routes} />
 </ProductsProvider>

       
   
    
    </div>
  );
}

export default App;
