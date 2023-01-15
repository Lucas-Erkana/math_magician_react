import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.quote}>
    <ul>
      <li>
        Mathematics is the language in which God has written the universe. -
        <span>
          <big>
            <b>Galileo Galilei</b>
          </big>
        </span>
      </li>
      <li>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. -
        <span>
          <big>
            <b>William Paul Thurston</b>
          </big>
        </span>
      </li>
    </ul>
  </div>
);

export default Quote;
