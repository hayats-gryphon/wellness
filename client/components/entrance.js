import React from 'react'
import {Link} from 'react-router-dom'
// import startScreen from  '../../public/images/start-screen.png'
// import logo from '../../public/images/logo.png'
// import playButton from '../../public/images/play-button.png'

//

/**
 * COMPONENT
 */

// const styles = {
//   entrancePageContainer: {
//     width: '88%',
//     height: '800px',
//     background: "images/start-screen.png",
//     backgroundSize: 'cover'
//   }
// };

export default class EntracePage extends React.Component {
  render() {
    return (
      <div className="entrance-container">
        <div className="play-button">
          <Link to="/punchabug">
            <img src="images/play-button.png" />
          </Link>
        </div>
      </div>
    )
  }
}
