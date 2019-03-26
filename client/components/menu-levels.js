import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class MenuLevels extends React.Component {
  render() {
    if (!this.props.show) {
      return null
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <div className="modal-exit-btn" onClick={this.props.onClose} />
          <h4>Select Your Level</h4>
          <Link className="grow" to="/punchabug-beginner">
            Easy
          </Link>
          <Link className="grow" to="/punchabug">
            Medium
          </Link>
          <Link className="grow" to="/punchabug-hard">
            Hard
          </Link>
        </div>
      </div>
    )
  }
}

MenuLevels.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
}

export default MenuLevels
