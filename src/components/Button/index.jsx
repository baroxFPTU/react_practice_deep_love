import PropTypes from 'prop-types';
import React, { useState } from 'react';

Button.propTypes = {
  once: PropTypes.bool,
  onClick: PropTypes.func,
};

function Button({children,once, onClick, ...props}) {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    if (once) {
      setCounter(counter + 1);
    }

    onClick();
  }

  return (
    <button {...props} onClick={handleOnClick} disabled={counter >= 1}>
      {children}
    </button>
  );
}

export default Button;