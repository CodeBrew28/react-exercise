import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayImage: this.props.shouldDisplayImage,
      items: this.filterItems(this.props.items)
    };
  }

  filterItems(itemsList) {
    return itemsList.filter(item => {
        return item.length >= 3;
    })
  }

  render() {
    const shouldDisplayImage = this.state.shouldDisplayImage;
    let image;

    if (shouldDisplayImage) {
      image = <img
      className="instructions__logo"
      src="https://uiuc.hack4impact.org/img/colored-logo.png"
      alt="h4i logo"
      />
    }

    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        <ul>
          {this.state.items.map((item, index) => {
            if (index % 2 === 0) {
              return <li>{item}</li>
            } else {
              return <li>{item.toUpperCase()}</li>
            }
          })}
        </ul>
        {image}
      </div>
    )
  }
}

export default Instructions