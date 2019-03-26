import React from 'react'
import {connect} from 'react-redux'

class Scoreboard extends React.Component {
  render() {
    return (
      <div>
        <h2 className="score">SCORE: {this.props.score}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.scoreboard.score
})

export default connect(mapStateToProps)(Scoreboard)
