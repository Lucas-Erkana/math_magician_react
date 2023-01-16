/* eslint-disable */
import React from 'react';

const Btn = (props) => (
  <button type="button" className={props.class} onClick={props.click}>
    {props.text}
  </button>
);

export default Btn;