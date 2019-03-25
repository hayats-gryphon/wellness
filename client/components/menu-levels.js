import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class MenuLevels extends React.Component {
  render() {
    if (!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 300
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#b5c829',
      borderRadius: 80,
      maxWidth: 500,
      minHeight: 180,
      textAlign: 'center',
      margin: '0 auto',
      padding: 30
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
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
