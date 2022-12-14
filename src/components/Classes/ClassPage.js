import React from 'react'
import { connect } from 'react-redux'

export const ClassPage = (props) => {
  return (
    <div className="scrollblock">
         <div className="container-fluid pt-10">
            <div className="row justify-content-md-center ">
               <div className="col-md-10 col-sm-12">
                  <div className="card-columns">
                     <div className="card card-hover h-100" >
                        <div className="card-body">
                           <a href="index.html">
                              <img className="card-img-top" src="img/photo-1.jpg" alt="classes card" /> 
                              <div className="reveal h-100 p-2 d-flex ">
                                 <div className="w-100 align-self-center">
                                    <p> Classes</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                    </div>
                    </div>
                    </div>
                    </div>
        </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage)