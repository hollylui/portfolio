import { Container } from "react-bootstrap";
import portfolioHeaderImage from "../../assets/image/portfolio/portfolioHeaderImage.png";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

const PortfolioHeader = () => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="portfolioHeader header" id="top">
      <animated.div style={propsStyle}>
        <Container className="headerContainer">
          <div className="intro">
            <h1>Portfolio</h1>
            <p>
              To be a good web developer, nothing better than practicing. Some
              of my meaningful projects, assignments and exercises during
              one-year full-time Web Development course in Digital Career
              Institute (DCI) are listed here.
            </p>
          </div>
          <img src={portfolioHeaderImage} alt="portfolio img" />
        </Container>
      </animated.div>
    </div>
  );
};

export default PortfolioHeader;
