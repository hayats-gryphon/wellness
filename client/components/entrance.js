import React from 'react'
import {Menu} from './index'

/**
 * COMPONENT
 */

export default class EntrancePage extends React.Component {
  render() {
    return (
      <div className="outer-div">
        <div className="entrance-container">
          <img className="media" src="images/punchabug-logo.png" />
          <Menu />
        </div>
      </div>
    )
  }
}
