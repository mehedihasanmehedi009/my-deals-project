import { StrictMode } from 'react'
 
import './index.css'
 
import { router } from './Routs.jsx'
import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import Authprovider from './context/authprovider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
       <RouterProvider router={router} />
        <ToastContainer/>
   </Authprovider>
  </StrictMode>
)
