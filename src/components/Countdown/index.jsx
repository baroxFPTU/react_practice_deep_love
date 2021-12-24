import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCountdown } from '../../store';
import classes from './Countdown.module.css'

Countdown.propTypes = {
  
};

function Countdown({amount, fallback, playerId}) {
  const [countdown] = useCountdown(amount, fallback);

  return (
    <div className={classes.countdown} data-player-id={playerId}>
      {countdown}
    </div>
  );
}

export default Countdown;