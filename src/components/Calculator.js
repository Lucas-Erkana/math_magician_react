import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btn from './eachBtn';
import styles from './Calculator.modules.css';

const Calculator = () => {
  const info = { total: 0, next: null, operation: null };
  const [state, setState] = useState(info);

  const clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(state, buttonName);
    setState(answer);
  };

  const { total, operation, next } = state;
  return (
    <div className={styles.calculator}>
      <h2>Lets do some Math!</h2>
      <div>
        <div className={styles.answer}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.operations}>
          <Btn click={clickReceived} text="AC" />
          <Btn click={clickReceived} text="+/-" />
          <Btn click={clickReceived} text="%" />
          <Btn click={clickReceived} class={styles.maths} text="&#247;" />
          <Btn click={clickReceived} text="7" />
          <Btn click={clickReceived} text="8" />
          <Btn click={clickReceived} text="9" />
          <Btn click={clickReceived} class={styles.maths} text="x" />
          <Btn click={clickReceived} text="4" />
          <Btn click={clickReceived} text="5" />
          <Btn click={clickReceived} text="6" />
          <Btn click={clickReceived} class={styles.maths} text="-" />
          <Btn click={clickReceived} text="1" />
          <Btn click={clickReceived} text="2" />
          <Btn click={clickReceived} text="3" />
          <Btn click={clickReceived} class={styles.maths} text="+" />
          <Btn click={clickReceived} class={styles.zero} text="0" />
          <Btn click={clickReceived} text="." />
          <Btn click={clickReceived} class={styles.maths} text="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
