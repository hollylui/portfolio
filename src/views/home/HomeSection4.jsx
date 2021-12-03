import { Container } from "react-bootstrap";
import facebook from "../../assets/image/home/facebook.png";
import instagram from "../../assets/image/home/instagram.png";
import logo from "../../assets/image/home/logo_200x200.png";

const HomeSection4 = () => {
  return (
    <div className="homeSection4">
      <Container className="container">
        <img className="logo" src={logo} alt="" />
        <p>
          Here am I. Helping young and old businesses for planning and builidng
          websites. Check out my facebook and instagram to find out more about
          me.
        </p>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />

        {/* <hr /> */}

        {/* copyright  ----------------- */}
        {/* <div className="copyright">
          <span>2021© All rights reserved </span>

          <a className="backToTop" href="#top" title="Back to top">
            &#9650;
          </a>
        </div> */}
      </Container>
    </div>
  );
};

export default HomeSection4;
