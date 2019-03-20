import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Menu = ({handleClick, isLoggedIn}) => (
  <div className="menu-container">
    {isLoggedIn ? (
      <div className="entrance-menu">
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
        <Link to="/punchabug">Puncha Bug</Link>
      </div>
    ) : (
      <div className="entrance-menu">
        {/* The navbar will show these links before you log in */}
        <Link to="/punchabug">Let's Play</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Menu)

/**
 * PROP TYPES
 */
Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
