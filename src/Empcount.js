import {React,Component} from 'react'
export class Empcount extends Component{
    state={count:0};
    addEmployee=()=>{
       this.setState({count:this.state.count+1})
       // this.count=this.count+1;
        alert( this.state.count);
    }
    render(){
        return <div>
            <button onClick={this.addEmployee}>Add kr kaka</button>
            <h2>vekhi ja {this.state.count}</h2>
            

        </div>
    }
}