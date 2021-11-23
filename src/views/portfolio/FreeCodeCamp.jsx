import { Container } from "react-bootstrap";
import { freecodecampImages } from "./portfolioImages";

const FreeCodeCamp = ({ freeCodeCampPortfolio }) => {
  return (
    <div>
      <div className="freeCodeCamp">
        <p className="title">freeCodeCamp</p>
        <Container className="portfolioSection">
          {freeCodeCampPortfolio.map((portfolio, index) => {
            return (
              <div key={portfolio.id} className="eachPortfolio">
                <a href={portfolio.link} target="_black">
                  <img src={freecodecampImages[index]} alt={portfolio.title} />
                </a>
                <p className="exercise">{portfolio.title}</p>
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default FreeCodeCamp;
