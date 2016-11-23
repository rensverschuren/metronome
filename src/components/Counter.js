import React from 'react'
import classnames from 'classnames'

export default class Counter extends React.Component {

  render() {
    return(
      <div className="counter">
        {[...Array(this.props.beatsPerBar)].map((beat, index) => {
          const classes = classnames({
            'counter__beat': true,
            'counter__beat--active': this.props.currentBeat == index + 1
          })
          return(
            <div key={index} className={classes}>
              {index + 1}
            </div>
          )
        })}
      </div>
    )
  }
}
