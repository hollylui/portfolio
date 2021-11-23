import { Container } from "react-bootstrap";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

const BlogHeader = ({ blogHeaderImage }) => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="blogHeader header" id="top">
      <animated.div style={propsStyle}>
        <Container className="headerContainer">
          <div className="intro">
            <h1>Blog</h1>
            <p>
              The best way to know more about my personality, my hobbies, my
              thinking. You can find it here, dig it here. Want much more? You
              can follow me in Linkedin, Facebook and Instagram.
            </p>
          </div>
          <img src={blogHeaderImage} alt="blog img" />
        </Container>
      </animated.div>
    </div>
  );
};

export default BlogHeader;
