 import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // ✅  
import { Authcontext } from "../../context/authprovider";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {

  const {user} = useContext(Authcontext)
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allproducts"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          All Products
        </NavLink>
      </li>
      {
        user &&<>
        <li>
        <NavLink
          to="/Myproducts"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          My Products
        </NavLink>
      </li>
       <li>
        <NavLink
          to="/Mybites"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          My Bites
        </NavLink>
      </li>
      </>
      }
    </>
  );
 

 
   const hendelsingout =  ()=>{
       signOut(auth).then(() => {
             toast.success(" Sing Out Success Now")
}).catch(error => {
  console.log(error)
});
   }
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="  md:ml-5 normal-case text-2xl font-bold">
          Smart Deals
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
         {
          user ? < Link  onClick={hendelsingout } className="mr-5 btn btn-primary">Sign Out</Link > :< Link to="/login" className="mr-5 btn btn-primary">Login</Link >
         }
      </div>
    </div>
  );
};

export default Navbar;
