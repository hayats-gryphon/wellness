import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {MenuLevels} from './index'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  showModal = () => {
    this.setState(prevState => {
      prevState.showModal = !prevState.showModal
    })
  }

  render() {
    return (
      <div className="menu-container">
        {this.props.isLoggedIn ? (
          <div>
            <div className="user-welcome">
              <h3>Welcome, {name}!</h3>
            </div>
            <div className="entrance-menu">
              {/* The navbar will show these links before you log in */}
              <Link className="grow" to="/instruction">
                Instruction
              </Link>
              <Link className="grow" to="/punchabug-easy">
                EASY
              </Link>
              <Link className="grow" to="/punchabug-medium">
                Medium
              </Link>
              <Link className="grow" to="/punchabug-hard">
                Hard
              </Link>
            </div>
          </div>
        ) : (
          <div className="entrance-menu">
            {/* The navbar will show these links before you log in */}
            <Link className="grow" to="/instruction">
              Instruction
            </Link>
            <Link onClick={this.showModal()}>PLAY</Link>
          </div>
        )}

        {this.state.showModal && <MenuLevels />}
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

/**
 * PROP TYPES
 */
Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
