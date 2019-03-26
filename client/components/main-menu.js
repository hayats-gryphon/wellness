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

              <div
                className="img-fluid start-btn grow"
                onClick={this.toggleModal}
              >
                <img src="images/start-btn.png" />
              </div>

              <MenuLevels show={this.state.isOpen} onClose={this.toggleModal} />

              <Link className="grow" to="/instruction">
                Instructions
              </Link>
            </div>
          </div>
        ) : (
          <div className="entrance-menu">
            {/* The navbar will show these links before you log in */}
            <div
              className="img-fluid start-btn grow"
              onClick={this.toggleModal}
            >
              <img src="images/start-btn.png" />
            </div>

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

// /**
//  * PROP TYPES
//  */
// Menu.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
