// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  contentCount = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letter" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              id="letter"
              className="input-container"
              placeholder="Enter the phrase"
              onChange={this.contentCount}
            />
            <div>
              <button type="button" className="button-text">
                No.of letters: {count.length}
              </button>
            </div>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
