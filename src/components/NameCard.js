import React from 'react';
import Birthday from './Birthday'
import './NameCardStyle.css'

class NameCard extends React.Component{
    render() {
        return(
            <div>
            <h1> {this.props.lastName}, { this.props.firstName }  </h1>
            <Birthday ageDown = {this.props.age} hairDown = {this.props.haircolor} firstDown = {this.props.firstName}  lastDown = {this.props.lastName}/> 
        </div>
        )
    }
}
export default NameCard;