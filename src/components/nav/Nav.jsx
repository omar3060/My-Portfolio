import React, { useEffect, useReducer } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const navLinks = [
  { id: "#", sectionId: "home", icon: <IoHomeOutline /> },
  { id: "#skills", sectionId: "skills", icon: <LuUserRound /> },
  { id: "#services", sectionId: "services", icon: <BiBook /> },
  { id: "#projects", sectionId: "projects", icon: <RiServiceLine /> },
  { id: "#contact", sectionId: "contact", icon: <BiMessageSquareDetail /> },
];

function navReducer(state, action) {
  // return action.type === "SET_ACTIVE" ? action.payload : state;
  switch (action.type) {
    case "SET_ACTIVE": 
      return action.payload
    default:
      return state
  }
}
function Nav() {
  const [activeNav, dispatch] = useReducer(navReducer, "#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.sectionId === entry.target.id);
            if (link) {
              dispatch({ type: "SET_ACTIVE", payload: link.id });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav >
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
