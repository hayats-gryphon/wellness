import React from 'react'
import {connect} from 'react-redux'
import {LeaderBoard} from '../components'
import {fetchUserHighScore} from '../store/scoreboard'

class EndOfGame extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(' this is user id', this.props.user.id)
    this.props.fetchUserHighScore(this.props.user.id)
  }

  render() {
    console.log('this is the user', this.props.user)
    return (
      <div>
        <img className="center" src="/smashedbug.png" />
        <h2 className="end-game-score">SCORE: {this.props.score}</h2>
        <h2 className="end-game-score">
          {this.props.user ? (
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
  score: state.scoreboard.score,
  highScore: state.scoreboard.highScore
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUserHighScore: userId => dispatch(fetchUserHighScore(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndOfGame)
