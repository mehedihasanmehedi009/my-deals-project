import { createBrowserRouter } from "react-router";
import Roots from "./Roots.jsx/Roots";
import Home from "./componentes/Home/Home";
import Allproducts from "./componentes/Allproducts/Allproducts";
import Singin from "./Singing/Singin";
import Registar from "./componentes/Registra/Registar";
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
    ]
  },
  {
    path:"/login",
    element:<Singin></Singin>
  }
  ,{path:"/registar",
    element:<Registar></Registar>

  }
]);