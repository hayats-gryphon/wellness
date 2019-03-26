import React from 'react'
import {connect} from 'react-redux'
import {resetScore} from '../store/scoreboard'

class Scoreboard extends React.Component {
  // componentDidMount () {

  // }

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

const mapDispatchToProps = dispatch => ({
  resetScore: () => {
    dispatch(resetScore())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard)
