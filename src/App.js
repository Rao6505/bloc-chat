import React, { Component } from 'react'
import './App.css'
import RoomList from './components/RoomList'
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA63vl9X4DyG8YKZIz22pRMj_EbFRkEjng",
  authDomain: "bloc-chat-82765.firebaseapp.com",
  databaseURL: "https://bloc-chat-82765.firebaseio.com",
  projectId: "bloc-chat-82765",
  storageBucket: "bloc-chat-82765.appspot.com",
  messagingSenderId: "610869447632",
  appId: "1:610869447632:web:ffc14500f185efba"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Bloc Chat</h1>
        <main>
        <h3>Rooms</h3>
           <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;