 import { createBrowserRouter } from "react-router";  
import Roots from "./Roots.jsx/Roots";
import Home from "./componentes/Home/Home";
import Allproducts from "./componentes/Allproducts/Allproducts";
import Singin from "./Singing/Singin";
import Registar from "./componentes/Registra/Registar";
import MyProducts from "./componentes/My Products/MyProducts";
import MyBites from "./componentes/My Bites/MyBites";
import ProductDetails from "./product/ProductDetails";
import PrivateRoute from "./PriveteRoute/PrivateRoute";
import CreatedProduct from "./createproduct/CreatedProduct";

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
          loader: async () => {
    const res = await fetch("http://localhost:3000/product");
    return res.json();
  },
        element: <Allproducts />  
      },
      {
        path: "Myproducts",
        element: <PrivateRoute> <MyProducts /> </PrivateRoute>
      },
      {
        path: "Mybites",
        element:<PrivateRoute>  <MyBites /> </PrivateRoute>
      },
      {
       path:"createdaproduct",
       element:<PrivateRoute><CreatedProduct></CreatedProduct></PrivateRoute>
      },
      {
        path: "Productditels/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/product/${params.id}`);
        },
        element:<PrivateRoute> <ProductDetails /></PrivateRoute>
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
