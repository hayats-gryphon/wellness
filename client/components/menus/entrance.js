import React from 'react'
import {Menu, Footer} from '../index'

/**
 * COMPONENT
 */

export default class EntrancePage extends React.Component {
  render() {
    return (
      <div className="outer-div">
        <div className="entrance-container">
          {/* <div /> */}
          <img className="media img-fluid" src="images/punchabug-logo.png" />
          <Menu />
          <Footer />
        </div>
      </div>
    )
  }
}
