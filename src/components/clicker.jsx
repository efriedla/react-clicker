import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    handleIncrement = (e) => {
        console.log(e);
        this.setState({ count: this.state.count+ 1});
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }

    render() {
        return(
            <div>
                <span className={this.getBadgeClass()}>{this.formateCount()}</span>
                <button
                    onClick={this.doHandleIncrement}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
            
            </div>
        );
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

