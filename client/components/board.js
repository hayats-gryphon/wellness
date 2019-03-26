import React from 'react'
import {connect} from 'react-redux'
import {gotHoles} from '../store/board'
import {withRouter} from 'react-router-dom'
class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countdownTimer: 20,
      readyCountdown: 5,
      numOfHoles: 9
    }

    this.soundRef = React.createRef()
    this.randomRef = React.createRef()
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
    this.hardIntervalId = 0
    this.readyCountdownId = 0
  }

  componentDidMount() {
    this.soundRef.current.play()
    let holeRefArr = []

    for (let i = 0; i < this.state.numOfHoles; i++) {
      holeRefArr.push(this[`holeRef${i}`].current)
    }

    this.props.updateHoles(holeRefArr)

    this.readyCountdownId = setInterval(() => {
      this.props.timerRef.current.textContent = `Get Ready...${
        this.state.readyCountdown
      }`
      this.setState(prevState => {
        prevState.readyCountdown--
      })

      if (this.state.readyCountdown === -1) {
        clearInterval(this.readyCountdownId)
        this.props.timerRef.current.textContent = `GO!`

        /*----------- BEGINNER PLAY---------*/
        if (this.props.location.pathname === '/punchabug-beginner') {
          this.beginnerIntervalId = setInterval(() => {
            this.generateBug()
          }, 1000)
        }

        /*----------- MEDIUM PLAY---------*/
        if (this.props.location.pathname === '/punchabug') {
          this.intervalId = setInterval(() => {
            this.generateBug()
          }, 800)

          this.flowerIntervalId = setInterval(() => {
            this.generateFlower()
          }, 3000)
        }

        /*----------- HARD PLAY---------*/
        if (this.props.location.pathname === '/punchabug-hard') {
          this.hardIntervalId = setInterval(() => {
            this.generateBug()
          }, 700)
          this.hardFlowerIntervalId = setInterval(() => {
            this.generateFlower()
          }, 2400)
          this.hardBeeIntervalId = setInterval(() => {
            this.generateBee()
          }, 4800)
        }
        this.countdownId = setInterval(() => {
          this.countdown()
        }, 1000)
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.soundRef.current.pause()
    clearInterval(this.beginnerIntervalId)
    clearInterval(this.intervalId)
    clearInterval(this.flowerIntervalId)
    clearInterval(this.hardIntervalId)
    clearInterval(this.hardFlowerIntervalId)
    clearInterval(this.countdownId)
    clearInterval(this.readyCountdownId)
    clearInterval(this.hardBeeIntervalId)
  }

  countdown = () => {
    this.setState(prevState => {
      prevState.countdownTimer--
    })

    this.props.timerRef.current.textContent = `Countdown Timer: ${
      this.state.countdownTimer
    }`

    if (this.state.countdownTimer === 0) {
      this.props.timerRef.current.textContent = 'Round Over!'

      this.redirect()
    }
  }
  /*----------- GENERATE BUG ---------*/
  generateBug = () => {
    const randomHoleIndex = this.generateRandomIdx()
    let currRef = this[`holeRef${randomHoleIndex}`].current
    let classNames = Array.from(currRef.classList)
    if (classNames.includes('flower')) currRef.classList.toggle('flower')
    currRef.classList.toggle('mole')
  }
  /*----------- GENERATE FLOWER ---------*/
  generateFlower = () => {
    let randomHoleIndex = this.generateRandomIdx()
    let currRef = this[`holeRef${randomHoleIndex}`].current
    let classNames = Array.from(currRef.classList)
    if (classNames.includes('mole')) {
      randomHoleIndex = this.generateRandomIdx()
      currRef = this[`holeRef${randomHoleIndex}`].current
    }
    currRef.classList.toggle('flower')
  }

  /*----------- GENERATE BEE ---------*/
  generateBee = () => {
    //generating random index for each hole
    let randomHoleIndex = this.generateRandomIdx()
    //this is the node of the hole with the mole
    let currRef = this[`holeRef${randomHoleIndex}`].current
    //this is the array with classname ["hole", "mole"];
    let classNames = Array.from(currRef.classList)
    //need to check if the classname includes mole and flower....

    if (classNames.includes('mole')) {
      randomHoleIndex = this.generateRandomIdx()
      currRef = this[`holeRef${randomHoleIndex}`].current
    }
    if (classNames.includes('flower')) {
      randomHoleIndex = this.generateRandomIdx()
      currRef = this[`holeRef${randomHoleIndex}`].current
    }
    currRef.classList.toggle('bee')
  }

  redirect = () => {
    setTimeout(() => this.props.history.push(`/end-of-game`), 1000)
  }

  generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * this.state.numOfHoles)
    return randomIdx === 4 ? this.generateRandomIdx() : randomIdx
  }

  render() {
    return (
      <div>
        <audio
          src="/theme-song.mp3"
          ref={this.soundRef}
          preload="auto"
          controls="none"
          style={{display: 'none'}}
        />

        <div id="whack-a-mole">
          {Array(this.state.numOfHoles)
            .fill('')
            .map((hole, idx) => {
              return (
                <div
                  key={idx}
                  ref={this[`holeRef${idx}`]}
                  className={idx === 4 ? 'face-space' : 'hole'}
                />
              )
            })}
          <div ref={this.playDiv} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateHoles: holes => dispatch(gotHoles(holes))
})

export default withRouter(connect(null, mapDispatchToProps)(Board))
