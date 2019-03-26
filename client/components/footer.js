import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {resetHighscore} from '../store/scoreboard'
import {NavButton} from './'

const Footer = ({handleClick, isLoggedIn}) => {
  return (
    <div className="footer">
      {isLoggedIn ? (
        <div className="footer-menu">
          {/* The navbar will show these links after you log in */}
          <div />
          <NavButton linkText="Home" />
          <NavButton linkText="Logout" logoutClick={handleClick} />
          <div />
        </div>
      ) : (
        <div className="footer-menu">
          {/* The navbar will show these links before you log in */}
          <div />
          <NavButton linkText="Home" />
          <NavButton linkText="Login" />
          <NavButton linkText="Sign Up" />
          <div />
        </div>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    async handleClick() {
      await dispatch(logout())
      await dispatch(resetHighscore())
    }
  }
}

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
