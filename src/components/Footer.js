import { useIsMobile } from 'src/utils/index'

export default function Footer() {
  const t = !useIsMobile(768)
  return (
    <div className="bg-footer p-3">
      <div className={(t ? "justify-content-between" : "justify-content-center") + " container w-100 d-flex flex-wrap text-center align-items-center py-2 gap-2 footer-container"}>
        <div>© 2026 Mahmoud Alahmad — Built with React</div>
        <div className="navbar-nav flex-row justify-content-center column-gap-2 flex-wrap">
            <a className="nav-item nav-link" href="#/home">Home</a>
            <a className="nav-item nav-link" href="#/about">About</a>
            <a className="nav-item nav-link" href="#/skills">Skills</a>
            <a className="nav-item nav-link" href="#/projects">Projects</a>
            <a className="nav-item nav-link" href="#/contact">Contact</a>
          </div>
      </div>
    </div>
  );
}
