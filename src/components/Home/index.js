// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {status: 'Login', title: 'Please Login'}

  changeStatus = () => {
    const {status, title} = this.state
    if (status === 'Login') {
      this.setState(prevState => ({status: 'Logout', title: 'Welcome User'}))
    } else {
      this.setState(prevState => ({status: 'Login', title: 'Please Login'}))
    }
  }

  render() {
    const {status, title} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="head">{title}</h1>
          <button className="btn" onClick={this.changeStatus}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
