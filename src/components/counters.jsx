import React, { Component } from 'react';
import Counter from './clicker';

class Counters extends Component {
    

    render() {
        const { onReset, onDelete, onIncremenet, counters } = this.props;
        return (
            <div >
                
                <span className="row align-items-center">
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncremenet={onIncremenet}
                        counter={counter}
                    >
                       
                    </Counter>)}
              
                </span>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2 gx-5"
                >Reset</button>
            </div>
         );
    }
}
 
export default Counters;