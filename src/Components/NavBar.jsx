import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import LogIn from "./LogInButton/LogIn";
import menu from "./../Assets/menu.png";
import cross from "./../Assets/cross.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between items-center rounded-div h-20 font-bold  ">
      <Link to="/">
        <h1 className="text-2xl">CryptoWorld</h1>
      </Link>
      <div className="  hidden md:flex">
        <div className=" w-full">
          <Link to="/SignIn">
            <LogIn text="Log In" />
          </Link>
          <Link to="/SignUp">
            {" "}
            <LogIn text="Sign UP" />
          </Link>
        </div>
        <ToggleTheme />
      </div>
      {/* Menu Icon */}
      <div onClick={handleNav} className=" w-7 block md:hidden ">
        {nav ? (
          <img src={cross} className="w-8" alt="X" />
        ) : (
          <img src={menu} alt="Menu" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-[5.5rem] left-0  flex flex-col justify-between items-center w-full h-[60%] bg-red-50 ease-in duration-300 z-10 rounded-div mt-4 "
            : "hidden "
        }
      >
        <ul className=" w-full p-4 flex flex-col items-center justify-center ">
          <li className=" m-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className=" m-4 text-xl">
            <Link to="/Account">Account</Link>
          </li>
          <li>
            <ToggleTheme />
          </li>
          <div className=" mt-6">
            <Link to="/SignIn">
              <LogIn text="Log In" />
            </Link>
            <Link to="/SignUp">
              {" "}
              <LogIn text="Sign UP" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
