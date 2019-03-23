import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Menu = ({handleClick, name, isLoggedIn}) => (
  <div className="menu-container">
    {isLoggedIn ? (
      <div>
        <div className="user-welcome">
          <h3>Welcome, {name}!</h3>
        </div>
        <div className="entrance-menu">
          {/* The navbar will show these links before you log in */}
          <Link className="grow" to="/punchabug-beginner">
            Beginner
          </Link>
          <Link className="grow" to="/punchabug">
            Medium
          </Link>
          <Link className="grow" to="/punchabug-hard">
            Hard
          </Link>
        </div>
      </div>
    ) : (
      <div className="entrance-menu">
        {/* The navbar will show these links before you log in */}
        <Link className="grow" to="/punchabug-beginner">
          Beginner
        </Link>
        <Link className="grow" to="/punchabug">
          Medium
        </Link>
        <Link className="grow" to="/punchabug-hard">
          Hard
        </Link>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.name
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
