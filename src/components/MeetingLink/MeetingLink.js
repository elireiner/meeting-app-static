import React from 'react';
import { Link } from 'react-router-dom';

export default class MeetingLink extends React.Component{
    render(){
        return(
            <>
           <li>{this.props.name}</li>
            </>
        )
    }
}