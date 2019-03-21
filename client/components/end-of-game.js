import React from 'react'
import {connect} from 'react-redux'
import {LeaderBoard} from '../components'
import {updateHighScore} from '../store/scoreboard'

class EndOfGame extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      if (this.props.score > this.props.highScore) {
        this.props.updateUserHighScore(this.props.user.id, this.props.score)
      }
    }
  }

  render() {
    return (
      <div>
        <img className="center" src="/smashedbug.png" />
        <h2 className="end-game-score">SCORE: {this.props.score}</h2>
        <h2 className="end-game-score">
          {this.props.isLoggedIn ? (
            <div>YOUR HIGH SCORE: {this.props.highScore}</div>
          ) : null}
        </h2>
        <div>
          <LeaderBoard />
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
    // fetchUserHighScore: userId => dispatch(fetchUserHighScore(userId)),
    updateUserHighScore: (userId, score) =>
      dispatch(updateHighScore(userId, score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndOfGame)
