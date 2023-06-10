// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, LastName: false}

  Firstname = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState(prevState => ({firstName: false}))
    } else {
      this.setState(prevState => ({firstName: true}))
    }
  }

  Lastname = () => {
    const {LastName} = this.state

    if (LastName === true) {
      this.setState(prevState => ({LastName: false}))
    } else {
      this.setState(prevState => ({LastName: true}))
    }
  }

  render() {
    const {firstName} = this.state
    const {LastName} = this.state

    return (
      <div className="container">
        <h1>show/Hide</h1>
        <div className="buttonsContainer">
          <button className="button" type="button" onClick={this.Firstname}>
            Show/Hide Firstname
          </button>
          <button className="button" type="button" onClick={this.Lastname}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="flexingCOn">
          {firstName ? (
            <div className="firstNameCon">
              <p className="headingFirstName">Joe</p>
            </div>
          ) : null}
          {LastName ? (
            <div className="LastNameCon">
              <p className="headingLastName">Jonas</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
