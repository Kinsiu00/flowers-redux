import React, {Component} from 'react';
import User from './User.js'

class UserList extends Component {
    render() {
        return (
            <div>
                <h4>List of Users</h4>
                {
                this.props.userData.map((eachUser) => {
                    return(
                        <User key={eachUser.id} eachUser={eachUser} setCurrentUser={this.props.setCurrentUser}/>
                    )
                })
                }
            </div>
        )
    }
}

export default UserList