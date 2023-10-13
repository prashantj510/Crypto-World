import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import sun from "./../Assets/sun.png"
import moon from "./../Assets/moon.png"
const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className=" p-2">
      {theme === "dark" ? (
        <div  className=" flex items-center cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <img className=" mr-2 w-7" src={sun} alt="Sun"/> 
        </div>
      ) : (
        <div className=" flex items-center cursor-pointer"  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <img className=" mr-2 w-7" src={moon} alt="Sun"/> 
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
