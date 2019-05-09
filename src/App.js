import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import SearchResult from './components/searchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <SearchResult />
      </div>
    );
  }
}

export default App;
