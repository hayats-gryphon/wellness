import React from 'react'
import {connect} from 'react-redux'
import {fetchLeaderboard} from '../../store/leaderboard'
import {withRouter} from 'react-router-dom'

class LearderBoard extends React.Component {
  componentDidMount() {
    this.props.fetchLeaderboard()
  }

  render() {
    return (
      <div className="leaderboard">
        <h1>Leaderboard</h1>

        <table className="leaderboard-table">
          <tbody>
            {this.props.leaderboard.map(leader => {
              return (
                <tr key={leader.id} id="row">
                  <td id={leader.id}>{leader.name}</td>
                  <td id={leader.id} className="leaderboard-number">
                    {leader.highscore}
                  </td>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LearderBoard)
)
