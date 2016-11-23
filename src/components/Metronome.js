import React from 'react'
import Counter from './Counter'
import Speeds from './Speeds'

export default class Metronome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bpm: 100,
      isRunning: false,
      beatsPerBar: 4,
      beatValue: 4,
      currentBeat: 1,
      intervalId: null
    }
  }

  componentDidMount() {
    this.eventHandler = this.handleKeyUp.bind(this);
    window.addEventListener('keyup', this.eventHandler);
  }

  componentWillUnmount() {
  	window.removeEventListener('keyup', this.eventHandler);
  }

  handleKeyUp(e) {
    if(e.keyCode == 32) {
      this.toggleMetronome();
    }
  }

  startTimer() {
    const speed = (60 / this.state.bpm) * 1000
    const intervalId = setInterval(this.nextBeat.bind(this), speed)
    this.setState({ intervalId })
  }

  startMetronome() {
    this.setState({
      isRunning: true
    })
    this.startTimer()
  }

  stopMetronome() {
    this.setState({
      isRunning: false,
      currentBeat: 1
    })
    this.clearInterval();
  }

  clearInterval() {
    window.clearInterval(this.state.intervalId)
  }

  toggleMetronome() {
    this.state.isRunning ? this.stopMetronome() : this.startMetronome()
  }

  nextBeat() {
    const { currentBeat, beatsPerBar } = this.state;
    const nextBeat = currentBeat == beatsPerBar ? 1 : currentBeat + 1
    this.setState({
      currentBeat: nextBeat
    })
  }

  handleSpeedChange(bpm) {
    this.clearInterval();
    this.setState({ bpm })
    this.startTimer();
  }

  render() {
    return(
      <div className="metronome">
        <h2>Speed: {this.state.bpm} bpm</h2>
        <a href="#" className="button" onClick={this.toggleMetronome.bind(this)}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </a>
        <Counter
          beatsPerBar={this.state.beatsPerBar}
          beatValue={this.state.beatValue}
          currentBeat={this.state.currentBeat}
        />
        <Speeds onSpeedChange={this.handleSpeedChange.bind(this)}/>
      </div>
    )
  }
}
