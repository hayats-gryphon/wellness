import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  PunchABug,
  EndOfGame,
  EntrancePage,
  Menu,
  Instruction,
  Loading
} from './components'

import {me} from './store'
import {getHighScoreFromUser} from './store/scoreboard'

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.loadInitialData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.props.fetchHighScore(this.props.userHighScore)
    }
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/punchabug" component={PunchABug} />
        <Route path="/punchabug-beginner" component={PunchABug} />
        <Route path="/punchabug-hard" component={PunchABug} />
        <Route path="/end-of-game" component={EndOfGame} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/menu" component={Menu} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/" component={EntrancePage} />
          </Switch>
        )}
        {/* Displays our EntrancePage component as a fallback */}
        <Route component={EntrancePage} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userHighScore: Number(state.user.highscore)
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    fetchHighScore(highscore) {
      dispatch(getHighScoreFromUser(highscore))
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
