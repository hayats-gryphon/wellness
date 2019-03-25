import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = ({handleClick, isLoggedIn}) => (
  <div className="footer">
    {isLoggedIn ? (
      <div className="footer-menu">
        {/* The navbar will show these links after you log in */}
        <NavFooter linkTo="/home" linkText="Home" />
        <NavFooter linkTo="/" linkText="Logout" />
      </div>
    ) : (
      <div className="footer-menu">
        {/* The navbar will show these links before you log in */}
        <div />
        <NavFooter linkTo="/" linkText="Home" />
        <NavFooter linkTo="/login" linkText="Login" />
        <NavFooter linkTo="/signup" linkText="Sign Up" />
        <div />
      </div>
    )}
  </div>
)

//Separate component for each Nav link in footer
const NavFooter = props => {
  const {linkTo, linkText} = props
  return (
    <div className="img-fluid play-btn grow">
      <Link to={linkTo}>
        <div className="footer-link">
          <img src="play-btn.png" />
          <div className="centered-nav">{linkText}</div>
        </div>
      </Link>
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
    handleClick() {
      dispatch(logout())
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
