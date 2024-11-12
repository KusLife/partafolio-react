import React from 'react';
import prof_pic from '../assets/pictures/prof_pic.JPEG';
import './About.css';

function About() {
  return (
    <section id="about">
      <container className="about-hardSkills">
        <div className="section-photo">
          <img src={prof_pic} alt="Your Name" className="profile-pic" />
          <h2>Hello, I’m Kyrylo but you may call me Kyro!</h2>
          <p>
            I’m a front-end developer with a passion for creating interactive
            and accessible web experiences. With a background in design, I enjoy
            making websites that are both beautiful and user-friendly.
          </p>
        </div>
        <div className="section-skills">
          <h3>KNOWLAGE</h3>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>JavaScript & React</li>
            <li>UI/UX Design in Figma</li>
            <li>Responsive Web Development</li>
          </ul>
        </div>
        <div className="section-education">
          <h3>EDUCATION</h3>
          <ul className="education-list">
            <li>2020-2021 Online courses</li>
            <li>2022 Contiue selfdedactive graduatio</li>
          </ul>
        </div>
      </container>

      <container className="about-softSkills">

        <div className='photos-carusel'>

        </div>
        <div className='softskills'>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </container>

      <p className="fun-fact">
        Fun fact: I’ve hiked over 200 miles of the Pacific Coast Trail!
      </p>
      <button className="cta-button">Contact Me</button>
    </section>
  );
}

export default About;
