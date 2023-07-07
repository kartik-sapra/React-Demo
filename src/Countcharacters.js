import React from 'react';
class CountCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            counter: 0
        };
        this.onMessageChange = this.onMessageChange.bind(this);
    }
    onMessageChange(event) {    
        this.setState({
            
            counter: event.target.value.length,
            message: 'Message has' + event.target.value.length + ' number of Characters'
        });
    }
    render() {
        
        return <div>
            <h2>swagat nhi krenge hmara</h2>
            <p>      <label><b>likho</b> <input type="text" onChange={this.onMessageChange}></input></label>
            </p>
            <p>                <label>{this.state.message}</label> 
            </p>
            <p>                <label>{this.state.counter}</label>
            </p>
        </div>
    }
}
export default CountCharacters
