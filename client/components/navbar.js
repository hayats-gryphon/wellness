import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {MenuLevels} from './index'

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="menu-container">
        {this.props.isLoggedIn ? (
          <div>
            <div className="user-welcome">
              <h3>Welcome back, {this.props.name}!</h3>
            </div>

            <div className="entrance-menu">
              {/* The navbar will show these links before you log in */}
              <button
                type="button"
                className="play-btn"
                onClick={this.toggleModal}
              >
                PLAY
              </button>

              <MenuLevels show={this.state.isOpen} onClose={this.toggleModal} />

              <Link className="grow" to="/instruction">
                Instructions
              </Link>
            </div>
          </div>
        ) : (
          <div className="entrance-menu">
            {/* The navbar will show these links before you log in */}
            <button
              type="button"
              className="play-btn"
              onClick={this.toggleModal}
            >
              PLAY
            </button>

            <MenuLevels show={this.state.isOpen} onClose={this.toggleModal} />

            <Link className="grow" to="/instruction">
              Instructions
            </Link>
          </div>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.name
  }
}

export default connect(mapState, null)(Menu)

// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'
// import {MenuLevels} from './index'

// const Menu = ({handleClick, name, isLoggedIn, showModal}) => (
//   <div className="menu-container">
//     {isLoggedIn ? (
//       <div>
//         <div className="user-welcome">
//           <h3>Welcome, {name}!</h3>
//         </div>
//         <div className="entrance-menu">
//           {/* The navbar will show these links before you log in */}
//           <Link className="grow" to="/instruction">
//             Instruction
//           </Link>
//           <Link className="grow" to="/punchabug-beginner">
//             Beginner
//           </Link>
//           <Link className="grow" to="/punchabug">
//             Medium
//           </Link>
//           <Link className="grow" to="/punchabug-hard">
//             Hard
//           </Link>
//         </div>
//       </div>
//     ) : (
//       <div className="entrance-menu">
//         {/* The navbar will show these links before you log in */}
//         <Link className="grow" to="/instruction">
//           Instruction
//         </Link>
//         <Link onClick={showModal()}>
//           PLAY
//         </Link>
//       </div>
//     )}
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id,
//     name: state.user.name
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Menu)

// /**
//  * PROP TYPES
//  */
// Menu.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
