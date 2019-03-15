import React from 'react'
import {connect} from 'react-redux'
import {gotMoles} from '../store/board'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const holes = document.getElementsByClassName('hole')

    setInterval(() => {
      const randomHoleIndex = Math.floor(Math.random() * holes.length)
      holes[randomHoleIndex].classList.toggle('mole')
      const moles = Array.from(document.getElementsByClassName('mole'))
      const moleCoords = moles.map(mole => mole.getBoundingClientRect())
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
