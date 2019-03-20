import React from 'react'
// import {Link} from 'react-router-dom'
import {Menu} from './index'

/**
 * COMPONENT
 */

export default class EntrancePage extends React.Component {
  render() {
    return (
      <div className="outer-div">
        <div className="entrance-container">
          <div className="media">
            <img src="images/punchabug-logo.png" />
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}

// export default class EntracePage extends React.Component {
//   render() {
//     return (
//       <div className="entrance-container">
//         <div className="play-button">
//           <Link to="/punchabug">
//             <img src="images/play-button.png" />
//           </Link>
//         </div>
//       </div>
//     )
//   }
// }
