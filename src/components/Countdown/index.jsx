import PropTypes from 'prop-types';
import React from 'react';
import { useCountdown } from '../../store';
import classes from './Countdown.module.css';

Countdown.propTypes = {
  amount: PropTypes.number,
  fallback: PropTypes.func,
  playerId: PropTypes.string,
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