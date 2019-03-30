import React from 'react'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
const Instruction = props => {
  return (
    <div className="instruction-outer-div">
      <img className="img-fluid" src="images/how-to-play.png" />
      <div className="instruction-container">
        <div className="instruction">
          <h2>EASY</h2>
          <p>Hit all the bugs with your nose!</p>
          <h2>MEDIUM</h2>
          <p>
            Hit all the bugs but be careful not to hit the Lady flower! Your
            points will be deducted every time you hit the Lady flower.
          </p>
          <h2>HARD</h2>
          <p>
            Hit all the bugs and watch out for the Golden Bug! You can earn
            extra points hitting the Golden Bug.
          </p>
        </div>
      </div>
      <Link
        className="back-button img-fluid grow"
        to="/"
        onClick={props.resetHandler}
      >
        <img src="images/back-btn.png" />
      </Link>
    </div>
  )
}

export default Instruction
