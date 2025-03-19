import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiThreads } from "react-icons/si"; // Assuming Threads has a custom icon in `react-icons`
import { TbCloudStorm } from "react-icons/tb"; // Placeholder for Bluesky icon
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let's connect! Find me on these platforms:</p>
      <div className="contact-links">
        <a
          href="https://github.com/aleichter"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/andrewleichter"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
