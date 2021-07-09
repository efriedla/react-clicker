import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        
    }

    render() { 
        return(
            <div>
                <span>{this.formateCount()}</span>
                <button>Increment</button>
            
            </div>
        );
    }
    formateCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        // --- reformated
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    
    }
}
 
export default Counter;

