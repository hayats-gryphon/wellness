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
    this.holeRef0 = React.createRef()
    this.holeRef1 = React.createRef()
    this.holeRef2 = React.createRef()
    this.holeRef3 = React.createRef()
    this.holeRef4 = React.createRef()
    this.holeRef5 = React.createRef()
    this.holeRef6 = React.createRef()
    this.holeRef7 = React.createRef()
    this.holeRef8 = React.createRef()
    this.playDiv = React.createRef()

    this.generateRandomIdx = this.generateRandomIdx.bind(this)
  }

  componentDidMount() {
    this.soundRef.current.play()
    let holeRefArr = []

    for (let i = 0; i < this.state.holes.length; i++) {
      const coords = this[`holeRef${i}`].current.getBoundingClientRect()
      holeRefArr.push({
        coords,
        el: this[`holeRef${i}`].current
      })
    }
    console.log('holeRefArr', holeRefArr)
    this.props.updateMoles(holeRefArr)

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

      console.log('THIS STATE=====>', this.state)
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
          {this.state.holes.map((hole, idx) => {
            return (
              <div
                key={idx}
                ref={this[`holeRef${idx}`]}
                className={
                  idx === 4
                    ? 'face-space'
                    : this.state.holes[idx].hasBug ? 'mole hole' : 'hole'
                }
              />
            )
          })}
          <div ref={this.playDiv} />
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateMoles: moles => dispatch(gotMoles(moles))
})

export default connect(null, mapDispatchToProps)(Board)
