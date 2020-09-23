import React from 'react';
import { Link } from 'react-router-dom';

export default class MeetingLink extends React.Component {
    render() {
        return (
            <>
                <Link to={`meeting/${this.props._id}`}>{this.props.name}</Link>
            </>
        )
    }
}