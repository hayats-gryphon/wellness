import React from 'react'
import {connect} from 'react-redux'

class EndOfGame extends React.Component {
  render() {
    return (
      <div>
        <img className="center" src="/smashedbug.png" />
        <h2 className="end-game-score">SCORE: {this.props.score}</h2>
        <h2 className="end-game-score">
          YOUR HIGH SCORE: {this.props.highScore}
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.scoreboard.score,
  highScore: state.scoreboard.highScore
})

export default connect(mapStateToProps)(EndOfGame)
