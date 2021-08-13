import React, { Component } from 'react';
import Counter from './clicker';

class Counters extends Component {
    

    render() {
        const { onReset, onDelete, onIncremenet, counters } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncremenet={onIncremenet}
                        counter={counter}
                    >
                       
                    </Counter>)}
              
            </div>
         );
    }
}
 
export default Counters;