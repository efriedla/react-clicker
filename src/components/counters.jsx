import React, { Component } from 'react';
import Counter from './clicker';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    handleDelete = () => {
        console.log("Delete called");
    };

    render() { 
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        value={counter.value}
                        id={counter.id}
                        onDelete={this.handleDelete}
                    >
                       
                    </Counter>)}
              
            </div>
         );
    }
}
 
export default Counters;