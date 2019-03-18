import React from 'react'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
export default class EntracePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <Link to="/punchabug">
          <button>Let Us Play</button>
        </Link>
      </div>
    )
  }
}
