import React, { Component } from 'react'
import Modal from './Modal'
class LandingPage extends Component {
  render() {
    return (
      <div>
        <img
          className='background'
          src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        />
        <Modal />
      </div>
    )
  }
}

export default LandingPage
