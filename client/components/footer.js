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
        <Link to="/home">
          <img className="media img-fluid" src="images/punchabug-logo.png" />Home
        </Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
        <Link to="/punchabug">Puncha Bug</Link>
      </div>
    ) : (
      <div className="footer-menu">
        {/* The navbar will show these links before you log in */}
        <div />
        <div className="img-fluid play-btn grow">
          <Link to="/">
            <div className="footer-link">
              <img src="play-btn.png" />
              <div className="centered-nav">Home</div>
            </div>
          </Link>
        </div>

        <div className="img-fluid play-btn grow">
          <Link to="/login">
            <div className="footer-link">
              <img src="play-btn.png" />
              <div className="centered-nav">Login</div>
            </div>
          </Link>
        </div>

        <div className="img-fluid play-btn grow">
          <Link to="/signup">
            <div className="footer-link">
              <img src="play-btn.png" />
              <div className="centered-nav">Signup</div>
            </div>
          </Link>
        </div>
        <div />
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

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
