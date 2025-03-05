import React from "react";
import "./about.css";
import TopSection from "../topSection/TopSection";
import AboutImg from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section className="about" id="about">
      <TopSection heading5="Get To Know" heading2="About Me" />

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={AboutImg} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>1+ years working</small>
            </div>
            <div className="about_card">
              <FaUsers className="about_icon"/>
              <h5>clients</h5>
              <small>2</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>16 Completed</small>
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae omnis voluptatibus cum praesentium inventore placeat reprehenderit distinctio ratione. Maiores, aperiam debitis? Ullam at voluptatem dolorum qui minus officiis accusamus!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
