import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  state = {
    initialCount: 4,
    newCount: "0",
    items: ['A', 'Boba', 'B', 'Milk', 'Bread', 'C']
  };

  handleSubmit = () => {
    this.setState({
      initialCount: parseInt(this.state.newCount)
    });
  };

  handleTextChange = event => {
    this.setState({
      newCount: event.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <input 
          type="text"
          value={this.state.newCount}
          onChange={this.handleTextChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <Counter initialCount={this.state.initialCount}/>
        <Instructions shouldDisplayImage={true} items={this.state.items}/>
      </div>
    )
  }
}

export default App