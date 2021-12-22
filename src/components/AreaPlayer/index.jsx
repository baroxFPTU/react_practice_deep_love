import React, { useState } from 'react';
import Button from '../Button';
import Countdown from '../Countdown';
import classes from './AreaPlayer.module.css';

AreaPlayer.propTypes = {
  
};

function AreaPlayer({playerId, isStart, readyFallback, finishFallback, answerTurn, onRestart}) {
  let playSection = null;
  console.log('re-render');
  const isMe = answerTurn === playerId;
  const finish = () => {
    console.log('im finish');
  }

  if (answerTurn) {
    playSection = (
      <>
        {(isMe) ?<> <Countdown amount={30} fallback={finish}/></>: <button onClick={onRestart}>Accept</button>}
      </>
    )
  }

  const readySection = (
    <>
      {isStart ? <Countdown amount={3} fallback={finishFallback}/> : 'Ready to play'}
      <Button onClick={readyFallback}>Start</Button>
    </>
  );

  return (
    <div className={classes.areaPlayer} data-player-id={playerId}>
     {playSection || readySection}
    </div>
  );
}

export default AreaPlayer;