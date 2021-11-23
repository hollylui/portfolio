import { Container } from "react-bootstrap";
import { uibImages } from "./portfolioImages";

const Uib = ({ uibPortfolio }) => {
  return (
    <div className="uib">
      <p className="title">User Interface (UI) Basic</p>
      <Container className="portfolioSection">
        {uibPortfolio.map((portfolio, index) => {
          return (
            <div key={portfolio.id} className="eachPortfolio">
              <a href={portfolio.link} target="_black">
                <img src={uibImages[index]} alt={portfolio.title} />
              </a>
              <p className="exercise">{portfolio.title}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Uib;
