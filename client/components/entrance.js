import React from 'react'
import {Link} from 'react-router-dom'
import Anime from 'react-anime'
/**
 * COMPONENT
 */
export default class EntracePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <Link to="/punchabug">
          <button>Let's Play</button>
        </Link>
      </div>
    )
  }
}

/*
// import {bug} from '../../public/images'
import anime from 'animejs'
export default class EntracePage extends React.Component {
  componentDidMount() {
    // var path = anime.path('path')
    var path = anime.path('svg path')
    var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic']

    anime({
      targets: '.bug',
      // translateY: '60vh',
      // translateX: [0, 100, 250, 400, 500, 600, 800],
      // duration: 850,
      // delay: 750,
      // loop: true,
      // direction: 'alternate'
      // easing: 'easeInCubic'
      // scaleX: {
      //   value: 1.05,
      //   duration: 150,
      //   delay: 268
      // }

      // translateX: 250,
      // direction: 'alternate',
      // loop: true,
      // easing: [{value: 'tepss(5)'}, {ease: 'linear'}]

      // translateY: [
      //   {value: -40, duration: 500},
      //   {value: 40, duration: 500, delay: 1000},
      //   {value: 0, duration: 500, delay: 1000}
      // ],
      // scaleX: [
      //   {value: 4, duration: 100, delay: 500, easing: 'easeOutExpo'},
      //   {value: 1, duration: 900},
      //   {value: 4, duration: 100, delay: 500, easing: 'easeOutExpo'},
      //   {value: 1, duration: 900}
      // ],
      // scaleY: [
      //   {value: [1.75, 1], duration: 500},
      //   {value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo'},
      //   {value: 1, duration: 450},
      //   {value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo'},
      //   {value: 1, duration: 450}
      // ],

      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: function(el, i) {
        return easings[i]
      },
      duration: 10000,
      loop: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <div className="bug">
            <img src="https://i.imgur.com/mSJ2yNN.png" logo="bug" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
*/

/*
import anime from 'animejs'
export default class EntracePage extends React.Component {
  componentDidMount() {
    var path = anime.path('path')

    var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic']

    var motionPath = anime({
      targets: '.bug',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: function(el, i) {
        return easings[i]
      },
      duration: 10000,
      loop: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="anime-demo">
          <svg width="600" height="450">
            <path
              d="M380,10q-152,103,-2,257q-149,137,41,154q204,9,61,-149q192,-105,36,-259q-82,275,-136,-2"
              stroke="black"
              stroke-width="1px"
              fill="none"
            />
          </svg>
          <div class="square blue" />
          <div class="square red" />
          <div class="square orange" />
          <div class="square green" />
        </div>
        <div className="bug">
          <img src="https://i.imgur.com/mSJ2yNN.png" logo="bug" />
        </div>
      </React.Fragment>
    )
  }
}
*/
