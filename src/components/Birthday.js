import React, {Component} from 'react';
import './BirthdayStyle.css'

class Birthday extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.ageDown
        }
    }
    render(){
        return(
        
        <fieldset>
            <p>Age: {this.state.age} </p>
            <p>Haircolor: {this.props.hairDown}</p>
            <button onClick={ 
                ()=>{
                    this.setState(
                        {age : this.state.age + 1,}
                    )
                }
            }
            >Birthday Button for {this.props.firstDown} {this.props.lastDown} </button>
        </fieldset>
        
        )
    }
}
export default Birthday;