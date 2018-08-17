import React, { Component } from 'react';
import './App.css';
import Data from './components/Data.js';
import UserList from './components/UserList.js';
import UserDetails from './components/UserDetails.js';
import { connect } from 'react-redux'
import { actions } from './store.js'

class App extends Component {

  render() {
    return (
      <div>
        <UserList userData={Data} setCurrentUser={this.props.onNewCurrentUser}/>
        {
          this.props.currentUser &&
          <div>
            <h4>User Details</h4>
            <UserDetails currentUser={this.props.currentUser}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewCurrentUser(newUser) {
      dispatch(actions.newCurrentUser(newUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);