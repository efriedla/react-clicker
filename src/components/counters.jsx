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

    handleReset = () => {
       const counters =  this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        console.log("Delete called ", counterId);
        // create a new counter array and filter out the one being called and let React update the state
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };
    handleIncrement = counter => {
        console.log(counter);
    }

    render() { 
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncremenet={this.handleIncrement}
                        counter={counter}
                    >
                       
                    </Counter>)}
              
            </div>
         );
    }
}
 
export default Counters;