import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";

import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <animated.div style={propsStyle}>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Footer />
    </animated.div>
  );
};

export default Home;
