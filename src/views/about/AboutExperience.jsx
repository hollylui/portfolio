import { Container } from "react-bootstrap";
import * as experienceData from "../../assets/data/about/aboutExperience.json";

const AboutExperience = () => {
  const data = experienceData.default;

  return (
    <div className="experience">
      <p className="title">Experience</p>
      <Container className="section">
        <table>
          <tr>
            <th>Year</th>
            <th>Description</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id} className="tr-bottom">
                <td className="period">{item.period}</td>
                <td>
                  <div className="position">{item.position}</div>
                  <div className="company">{item.company}</div>
                  <div className="duty">
                    {item.duties.map((duty, index) => {
                      return <div>&#8226; {duty}</div>;
                    })}
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </Container>
    </div>
  );
};

export default AboutExperience;
