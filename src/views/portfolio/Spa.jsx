import { Container } from "react-bootstrap";
import { spaImages } from "./portfolioImages";

const Spa = ({ spaPortfolio }) => {
  return (
    <div className="spa">
      <p className="title">Single Page Applicaiton (SPA)</p>
      <Container className="portfolioSection">
        {spaPortfolio.map((portfolio, index) => {
          return (
            <div key={portfolio.id} className="eachPortfolio">
              <a href={portfolio.link} target="_black">
                <img src={spaImages[index]} alt={portfolio.title} />
              </a>
              <p className="exercise">{portfolio.title}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Spa;
