import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>there are no tags </p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return(
            <div>
                {/* you can create a inline statement here if length is 0 then print this */}
                {this.state.tags.length === 0 && "Please add a tag!"}
                {this.renderTags()}
            
            </div>
        );
    }
}
 
export default Counter;

