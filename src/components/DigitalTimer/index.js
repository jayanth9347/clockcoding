import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props){
    super(props)
    console.log("constuctor")
  }
  state = {clock: true}
  onButton = () => {
    const {clock} = this.state
    this.setState(prvt => ({clock: !prvt.clock}))
  }
  tick = () => {
    this.setState(({run: new Date().toLocaleTimeString}))
  }
  componentDidMount(){
    console.log("Jayanth")
    this.setState(({start: new Date().toLocaleTimeString()}))
    this.timerID = setInterval(this.tick,1000)
  } 
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render() {
    const {clock} = this.state
    const {start} = this.state
    console.log(start)
    return ( 
      <div className="background">
        <h1> Digital Timer </h1>
        <div className="maincontainer">
          <div className="container">
            <h1> {start} </h1>
            <p> {clock ? 'Running': 'paused'} </p>
          </div>
          <div>
            <div>
              <button className="button" onClick={this.onButton}>
                {clock ? (
                  <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    className="play"
                  />  <p> Start </p>
                  </div>
                ) : (
                  <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    className="pause"
                  />
                  <p> pause </p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
