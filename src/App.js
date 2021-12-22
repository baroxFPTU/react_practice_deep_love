import React, { useReducer } from "react";
import "./App.css";
import AreaPlayer from "./components/AreaPlayer";
import ModalQuestion from "./components/ModalQuestion";
import { actions, GameReducer } from "./store";
import { INITIAL_STATE } from "./store/constant";

function randomPlayer() {
  return Math.floor(Math.random() * (2 - 1 + 1) + 1);
}

function App() {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
  const { isStart, isShowQuestion, listQuestions, playerTurn } = state;
  const handleRestart = () => {
    console.log("restart game");
    dispatch(actions.restart());
  };

  const handleFinishCountDown = () => {
    const randomPlayerId = randomPlayer() + "";
    console.log("random playerid ", randomPlayerId);
    dispatch(actions.showQuestion(randomPlayerId));
  };
  const handleIsReady = () => {
    dispatch(actions.isReady());
  };

  const handleUpdateQuestions = (newQuestions) => {
    dispatch(actions.updateQuestions(newQuestions));
  };

  return (
    <div className="deepLove">
      <AreaPlayer
        playerId="1"
        readyFallback={handleIsReady}
        finishFallback={handleFinishCountDown}
        isStart={isStart}
        answerTurn={playerTurn}
        onRestart={handleRestart}
      />
      <AreaPlayer
        playerId="2"
        readyFallback={handleIsReady}
        finishFallback={handleFinishCountDown}
        isStart={isStart}
        answerTurn={playerTurn}
        onRestart={handleRestart}
      />
      {isShowQuestion && (
        <ModalQuestion
          questions={listQuestions}
          onUpdateQuestions={handleUpdateQuestions}
        />
      )}
    </div>
  );
}

export default App;
