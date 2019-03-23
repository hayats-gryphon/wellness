import React from 'react'

/**
 * COMPONENT
 */
export default class Instruction extends React.Component {
  render() {
    return (
      <div className="outer-div">
        <div className="entrance-container">
          <h1 className="how-to">HOW TO PLAY</h1>
          <div className="instruction">
            <h2>Beginner</h2>
            <p>Hit all the bugs with your nose!</p>
            <h2>Medium</h2>
            <p>
              Hit all the bugs but be careful not to hit the Lady flower! Your
              points will be deducted every time you hit the Lady flower.
            </p>
            <h2>Hard</h2>
            <p>
              Hit all the bugs and watch out for Golden Bug! You can earn extra
              10 points hitting the Golden Bug.
            </p>
          </div>
        </div>
        <button type="button" name="back-button">
          BACK
        </button>
      </div>
    )
  }
}
