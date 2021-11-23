import { useState } from "react";

import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

import * as spaData from "../../assets/data/portfolio/spaData.json";
import * as uibData from "../../assets/data/portfolio/uibData.json";
import * as backendData from "../../assets/data/portfolio/backendData.json";
import * as freecodecampData from "../../assets/data/portfolio/freecodecampData.json";
import PortfolioHeader from "./PortfolioHeader";

import Spa from "./Spa";
import Uib from "./Uib";
import Backend from "./Backend";
import Footer from "../../components/footer/Footer";
import FreeCodeCamp from "./FreeCodeCamp";

const Portfolio = () => {
  const [spaPortfolio, setSpaPortfolio] = useState(spaData.default);
  const [uibPortfolio, setUibPortfolio] = useState(uibData.default);
  const [backendPortfolio, setBackendPortfolio] = useState(backendData.default);
  const [freeCodeCampPortfolio, setFreeCodeCamp] = useState(
    freecodecampData.default
  );

  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <animated.div style={propsStyle}>
      <PortfolioHeader />
      <Backend backendPortfolio={backendPortfolio} />
      <Spa spaPortfolio={spaPortfolio} />
      <Uib uibPortfolio={uibPortfolio} />
      <FreeCodeCamp freeCodeCampPortfolio={freeCodeCampPortfolio} />
      <Footer />
    </animated.div>
  );
};

export default Portfolio;
