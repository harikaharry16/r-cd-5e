// Write your code here
import {Component} from 'react'

import './index.css'

class Logout extends Component {
  state = {status: 'Logout', title: 'Welcome User'}

  render() {
    const {status, title} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="head">{title}</h1>
          <button className="btn">{status}</button>
        </div>
      </div>
    )
  }
}

export default Logout
