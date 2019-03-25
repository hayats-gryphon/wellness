import React from 'react'

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <img className="loading" src="images/loading-circle.gif" width="1000" />
        <h1>Loading...</h1>
      </div>
    )
  }
}
