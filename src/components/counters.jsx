import React, { Component } from 'react';
import Counter from './clicker';

class Counters extends Component {
    

    render() { 
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncremenet={this.props.onIncremenet}
                        counter={counter}
                    >
                       
                    </Counter>)}
              
            </div>
         );
    }
}
 
export default Counters;