import React from 'react'
import {connect} from 'react-redux'
import {LeaderBoard} from '..'
import {updateHighScore, resetScore} from '../../store/scoreboard'
import {Footer} from '../index'
import {fetchLeaderboard} from '../../store/leaderboard'

class EndOfGame extends React.Component {
  resetHandler = event => {
    event.preventDefault()
    this.props.resetScore()
    this.props.history.push(`/`)
  }

  componentDidMount() {
    if (this.props.score > this.props.highScore) {
      this.props.updateUserHighScore(this.props.user.id, this.props.score)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.highScore !== prevProps.highScore) {
      this.props.fetchLeaderboard()
    }
  }

  render() {
    return (
      <div className="end-of-game-container">
        {/* <div /> */}
        <img className="img-fluid" src="images/great-job-3.gif" />
        <div className="flex-container-row">
          <div className="end-of-game-item">
            <h3 className="end-game-score">
              SCORE: <span className="score-number">{this.props.score}</span>
            </h3>
            {this.props.isLoggedIn ? (
              <h3 className="end-game-score">
                YOUR HIGH SCORE:{' '}
                <span className="score-number">{this.props.highScore}</span>
              </h3>
            ) : (
              <h3 className="end-game-score">
                SESSION HIGH SCORE:{' '}
                <span className="score-number">{this.props.highScore}</span>
              </h3>
            )
            // null
            }
          </div>

          <div className="end-of-game-item">
            <LeaderBoard />
          </div>
        </div>

        <div className="play-again-btn grow" onClick={this.resetHandler}>
          <img src="images/play-again-btn.png" />
        </div>

        <Footer />
        {/* <div /> */}
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
