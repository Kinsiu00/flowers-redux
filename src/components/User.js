import React, {Component} from 'react';

class User extends Component {
    
    handleCurrentUser = () => {
        this.props.setCurrentUser(this.props.eachUser)
    }

    render() {
        const {first, last} = this.props.eachUser
        return (
            <p className='clickMe' onClick={this.handleCurrentUser}>{last}, {first}</p>
        )
    }
}

export default User;