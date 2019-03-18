import React from 'react'
import {connect} from 'react-redux'
import {gotMoles} from '../store/board'
import Hole from './hole'

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

    this.soundRef = React.createRef()
    this.holeRef = React.createRef()
  }

  componentDidMount() {
    this.soundRef.current.play()
  }

  render() {
    setInterval(() => {
      const randomHoleIndex = Math.floor(
        Math.random() * this.state.holes.length
      )
      console.log('RANDOM HOLE INDEX =====>', randomHoleIndex)

      this.setState(prevState => {
        const originalState = prevState.holes[randomHoleIndex].hasBug
        const updatedHoles = [...prevState.holes]
        const updatedHole = {hasBug: !originalState}
        updatedHoles[randomHoleIndex] = updatedHole

        return {
          holes: updatedHoles
        }
      })

      // console.log('THIS STATE=====>', this.state)
      // const moleElements = document.getElementsByClassName('mole')
      // const moles = Array.from(moleElements)
      // const moleCoords = moles.map((mole, idx) => ({
      //   coords: mole.getBoundingClientRect(),
      //   el: moleElements[idx]
      // }))
      // this.props.updateMoles(moleCoords)
    }, 3000)

    return (
      <>
        <audio
          src="/bgMusic.mp3"
          ref={this.soundRef}
          preload="auto"
          controls="none"
          style={{display: 'none'}}
        />
        <div id="whack-a-mole" style={{position: 'fixed'}}>
          <div id="" />

          {this.state.holes.map((hole, idx) => <Hole key={idx} />)}
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateMoles: moles => dispatch(gotMoles(moles))
})

export default connect(null, mapDispatchToProps)(Board)
