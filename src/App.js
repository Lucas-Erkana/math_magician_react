import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="application">
        <Calculator />
      </div>
    );
  }
}

export default App;
