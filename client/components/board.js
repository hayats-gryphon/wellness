import React from 'react'
import {connect} from 'react-redux'

export default class Board extends React.Component {
  render() {
    const holes = document.getElementsByClassName('hole')
    setInterval(function() {
      const randomHoleIndex = Math.floor(Math.random() * holes.length)
      holes[randomHoleIndex].classList.toggle('mole')
    }, 300)

    return (
      <div id="whack-a-mole" style={{position: 'fixed'}}>
        <div id="" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="face-space" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
        <div className="hole" />
      </div>
    )
  }
}
