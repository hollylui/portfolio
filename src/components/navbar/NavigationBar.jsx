import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/image/home/logo_200x200.png";

// const { APIKEY } = process.env;
const APIKEY = "ab1e99483da6739bd388885399851226";

const NavigationBar = () => {
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  const city = "Kirchheim";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

  const getWeather = async () => {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    setTemp(data.main.temp);
    setIcon(data.weather[0].icon);
    setDescription(data.weather[0].description);
  };

  useEffect(() => getWeather(), []);

  const iconImg = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <Navbar className="navbar" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          <img className="logo" src={logo} alt="logo" />
          HOLLY LUI
        </Navbar.Brand>

        {/* Toggle menu */}
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer exact to="/">
              <Nav.Link id="navLinkColor">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/portfolio">
              <Nav.Link id="navLinkColor">Portfolio</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link id="navLinkColor">Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link id="navLinkColor">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link id="navLinkColor">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

        {description && (
          <div className="weather">
            <div>Kirchheim u. Teck:&nbsp; {temp}°C</div>
            <img src={iconImg} alt="" />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
