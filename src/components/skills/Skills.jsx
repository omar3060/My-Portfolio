import React from "react";
import "./skills.css";
import TopSection from "../topSection/TopSection";

import { BsPatchCheckFill } from "react-icons/bs";
import Css from "../../assets/css3.svg";
import Xpressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";

const SkillsData = [
  {
    id: 1,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 2,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 3,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 4,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 5,
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },
  {
    id: 6,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: 7,
    image: Xpressjs,
    title: "ExpressJS",
    disc: "Node Framework",
  },
  {
    id: 8,
    image: Mongodb,
    title: "MongoDB",
    disc: "Database",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <TopSection heading2="My Experience" heading5="What Skills I Have" />

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article className="card_skill" key={id}>
            <div className="icon">
              <img src={image} alt={`${title} image`} />
            </div>
            <div className="contact">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
