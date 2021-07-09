import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value+ 1});
    }


    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.children}
                <span className={this.getBadgeClass()}>{this.formateCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
            
            </div>
        );
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;

