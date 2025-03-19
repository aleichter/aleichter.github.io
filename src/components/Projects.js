import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("https://www.andrewleichter.com/projects.json");
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="projects" className="projects">
      <h2>Key Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item" onClick={() => openModal(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h4>Technologies Used:</h4>
            <div className="technologies">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <h4>Impact:</h4>
            <p>{selectedProject.impact}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
