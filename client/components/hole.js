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

const Hole = React.forwardRef((props, ref) => {
  console.log('ref', ref)
  return (
    <div
      ref={ref}
      className={
        props.idx === 4 ? 'face-space' : props.hasBug ? 'mole hole' : 'hole'
      }
    />
  )
})

// class Hole extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let divType
//     if (this.props.idx === 4) {
//       divType = <div ref= {this.props.ref} className="face-space" />
//     } else {
//       divType = <div ref= {this.props.ref} className={this.props.hasBug ? 'mole hole' : 'hole'} />
//     }
//     return divType
//   }
// }

export default Hole
