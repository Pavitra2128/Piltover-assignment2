import React from 'react';
import './About.css'; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Shri Vishnu Engineering College for Women</h1>
      <div className="history">
        <h2>History</h2>
        <p>
          Shri Vishnu Engineering College for Women (SVECW) was established in the year 2001 with the vision of empowering women in the field of engineering and technology. It is part of the esteemed Shri Vishnu Educational Society, which has a rich legacy of providing quality education.
        </p>
      </div>
      <div className="mission">
        <h2>Mission</h2>
        <p>
          The mission of SVECW is to provide a conducive learning environment that nurtures intellectual growth, fosters innovation, and instills ethical values among students. The college is committed to producing competent engineers and technocrats who can contribute positively to society.
        </p>
      </div>
      <div className="values">
        <h2>Values</h2>
        <p>
          SVECW upholds the values of integrity, excellence, inclusivity, and social responsibility. These values guide the college in its pursuit of academic excellence, research and innovation, industry collaboration, and community engagement.
        </p>
      </div>
    </div>
  );
};

export default About;
