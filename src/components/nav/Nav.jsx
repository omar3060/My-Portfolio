import React, { useReducer } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const navLinks = [
  { id: "#", icon: <IoHomeOutline /> },
  { id: "#skills", icon: <LuUserRound /> },
  { id: "#services", icon: <BiBook /> },
  { id: "#projects", icon: <RiServiceLine /> },
  { id: "#contact", icon: <BiMessageSquareDetail /> },
];

function navReducer(state, action) {
  return action.type === "SET_ACTIVE" ? action.payload : state;
}
function Nav() {
  const [activeNav, dispatch] = useReducer(navReducer, "#");
  return (
    <nav>
      {navLinks.map(({ id, icon }) => (
        <a
          key={id}
          href={id}
          className={activeNav === id ? "active" : ""}
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: id })}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
