import React from 'react'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
export default class Instruction extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="outer-div">
        <div className="entrance-container">
          <h1 className="how-to">HOW TO PLAY</h1>
          <div className="instruction-container">
            <div className="instruction">
              <h2>BEGINNER</h2>
              <p>Hit all the bugs with your nose!</p>
              <h2>MEDIUM</h2>
              <p>
                Hit all the bugs but be careful not to hit the Lady flower! Your
                points will be deducted every time you hit the Lady flower.
              </p>
              <h2>HARD</h2>
              <p>
                Hit all the bugs and watch out for Golden Bug! You can earn
                extra 10 points hitting the Golden Bug.
              </p>
            </div>
          </div>
          <div className="back-button">
            <Link to="/">
              {/* place holder for the image */}
              <button type="button" name="all-button">
                back
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
