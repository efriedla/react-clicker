import React, { Component } from 'react';
import Counters from './components/counters';
import Nav from './components/nav';

class App extends Component {
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
        //clone
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({ counters });
    }
  
  render() {
    return (
      <React.Fragment>
        <Nav totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncremenet={this.handleIncrement}
          counters={this.state.counters}

        />
      
      
    </React.Fragment>
      
    );
      
  
  }
    
}


export default App;
