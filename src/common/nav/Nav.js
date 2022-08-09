import React from 'react'

const Nav = () => {
  return (
           <header class="header_section">
           <div class="container-fluid">
             <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
               <a class="navbar-brand" href="index.html">
                 <img src="" alt="" />
                 <span>
                   Pole Vert / Verdek(l) Pool
                 </span>
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
     
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                 <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="product.html"> Product </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="client.html"> Client </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact us</a>
                </li>
              </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
                 </div>
               </div>
             </nav>
           </div>
         </header>
  )
}

export default Nav