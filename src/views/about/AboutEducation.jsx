import { Container } from "react-bootstrap";
import * as educationData from "../../assets/data/about/aboutEducation.json";

const AboutEducation = () => {
  const data = educationData.default;

  return (
    <div className="education">
      <p className="title">Education</p>
      <Container className="section">
        <table>
          <tr>
            <th>Year</th>
            <th>School</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id} className="tr-bottom">
                <td className="period">{item.period}</td>
                <td>
                  <div className="major">{item.major}</div>
                  {item.department !== "null" && (
                    <div className="department">{item.department}</div>
                  )}
                  <div className="school">{item.school}</div>
                </td>
              </tr>
            );
          })}
        </table>
      </Container>
    </div>
  );
};

export default AboutEducation;
