import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>CYBER CRAFT</h3>
        <div>
          <h1>8HR NATIONAL HACKATHON</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll STEPS!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            REGISTER
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
