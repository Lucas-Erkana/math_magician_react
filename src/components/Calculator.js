import React from 'react';
import Buttons from './Buttons';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="cal-operations">
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
