import React, {Component} from 'react';

class UserDetails extends Component {
    render() {
        const {first, last, age, location, description} = this.props.currentUser;
        return (
            <div>
                <p>Name: {first} {last}</p>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
                <p>{description}</p>
            </div>
        )
    }
}

export default UserDetails;