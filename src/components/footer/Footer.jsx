import { Container } from "react-bootstrap";
import logo from "../../assets/image/home/logo_200x200.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footerContainer">
        <div className="gridContainer">
          {/* copryright ----------------------------------- */}
          <div className="gridCopyright">
            <span>2021© All rights reserved </span>
          </div>

          {/* back to top --------------------------------- */}
          <div className="gridBackToTop">
            <a href="#top" title="Back to top">
              &#9650;
            </a>
          </div>

          {/* logo ---------------------------------- */}
          <div className="gridLogo">
            <img src={logo} alt="logo" className="footerImage" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
