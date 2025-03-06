import React from "react";
import "./projects.css";
import TopSection from "../topSection/TopSection";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    animate: true,
    animation: "fade-right",
    title: "React & Firebase Amazon Clone",
    desc: "ShoppingCart, PaymentMethod,  CreatingOrders, Firebase for DataBase and Authentication",
    github: "https://github.com/omar3060/Amazon-Clone",
    demo: "https://regal-phoenix-dde71b.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    animate: false,
    title: "React Dribble Design",
    desc: "CSS Modules, Pixel Perfect, Responsive on all screens,React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/landing-page-task-react",
    demo: "https://landing-page-task-react-v1.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    animate: true,
    animation: "fade-left",
    title: "React Fit Club",
    desc: "MailJS library, Pixel Perfect, Responsive on all screens,React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/Fit-Club",
    demo: "https://sparkly-paprenjak-760413.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    animate: true,
    animation: "fade-right",
    title: "React Landing Page",
    desc: "TailwindCSS, Pixel Perfect, Responsive on all screens, React Best Practices, Scalable and Maintainable code",
    github: "https://github.com/omar3060/landing-tailwind",
    demo: "https://landing-tailwind-umber.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    animate: false,
    title: "Native Landing Page",
    desc: "Bootstrap, Pixel Perfect, Responsive on all screens",
    github: "https://github.com/omar3060/shuffle-landing",
    demo: "https://shuffle-assignment-landing-page.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    animate: true,
    animation: "fade-left",
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
        {portfolioData.map(
          ({ id, image, animate, animation, title, desc, github, demo }) => (
            <article
              className="portfolio_item"
              key={id}
              data-aos={animate ? animation : undefined}
            >
              <div className="portfolio_item_img" key={id}>
                <img src={image} alt={`${title}`} loading="lazy" />
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
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
