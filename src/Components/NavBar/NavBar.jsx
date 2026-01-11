import { ShoppingCart } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
// import './NavBar.css'


const NavBar = () => {

  // using location
  const location = useLocation();
  const loacationPath = location.pathname;
  const link = (
    <>
      <NavLink
        to="/"
        className={
          ({isActive})=> 
        isActive ? 'underline' : ''}
      >
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({isActive})=> 
        isActive ? 'underline text-[#9538E2]' : ''
        }
      >
        Statistics
      </NavLink>
      <NavLink
      to="/dashboard"
        className={({isActive})=> 
        isActive ? 'underline text-[#9538E2]' : ''
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div className={`navbar bg-[#9538E2] shadow-sm px-20 ${
      loacationPath === '/' ? "bg-[#9538E2] rounded-t-2xl" : "bg-transparent"
    }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li>
            {link}
           </li>
          </ul>
        </div>
        <Link to={"/"}>
          <button className="cursor-pointer text-xl">Smart Shop</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="flex flex-row gap-4">
            {link}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="hover:border-6 border-gray-600 rounded-full p-1">
          <ShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
