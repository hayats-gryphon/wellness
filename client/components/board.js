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
    this.holeRef1 = React.createRef()
    this.holeRef2 = React.createRef()
    this.holeRef3 = React.createRef()
    this.holeRef4 = React.createRef()
    this.holeRef5 = React.createRef()
    this.holeRef6 = React.createRef()
    this.holeRef7 = React.createRef()
    this.holeRef8 = React.createRef()
    this.holeRef9 = React.createRef()

    this.generateRandomIdx = this.generateRandomIdx.bind(this)
  }

  componentDidMount() {
    this.soundRef.current.play()
    setInterval(() => {
      const randomHoleIndex = this.generateRandomIdx()
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
  }

  generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * this.state.holes.length)
    return randomIdx === 4 ? this.generateRandomIdx() : randomIdx
  }

  render() {
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

          {this.state.holes.map((hole, idx) => (
            <Hole
              tempRef={`this.holeRef${idx + 1}`}
              key={idx}
              hasBug={this.state.holes[idx].hasBug}
              idx={idx}
            />
          ))}
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateMoles: moles => dispatch(gotMoles(moles))
})

export default connect(null, mapDispatchToProps)(Board)
