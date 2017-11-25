import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import ForcastList from './components/ForcastList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForcastList />
        <SearchBar />
      </div>
    );
  }
}

export default App;
