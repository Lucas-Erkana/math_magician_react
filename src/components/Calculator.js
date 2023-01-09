import React from 'react';
import Btns from './Button';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="cal-operations">
        <Btns />
      </div>
    );
  }
}

export default Calculator;
