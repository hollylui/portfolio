import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";
import { useSpring, animated } from "react-spring";
import AboutHeader from "./AboutHeader";
import aboutHeaderImage from "../../assets/image/about/aboutHeaderImage.png";
import AboutExperience from "./AboutExperience";
import AboutEducation from "./AboutEducation";
import AboutSkillsList from "./AboutSkillsList";
import Footer from "../../components/footer/Footer";

const About = () => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <animated.div style={propsStyle}>
      <AboutHeader aboutHeaderImage={aboutHeaderImage} />
      <AboutSkillsList />
      <AboutEducation />
      <AboutExperience />
      <Footer />
    </animated.div>
  );
};

export default About;
