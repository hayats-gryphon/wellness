import React from 'react'
import {connect} from 'react-redux'
import {fetchUserHighScore} from '../../store'

class LearderBoard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Leader Board</h1>
        <table id="leader-table" className="table">
          <tbody>
            <tr id="row">
              <td id="cell0-0">Score</td>
              <td id="cell0-1">Name</td>
            </tr>
            <tr id="row">
              <td id="1">"June"</td>
              <td id="2">"100"</td>
            </tr>

            {/* {this.props.leaderboard.map(leader => {
              return (
                <tr id="row"> */}
            {/* <tr id={leader.id}>{leader.avatar}</tr>
                  <td id={leader.id}>{leader.score}</td>
                  <td id={leader.id}>{leader.name}</td> */}
            {/* </tr>
              )
            })} */}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.scoreboard.highScore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserHighScore: () => dispatch(fetchUserHighScore(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearderBoard)
