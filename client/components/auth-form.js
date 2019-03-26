import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const AuthForm = props => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    onClose,
    show,
    highscore
  } = props
  if (!show) {
    return null
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-exit-btn" onClick={onClose} />
        <div>
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="username">
                <h5 className="login-text">Username</h5>
              </label>
              <input name="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <h5 className="login-text">Password</h5>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <input name="savescore" type="checkbox" value={highscore} />{' '}
              <small>Save score?</small>
            </div>
            <div>
              <button type="submit">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
    highscore: state.scoreboard.highScore
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    highscore: state.scoreboard.highScore
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      let highscore = 0
      if (evt.target.savescore.checked) {
        highscore = Number(evt.target.savescore.value)
      }
      dispatch(auth(username, password, formName, highscore))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  highscore: PropTypes.number
}
