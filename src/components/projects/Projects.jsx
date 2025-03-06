import React from "react";
import "./Projects.css";
import TopSection from "../topSection/TopSection";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "React & Firebase Amazon Clone",
    desc: "ShoppingCart, PaymentMethod,  CreatingOrders, Firebase for DataBase and Authentication",
    github: "https://github.com/project1",
    demo: "https://regal-phoenix-dde71b.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Dribble Design",
    desc: "CSS Modules, Pixel Perfect, Responsive on all screens,React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/landing-page-task-react",
    demo: "https://landing-page-task-react-v1.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "React Fit Club",
    desc: "MailJS library, Pixel Perfect, Responsive on all screens,React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/Fit-Club",
    demo: "https://sparkly-paprenjak-760413.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Landing Page",
    desc: "TailwindCSS, Pixel Perfect, Responsive on all screens, React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/landing-tailwind",
    demo: "https://landing-tailwind-umber.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Native Landing Page",
    desc: "Bootstrap, Pixel Perfect, Responsive on all screens",
    github: "https://github.com/omar3060/shuffle-landing",
    demo: "https://shuffle-assignment-landing-page.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Native Portfolio (Freelance)",
    desc: "Develop responsive, accessible Quran Teacher Portfolio (Arabic & English)",
    github: "https://github.com/omar3060/quran-teacher-portfolio",
    demo: "https://quran-teacher-portfolio.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <TopSection heading5="My Recent Work" heading2="Portfolio" />
      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, desc, github, demo }) => (
          <article className="portfolio_item">
            <div className="portfolio_item_img" key={id}>
              <img src={image} alt={`${title}`} />
              <div className="portfolio_overlay">
                <p>{desc}</p>
              </div>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_btns">
              <a href={github} target="_blank" className="btn">
                GitHub
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
