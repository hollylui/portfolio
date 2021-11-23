import Typewriter from "typewriter-effect";
import tech_life_media from "../../assets/image/home/tech_life_media.png";
import { Container } from "react-bootstrap";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

const HomeSection1 = () => {
  const pFontSize = { fontSize: "5rem" };
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="homeHeader header" id="top">
      <animated.div style={propsStyle}>
        <Container className="headerContainer">
          <div className="intro">
            <p style={pFontSize}>Hello, I am Holly. </p>
            <p style={pFontSize}>I build great websites</p>

            <div className="skills">
              <p style={pFontSize}>with&nbsp;</p>
              <div className="typewriter">
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("HTML & CSS.")
                      .pauseFor(750)
                      .deleteAll()
                      .typeString("JavaScript.")
                      .pauseFor(750)
                      .deleteAll()
                      .typeString("Bootstrap.")
                      .pauseFor(750)
                      .deleteAll()
                      .typeString("React.")
                      .pauseFor(750)
                      .deleteAll()
                      .typeString("Node.js.")
                      .pauseFor(750)
                      .deleteAll()
                      .typeString("Express.js.")
                      .pauseFor(750)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
          <img src={tech_life_media} alt="" />
        </Container>
      </animated.div>
    </div>
  );
};

export default HomeSection1;
