import { Container } from "react-bootstrap";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

const ContactHeader = ({ contactHeaderImage }) => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="contactHeader header" id="top">
      <animated.div style={propsStyle}>
        <Container className="headerContainer">
          <div className="intro">
            <h1>Contact</h1>
            <p>
              I help you to bring your idea into virutal world and enhance your
              existing one. Feel free to contact me, write me and suprise me.
              Any questions about
            </p>
          </div>
          <img src={contactHeaderImage} alt="about img" />
        </Container>
      </animated.div>
    </div>
  );
};

export default ContactHeader;
