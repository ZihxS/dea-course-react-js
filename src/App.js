import './App.css';
import React from 'react';

class App extends React.Component {

  componentWillMount() {
    console.log("will mounting")
  }

  componentDidMount() {
    console.log("did mounting")
  }

  render() {
    return (
       <h1>TESTING</h1>
    );
  }
}

export default App;
