import React, { useEffect, useState } from 'react'
import { useIsMobile } from 'src/utils/index'
import rejectIcon from 'src/images/reject.png'
function Header() {

  const [navBarState,setNavBarState] = useState(false)

  const toggleNavBar = () => {
    setNavBarState((pre) => (!pre))
  }
  //------- Start Header navbar control -------------
  const useIsMobile992 = useIsMobile(992)
  useEffect(() => {
    if (!useIsMobile992) {
      setNavBarState(false)
    }
  }, [useIsMobile992])
  // ------- End Header navbar control --------------
  return (
    <div className='position-fixed w-100 header-bg p-2 z-3'>
      <nav className="container d-flex justify-content-between align-items-center navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand brand-style" href="#/home">
            <div className={(useIsMobile(768) ? 'fs-6':'fs-5' )}>
              <span className='sky-color'>Mahmoud &nbsp;</span>
              <span>Alahmad</span>
            </div>
        </a>
        <button className="navbar-toggler navbar-btn position-relative" type="button" data-toggle="collapse" aria-label="Toggle navigation" 
          onClick={() => toggleNavBar()} >
            {
            navBarState ? 
              <img src={rejectIcon} alt='icon' className='drop-nav-btn'/>
              : 
              <>
                <div className='navbar-btn-bar'></div>
                <div className='navbar-btn-bar'></div>
                <div className='navbar-btn-bar'></div>
              </> 
            }
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-light" href="#/home">Home</a>
            <a className="nav-item nav-link text-light" href="#/about">About</a>
            <a className="nav-item nav-link text-light" href="#/skills">Skills</a>
            <a className="nav-item nav-link text-light" href="#/projects">Projects</a>
            <a className="nav-item nav-link text-light" href="#/contact">Contact</a>
          </div>
        </div>
      </nav>
      <div className={navBarState ? 'row text-center d-flex gap-1' : 'row text-center d-none'}>
            <a className="nav-item nav-link text-light mobile-nav-item" href="#/home" onClick={() => toggleNavBar()}>Home</a>
            <a className="nav-item nav-link text-light mobile-nav-item" href="#/about" onClick={() => toggleNavBar()}>About</a>
            <a className="nav-item nav-link text-light mobile-nav-item" href="#/skills" onClick={() => toggleNavBar()}>Skills</a>
            <a className="nav-item nav-link text-light mobile-nav-item" href="#/projects" onClick={() => toggleNavBar()}>Projects</a>
            <a className="nav-item nav-link text-light mobile-nav-item" href="#/contact" onClick={() => toggleNavBar()}>Contact</a>
      </div>
    </div>
  )
}

export default Header
