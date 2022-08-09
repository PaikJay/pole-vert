import React from 'react'
import { connect } from 'react-redux'

export const ContactPage = (props) => {
  return (
    <div class="container">
    <div class="col-md-6">
      <div class="d-flex mb-4 ml-4 ml-md-0">
        <h2 class="custom_heading text-center">
          CONTACT US
        </h2>
      </div>
      <form action="">
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Pone Number" />
        </div>
        <div>
          <input type="text" class="message-box" placeholder="Message" />
        </div>
        <div class="d-flex justify-content-center mt-4 ">
          <button>
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)