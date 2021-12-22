import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  
};

function Button({children, ...props}) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;