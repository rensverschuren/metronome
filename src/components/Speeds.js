import React from 'react'
import classnames from 'classnames'

export default class Speeds extends React.Component {

  handleSpeedClick(event) {
    event.preventDefault();

    this.props.onSpeedChange(event.target.id)
  }

  render() {
    return(
      <div className="speeds">
        <div id="100" onClick={this.handleSpeedClick.bind(this)} className="speeds__speed">100</div>
        <div id="140" onClick={this.handleSpeedClick.bind(this)} className="speeds__speed">140</div>
        <div id="200" onClick={this.handleSpeedClick.bind(this)} className="speeds__speed">200</div>
      </div>
    )
  }
}
