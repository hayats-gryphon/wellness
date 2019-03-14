import React from 'react'
import {connect} from 'react-redux'

export default class Board extends React.Component {
  render() {
    return (
      <div id="whack-a-mole">
        <div id="" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
      </div>
    )
  }
}
