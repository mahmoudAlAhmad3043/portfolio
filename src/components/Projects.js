import linkIcon from 'src/images/link.png'
import githubIcon from 'src/images/gitIcon.png'

export default function Projects() {
  const arr = [
    {
      title: "Web chat application",
      subTitle: "Server & Client",
      description: "This is web chat application , developed by myself, using by React js and Node js , socket.io , MySQL database.",
      tags: ["MySQL","Node.js","React"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/web-chat',
      demoLinks: "https://github.com/mahmoudAlAhmad3043/web-chat"
    },
    {
      title: "Codeforces Helper web platform",
      subTitle: "Recommendation system",
      description: "This is Recommendation system for problems solving on Codeforces.",
      tags: ["Python","React"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/codeforces_helper',
      demoLinks: "https://github.com/mahmoudAlAhmad3043/codeforces_helper"
    },
    {
      title: "Turism application",
      subTitle: "Java application",
      description: "This application is used to perform calculations related to a tourist office that includes photographers, tour guides, and management. It was developed using the Java language.",
      tags: ["Java","SQLite DB"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/Turism_App',
      demoLinks: "https://github.com/mahmoudAlAhmad3043/Turism_App"
    },
    {
      title: "Clock application",
      subTitle: "Open GL",
      description: "This clock application, it was developed using The C++ and Open GL library.",
      tags: ["C++","Open GL"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/My-Projects/tree/main/Open_GL',
      demoLinks: "https://github.com/mahmoudAlAhmad3043/My-Projects/tree/main/Open_GL"
    },
    {
      title: "Leon website",
      subTitle: "Website",
      description: "Website ,it was developed using HTML and CSS.",
      tags: ["HTML","CSS"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/Leon',
      demoLinks: "https://mahmoudalahmad3043.github.io/Leon/"
    },
    {
      title: "My Portfolio",
      subTitle: "Portfolio",
      description: "This is my portfolio, it was developed using React",
      tags: ["React"],
      gitHubLink:'https://github.com/mahmoudAlAhmad3043/Portfolio',
      demoLinks: "https://mahmoudAlAhmad3043.github.io/Portfolio/"
    },
  ];
  return (
    <div className="bg-projects" id="/projects">
      <div className="container w-100 d-flex flex-column align-items-center py-2">
        <div className="skills-title fs-3">Featured Projects</div>
        <p className="skills-p my-3 text-center">Here are some of my recent projects that showcase my skills and creativity.</p>
        <div className="d-flex mt-4 w-100 flex-wrap skills-container">
          {arr.map((value, index) => (
            <div className="project-card" key={index}>
                <div className="title">{value.title}</div>
                <div className="sub-title">{value.subTitle}</div>
                <p className="description">{value.description}</p>
                <div className="tags d-flex flex-wrap gap-2">
                  {
                    value.tags.map((tag,tagId) => (
                        <div className="tag" key={tagId}>{tag}</div>
                      )
                    )
                  }
                </div>
                <div className="d-flex justify-content-between mt-3 flex-wrap links-container">
                  <a className="project-link d-flex align-items-center justify-content-center text-decoration-none text-center rounded-4 py-1 px-3" href={value.demoLinks}>
                    <img className='me-2' src={linkIcon} alt='icon'/>
                    <span>View poject</span>
                  </a>
                  <a className="github-link text-decoration-none text-center rounded-4 py-1" href={value.gitHubLink}>
                    <img src={githubIcon}  alt="icon"/>
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
