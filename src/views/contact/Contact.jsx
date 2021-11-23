import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";
import { useSpring, animated } from "react-spring";

import ContactHeader from "./ContactHeader";
import contactHeaderImage from "../../assets/image/contact/contactHeaderImage.png";
import ContactContent from "./ContactContent";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <animated.div style={propsStyle}>
      <ContactHeader contactHeaderImage={contactHeaderImage} />
      <ContactContent />
      <Footer />
    </animated.div>
  );
};

export default Contact;
