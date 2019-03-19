import React from 'react'

/**
 * COMPONENT
 */
// const Hole = props => {
//   if (props.idx === 4) {
//     console.log('Im here')
//     return <div className="face-space" />
//   } else {
//     return <div className={props.hasBug ? 'mole hole' : 'hole'} />
//   }
// }

class Hole extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let divType
    if (this.props.idx === 4) {
      divType = <div className="face-space" />
      console.log('this is ref', this.props.tempRef)
    } else {
      divType = <div className={this.props.hasBug ? 'mole hole' : 'hole'} />
      console.log('this is ref inside else', this.props.tempRef)
    }
    return divType
  }
}

export default Hole
