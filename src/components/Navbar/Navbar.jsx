import React, { useState } from "react";
import Logo from "./logo.svg";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#788195",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* NAVBAR */}
      <nav className="min-w-fit bg-grey flex justify-around py-2 mb-4">
        {/* LOGO */}
        <Link to="/">
          <div className="cursor-pointer place-self-center">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        {/* INICIO SESION Y MENU */}
        <div className="w-44 flex justify-around items-center">
          <ThemeProvider theme={theme}>
            {/* LOGIN BUTTON */}
            <Button className="bg-white" size="small" variant="outlined">
              Inciar sesion
            </Button>
            {/* HAMBURGUER MENU */}
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                onClick={showSidebar}
                className="fill-white text-3xl cursor-pointer"
              />
            </Link>
          </ThemeProvider>
        </div>
        {/* HIDDEN MENU */}
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li onClick={showSidebar} className="navbar-toogle w-fit flex">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="fill-white hover:bg-blue_hover text-3xl my-4 ml-2 cursor-pointer" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  onClick={showSidebar}
                  key={index}
                  className={`${item.cName}`}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
