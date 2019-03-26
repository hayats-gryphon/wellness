import {Login, Signup} from './'
import React from 'react'
import {withRouter} from 'react-router-dom'

class NavButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState(prevState => {
      return {isOpen: !prevState.isOpen}
    })
  }

  redirect = event => {
    const {linkText, history, logoutClick} = this.props
    event.preventDefault()
    if (linkText === 'Home') history.push('/')
    if (linkText === 'Logout') logoutClick()
    if (linkText === 'About') history.push('/About')
  }

  render() {
    const {linkText} = this.props
    return (
      <div>
        <div className="img-fluid play-btn grow" onClick={this.toggleModal}>
          <div className="footer-link" onClick={this.redirect}>
            <img src="images/play-btn.png" />
            <div className="centered-nav">{linkText}</div>
          </div>
        </div>
        {linkText === 'Login' ? (
          <Login show={this.state.isOpen} onClose={this.toggleModal} />
        ) : null}
        {linkText === 'Sign Up' ? (
          <Signup show={this.state.isOpen} onClose={this.toggleModal} />
        ) : null}
      </div>
    )
  }
}

export default withRouter(NavButton)
