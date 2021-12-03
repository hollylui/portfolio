import { Container } from "react-bootstrap";
import logo from "../../assets/image/home/logo_200x200.png";

const Footer = () => {
  return (
    <footer>
      <Container className="footerContainer">
        <div className="gridContainer">
          {/* copryright ----------------------------------- */}
          <div className="gridRight">
            <img src={logo} alt="logo" className="footerImage" />
          </div>

          {/* back to top --------------------------------- */}
          <div className="gridBackToTop">
            <a href="#top" title="Back to top">
              &#9650;
            </a>
          </div>

          {/* logo ---------------------------------- */}
          <div className="gridLeft">
            <span>2021© All rights reserved </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
