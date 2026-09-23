import skill1 from "src/images/code-solid.png";
import skill2 from "src/images/backend.png"
import skill3 from "src/images/framework-icon.png"
import skill4 from "src/images/tools-icon.png"
import skill5 from "src/images/architechture.png"
import skill6 from "src/images/creative-thinking.png"
import { useIsMobile } from 'src/utils/index'

export default function Skills() {
  const t = !useIsMobile(768)
  const arr = [
    {
      title: "Programming",
      description: "JavaScript, TypeScript, Java, HTML, CSS",
      icon: skill1
    },
    {
      title: "Backend & Database",
      description: "Node.js, Express.js, MySQL, MongoDB",
      icon: skill2
    },
    {
      title: "Frameworks & Libraries",
      description: "React, Vue.js, React Native, Bootstrap, Tailwind CSS",
      icon: skill3
    },
    {
      title: "Tools & Version Control",
      description: "VS Code, Figma, Postman, Git, GitHub",
      icon: skill4
    },
    {
      title: "Software Engineering",
      description: "OOP, Algorithms, Data Structures, ERD, UML",
      icon: skill5
    },
    {
      title: "Soft Skills",
      description: "Problem Solving, Teamwork, Communication, Adaptability, Time Management",
      icon: skill6
    }
  ];
  return (
    <div className="bg-skills" id="/skills">
      <div className="container w-100 d-flex flex-column align-items-center py-2">
        <div className="skills-title fs-3">My Skills</div>
        <p className="skills-p my-3 text-center">My technical toolkit for building responsive, scalable, and user-friendly web applications</p>
        <div className="d-flex mt-4 w-100 flex-wrap skills-container">
          {arr.map((value, index) => (
            t ? 
            <div className="skill-card p-4 text-center" key={index}>
              <div className="icon">
                <img src={value.icon} alt="icon"/>
              </div>
              <div className="title mt-4 mb-3">{value.title}</div>
              <p>{value.description}</p>
            </div> 
            : 
            <div className="skill-card-mobile p-3 mx-3 w-100" key={index}>
              <div className="icon">
                <img src={value.icon} alt="icon"/>
              </div>
              <div>
                <div className="title">{value.title}</div>
                <p className="mb-0">{value.description}</p>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
}
