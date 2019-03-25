import React from 'react'
import {connect} from 'react-redux'
import {LeaderBoard} from '../components'
import {updateHighScore, resetScore} from '../store/scoreboard'
import {withRouter} from 'react-router-dom'
import {Footer} from './index'
import {fetchLeaderboard} from '../store/leaderboard'

class EndOfGame extends React.Component {
  constructor(props) {
    super(props)

    this.resetHandler = this.resetHandler.bind(this)
  }

  resetHandler(event) {
    event.preventDefault()
    this.props.resetScore()
    this.props.history.push(`/punchabug`)
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      if (this.props.score > this.props.highScore) {
        this.props.updateUserHighScore(this.props.user.id, this.props.score)
      }
    }
    this.props.fetchLeaderboard()
  }

  render() {
    return (
      <div className="end-of-game-container">
        <img className="img-fluid" src="/great-job.png" />

        <div className="flex-container-row">
          <h3 className="end-game-score">SCORE: {this.props.score}</h3>
          <h3 className="end-game-score">
            {this.props.isLoggedIn ? (
              <div>YOUR HIGH SCORE: {this.props.highScore}</div>
            ) : null}
          </h3>
          <div>
            <LeaderBoard />
          </div>
          <Footer />
          <button
            type="button"
            className="play-again-btn"
            onClick={this.resetHandler}
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: !!state.user.id,
  score: state.scoreboard.score,
  highScore: state.scoreboard.highScore
})

const mapDispatchToProps = dispatch => {
  return {
    updateUserHighScore: (userId, score) => {
      dispatch(updateHighScore(userId, score))
    },
    resetScore: () => {
      dispatch(resetScore())
    },
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndOfGame)
