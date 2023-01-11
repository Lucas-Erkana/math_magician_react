import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ className, click, text }) => (
  <button type="button" className={className} onClick={click}>
    {text}
  </button>
);

Btn.propTypes = {
  className: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Btn;
