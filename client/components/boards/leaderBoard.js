import React from 'react'
import {connect} from 'react-redux'
import {fetchLeaderboard} from '../../store/leaderboard'

class LearderBoard extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchLeaderboard()
  }

  render() {
    return (
      <div id="leaderboard">
        <h1>Leader Board</h1>
        <table id="leader-table" className="table">
          <tbody>
            <tr id="row">
              <td id="cell0-0">High Score</td>
              <td id="cell0-1">Name</td>
            </tr>
            {this.props.leaderboard.map(leader => {
              return (
                <tr key={leader.id} id="row">
                  <td id={leader.id}>{leader.highscore}</td>
                  <td id={leader.id}>{leader.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard.leaderboard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearderBoard)
