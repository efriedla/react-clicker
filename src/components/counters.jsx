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

    handleDelete = (counterId) => {
        console.log("Delete called ", counterId);
        // create a new counter array and filter out the one being called and let React update the state
        const counters = this.state.counters.filter(c => c.id !== counterId);
        // this.setState({ counters: counters });
        //simplified
        this.setState({counters})
    };

    render() { 
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    >
                       
                    </Counter>)}
              
            </div>
         );
    }
}
 
export default Counters;