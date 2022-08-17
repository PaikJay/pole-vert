import React from 'react'

const Nav = ({logo}) => {
  return (
           <header className="header_section">
<div className="navigation container-fluid">
          <div className="row justify-content-md-center ">
            <div className="col-md-10 col-sm-12">
              <nav className="navbar navbar-default">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} height="22" alt="Logo" />
                  <span>
                   Pole-Vert / Verdek(l) Pool 
                 </span>
                </a>
                <div
                  className="button_container"
                  id="toggle"
                >
                  <span className="black top"></span>
                  <span className="black middle"></span>
                  <span className="black bottom"></span>
                </div>
                <div className="overlay" id="overlay">
                     <nav className="overlay-menu">
                      <ul>
                        <li> <a href="/class">Classes</a></li>
                        <li><a href="/instructors">Instructors</a></li>
                        <li><a href="/shop">Pole Fit Gear</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
                     </nav>
                      </div>
              
              </nav>
            </div>
          </div>
        </div> 
         </header>
         
  )
}

export default Nav