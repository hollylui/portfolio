import { homeSection3Images } from "./homeImage";
import { Container } from "react-bootstrap";

const [
  tms,
  blush,
  open_peeps,
  google_font,
  bootstrap,
  react_bootstrap,
  removebg,
  color_hunt,
  open_weather,
  flaticon,
  react_spring,
] = homeSection3Images;

const HomeSection3 = () => {
  return (
    <div className="homeSection3">
      <Container className="container">
        <p className="thanks">Thank You</p>
        <p>
          To successfully build this portfolio, many thanks to the following
          webpages and tools:
        </p>
        <div className="tools">
          <img src={tms} alt="TMS logo" />
          <img src={blush} alt="blush logo" />
          <img src={open_peeps} alt="open peeps logo" className="imgRadius" />
          <img src={google_font} alt="google font logo" />
          <img src={bootstrap} alt="bootstrap logo" />
          <img src={react_bootstrap} alt="react bootstrap logo" />
          <img src={removebg} alt="remove bg logo" />
          <img src={color_hunt} alt="color hunt logo" className="imgRadius" />
          <img
            src={open_weather}
            alt="open weather logo"
            className="imgRadius"
          />
          <img src={flaticon} alt="flaticon logo" className="imgRadius" />
          <img src={react_spring} alt="react-spring logo" />

          <p>TypewriterJS v2</p>
          <p>avataaars</p>
          <p>React Transition Group</p>
          <p>React Router Bootstrap</p>
          <p>React-Copy-to-Clipboard</p>
        </div>
      </Container>
    </div>
  );
};

export default HomeSection3;
