 import { createBrowserRouter } from "react-router"; // make sure to import from react-router-dom
import Roots from "./Roots.jsx/Roots";
import Home from "./componentes/Home/Home";
import Allproducts from "./componentes/Allproducts/Allproducts";
import Singin from "./Singing/Singin";
import Registar from "./componentes/Registra/Registar";
import MyProducts from "./componentes/My Products/MyProducts";
import MyBites from "./componentes/My Bites/MyBites";
import ProductDetails from "./product/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,       
        element: <Home />  
      },
      {
        path: "allproducts",
        element: <Allproducts />  
      },
      {
        path: "Myproducts",
        element: <MyProducts />
      },
      {
        path: "Mybites",
        element: <MyBites />
      },
      {
        path: "Productditels/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/product/${params.id}`);
        },
        element: <ProductDetails />
      },
      {
        path: "login",
        element: <Singin />
      },
      {
        path: "registar",
        element: <Registar />
      }
    ]
  }
]);
