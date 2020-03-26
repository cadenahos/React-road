import React, { Component }from 'react';
import './App.css';

class App extends Component {
  render() {
      const helloWord = 'Hello new';

    return(
      <div className="App">
        <h2>{helloWord}</h2>
      </div>
    );
  }
}

export default App;
