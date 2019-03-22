import React from 'react'
import {connect} from 'react-redux'
import {gotHoles} from '../store/board'
import {withRouter} from 'react-router-dom'

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
      ],
      countdownTimer: 10
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
    this.intervalId = 0
    this.countdownId = 0

    this.generateRandomIdx = this.generateRandomIdx.bind(this)
  }

  componentDidMount() {
    console.log('this.props.timerRef', this.props.timerRef)
    this.soundRef.current.play()
    let holeRefArr = []

    for (let i = 0; i < this.state.holes.length; i++) {
      const coords = this[`holeRef${i}`].current.getBoundingClientRect()
      holeRefArr.push({
        coords,
        el: this[`holeRef${i}`].current
      })
    }
    this.props.updateHoles(holeRefArr)

    this.intervalId = setInterval(() => {
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
    }, 1000)

    this.countdownId = setInterval(() => {
      this.setState(prevState => {
        prevState.countdownTimer--
      })
      this.props.timerRef.current.textContent = `Countdown Timer: ${
        this.state.countdownTimer
      }`
      if (this.state.countdownTimer === 0) {
        this.props.timerRef.current.textContent = 'Round Over!'
        clearInterval(this.intervalId)
        clearInterval(this.countdownId)
        this.soundRef.current.pause()
        this.redirect()
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    clearInterval(this.countdownId)
  }

  redirect = () => {
    setTimeout(() => this.props.history.push(`/end-of-game`), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * this.state.holes.length)
    return randomIdx === 4 ? this.generateRandomIdx() : randomIdx
  }

  render() {
    return (
      <div>
        <audio
          src="/bgMusic.mp3"
          ref={this.soundRef}
          preload="auto"
          controls="none"
          style={{display: 'none'}}
        />

        <div id="whack-a-mole">
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
        {/* <h2 id="timer" ref={this.timer} /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateHoles: holes => dispatch(gotHoles(holes))
})

export default withRouter(connect(null, mapDispatchToProps)(Board))
