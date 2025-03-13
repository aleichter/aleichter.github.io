import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="profile.jpg" alt="About Me" className="about-image" />
        <p>
          With over 22 years of experience in application development and 16+ years in leadership roles, I have honed my skills in various domains including DevOps, streaming, data analytics, microservices, infastructure as code, and web development. My expertise spans across JavaScript, TypeScript, ReactJS, Java, C/C++, Go, Terraform and backend systems, enabling me to build scalable and user-friendly applications.
        </p>
        <p>
          Outside of technology, I'm passionate about music and perform with my band Weak Ass Mushroom Tea. I also enjoy creative pursuits like 3D modeling and animation, bringing ideas to life through digital art. To stay active and connected with nature, I'm an avid runner and hiker, always seeking new trails and adventures in the outdoors.
        </p>
      </div>
    </section>
  );
}

export default About;
