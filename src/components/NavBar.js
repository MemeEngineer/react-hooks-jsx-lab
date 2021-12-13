import React from "react";
import { name, city } from "../data/data.js";
import Home from "./Home.js"
import About from "./About.js"

function NavBar() {
  // update the JSX being returned!
  
  return <nav> 
  <a href = '#home'>Home </a>
  <a href = '#about'>About </a>
  </nav>;
}

export default NavBar;
