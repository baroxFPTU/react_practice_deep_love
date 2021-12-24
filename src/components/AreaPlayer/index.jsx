import React from 'react';
import { actions, randomPlayerId } from "../../store";
import Button from '../Button';
import Countdown from '../Countdown';
import classes from './AreaPlayer.module.css';
import thumbsUp from '../../assets/icon/thumbs-up.svg'


AreaPlayer.propTypes = {
  
};

function AreaPlayer({playerId, isStart, answerTurn, dispatch}) {
  const isMe = answerTurn === playerId;
  let playSection = null;
  
  const finish = () => {
    console.log('im finish');
  }

  const handleFinishCountDown = () => {
    const playerId = randomPlayerId() + "";
    console.log("random playerid ", playerId);
    dispatch(actions.showQuestion(playerId));
  };

  const handleIsReady = () => {
    dispatch(actions.isReady());
  };

  const handleRestart = () => {
    dispatch(actions.restart());
  };

  if (answerTurn) {
    playSection = (
      <>
        {(isMe) ?<> <Countdown amount={30} fallback={finish}/></>: <button className={classes.acceptButton} onClick={handleRestart}>Accept</button>}
      </>
    )
  } else {
    playSection = (
      <>
        {isStart ? <Countdown amount={3} fallback={handleFinishCountDown}/> : <di className={classes.readyCaption}><div className={classes.icon}><embed src={thumbsUp} type="" /></div>Ready to play</di>}
        <Button className={classes.buttonReady} data-player-id={playerId} onClick={handleIsReady} once>Start</Button>
      </>
    )
  }

  return (
    <div className={classes.areaPlayer} data-player-id={playerId}>
     {playSection}
    </div>
  );
}

export default AreaPlayer;