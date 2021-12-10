import { useContext } from "react";
import ScrollContext from "../../context/ScrollContext";
import { useSpring, animated } from "react-spring";

//source: https://giphy.com/gifs/STARFACE-GmbH-looping-404-starface-UoeaPqYrimha6rdTFV
import message404 from "../../assets/image/notFound/message404.gif";

const NotFoundContent = () => {
  const { springProps } = useContext(ScrollContext);
  const propsStyle = useSpring(springProps);

  return (
    <div className="notFoundContent">
      <p>Sorry, your page does not exist.</p>
      <animated.div style={propsStyle}>
        <img src={message404} alt="Error 404" />
      </animated.div>
    </div>
  );
};

export default NotFoundContent;
