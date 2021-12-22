import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCountdown } from '../../store';

Countdown.propTypes = {
  
};

function Countdown({amount, fallback}) {
  const [countdown] = useCountdown(amount, fallback);

  return (
    <div className= "countdown">
      {countdown}
    </div>
  );
}

export default Countdown;