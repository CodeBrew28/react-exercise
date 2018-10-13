import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: this.props.initialCount
    };

    componentDidMount() {
        const { count } = this.props;
        this.setState({ count });
    };

    handleIncrement = () => {
        let current = this.state.count;
        this.setState({
            count: current + 1
        });
    };

    handleDecrement = () => {
        let current = this.state.count;
        this.setState({
            count: current - 1 
        });
    };

    render() {
        return (
            <div className="counter" num={this.props.initialCount} other={this.state.count}>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

export default Counter