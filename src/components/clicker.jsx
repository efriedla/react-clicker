import React, { Component } from 'react';

class Counter extends Component {
   
    render() {
        return(
            <div>
                <h4>Counter #{this.props.id}</h4>
                <span className={this.getBadgeClass()}>{this.formateCount()}</span>
                <button
                    onClick={() => this.props.onIncremenet(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            
            </div>
        );
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;

