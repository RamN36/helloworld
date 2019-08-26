import React, {Component} from 'react'
class Introduction extends Component
{
    constructor(props)
    {super(props);
        
    this.state={
    message:"hello React",
    user_input:'rai'
    }
    }   
onChangeHandler=(e)=>
{
    const {value}=e.target;
     
    this.setState({user_input:value});
};  
render(){
    return(
        <div>
            <input defaultValue={this.state.user_input} onChange={this.onChangeHandler.bind(this)}/>
            <h1>{this.state.user_input}</h1>
        </div>
    );
}
}

export default Introduction