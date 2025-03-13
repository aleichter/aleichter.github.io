import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Leadership.css';

const Leadership = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { data } = await axios.get('/experience.json');
        setExperiences(data.experiences);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="leadership" className="leadership">
      <h2>My Leadership Style</h2>
      <p className="leadership-description">
        I believe in leading by example and fostering a collaborative environment where every team member feels valued and empowered. My leadership style is characterized by open communication, empathy, and a commitment to continuous improvement.
      </p>
      <h3>Leadership Experience</h3>
      <Carousel responsive={responsive} 
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
        customTransition="transform 500ms ease-in-out"
        showDots
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h4>{experience.title} at {experience.company}</h4>
            <p className="duration">{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Leadership;