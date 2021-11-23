import { Container } from "react-bootstrap";
import peopleImage from "../../assets/image/home/people_1200x640_tran.png";

const HomeSection2 = () => {
  return (
    <div className="homeSection2">
      <Container className="container">
        <img src={peopleImage} alt="" />
        <div className="briefInto">
          <p>
            I am from Hong Kong and currently live in Kirchheim unter Teck,
            Germany. The world is full of people and I help different kinds and
            different ways. I would like to help small agencie and busineses to
            bring their idea to life.
          </p>
          <p>
            Check out my resume. Feel free to talke a look at my latest projects
            on portfolio page and contact me any time:{" "}
            <span>hollylui@gmail.com</span>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomeSection2;
