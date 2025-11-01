import { createBrowserRouter } from "react-router";
import Roots from "./Roots.jsx/Roots";
import Home from "./componentes/Home/Home";
import Allproducts from "./componentes/Allproducts/Allproducts";
import Singin from "./Singing/Singin";
import Registar from "./componentes/Registra/Registar";
import MyProducts from "./componentes/My Products/MyProducts";
import MyBites from "./componentes/My Bites/MyBites";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
   {
     index:true,
     Component:Home
   },{
    path:"/allproducts",
    Component:Allproducts
   }
   ,
   {path:"/Myproducts",
    element:<MyProducts></MyProducts>
   },
   {path:"/Mybites",
    element:<MyBites></MyBites>

   },
   {
    path:"/login",
    element:<Singin></Singin>
  }
  ,{path:"/registar",
    element:<Registar></Registar>
  }
    ]
  },
  
]);