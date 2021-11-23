import { Container } from "react-bootstrap";
import { backendImages } from "./portfolioImages";

const Backend = ({ backendPortfolio }) => {
  return (
    <div className="backend">
      <p className="title">Backend</p>
      <Container className="portfolioSection">
        {backendPortfolio.map((portfolio, index) => {
          return (
            <div key={portfolio.id} className="eachPortfolio">
              <a href={portfolio.link} target="_black">
                <img src={backendImages[index]} alt={portfolio.title} />
              </a>
              <p className="exercise">{portfolio.title}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Backend;
