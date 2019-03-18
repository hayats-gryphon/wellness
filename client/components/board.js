import React from 'react'
import {connect} from 'react-redux'
import {gotMoles} from '../store/board'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      holes: [
        {hasBug: false},
        {hasBug: false},
        {hasBug: false},
        {hasBug: false},
        {isFace: true},
        {hasBug: false},
        {hasBug: false},
        {hasBug: false},
        {hasBug: false}
      ]
    }
  }

  render() {
    setInterval(() => {
      const randomHoleIndex = Math.floor(
        Math.random() * this.state.holes.length
      )
      this.state.holes[randomHoleIndex].classList.toggle('mole')

      const moleElements = document.getElementsByClassName('mole')
      const moles = Array.from(moleElements)
      // const moles = Array.from(document.getElementsByClassName('mole'))
      const moleCoords = moles.map((mole, idx) => ({
        coords: mole.getBoundingClientRect(),
        el: moleElements[idx]
      }))
      this.props.updateMoles(moleCoords)
    }, 3000)

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

const mapDispatchToProps = dispatch => ({
  updateMoles: moles => dispatch(gotMoles(moles))
})

export default connect(null, mapDispatchToProps)(Board)
