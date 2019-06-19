import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


var firebaseConfig = {
  apiKey: "AIzaSyA63vl9X4DyG8YKZIz22pRMj_EbFRkEjng",
  authDomain: "bloc-chat-82765.firebaseapp.com",
  databaseURL: "https://bloc-chat-82765.firebaseio.com",
  projectId: "bloc-chat-82765",
  storageBucket: "bloc-chat-82765.appspot.com",
  messagingSenderId: "610869447632",
  appId: "1:610869447632:web:ffc14500f185efba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoom: null,
      user: null
    };
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="App">
        <aside id="sidebar">
          <h1 className="App-title">Bloc Chat</h1>
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} />
        </aside>
        <aside id="sidebar-bottom">
          <User firebase={firebase} user={this.state.user} setUser={this.setUser.bind(this)} />
        </aside>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>
    );
  }
}

export default App;
