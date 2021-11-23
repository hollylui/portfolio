import { Container } from "react-bootstrap";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

const AboutHeader = ({ aboutHeaderImage }) => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="aboutHeader header" id="top">
      <animated.div style={propsStyle}>
        <Container className="headerContainer">
          <div className="intro">
            <h1>About</h1>
            <p>
              Since Dec 2020, I got a lucky chance to pick up my hobby, my
              dream. Studying full-time Web Developer course in Digital Career
              Instition (DCI) brings my motivation, my life, my passion on
              frontend and backend development.
            </p>
          </div>
          <img src={aboutHeaderImage} alt="about img" />
        </Container>
      </animated.div>
    </div>
  );
};

export default AboutHeader;
