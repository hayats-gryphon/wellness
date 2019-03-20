import React from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

export default class EntracePage extends React.Component {
  render() {
    return (
      <div className="entrance-container">
        <div className="play-button">
          <Link to="/punchabug">
            <img src="images/play-button.png" />
          </Link>
        </div>
      </div>
    )
  }
}
