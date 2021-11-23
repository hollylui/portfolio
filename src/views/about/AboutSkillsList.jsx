import { Container } from "react-bootstrap";
import { skillsList } from "./aboutSkillsListImages";

const AboutSkillsList = () => {
  const altContent = [
    "HTML 5",
    "CSS 2",
    "JavaScript",
    "sass",
    "Bootstrap 5",
    "gitHub",
    "Markdown",
    "React",
    "Node.js",
    "Visual Studio Code",
    "npm",
    "JSON",
    "Terminal",
    "React-Bootstrap",
    "Express.js",
    "Insomnia",
    "MongoDB",
    "mongoose",
  ];
  return (
    <div className="skillsList">
      <p className="title">Skills List</p>
      <Container className="skillsSection">
        {skillsList.map((skill, index) => (
          <img
            key={index}
            src={skill}
            alt={altContent[index]}
            title={altContent[index]}
          />
        ))}
      </Container>
    </div>
  );
};

export default AboutSkillsList;
