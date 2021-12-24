import React, { useReducer } from "react";
import "./App.css";
import AreaPlayer from "./components/AreaPlayer";
import ModalQuestion from "./components/ModalQuestion";
import { actions, GameReducer } from "./store";
import { INITIAL_STATE } from "./store/constant";

function App() {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
  const { isStart, isShowQuestion, listQuestions, playerTurn } = state;

  const handleUpdateQuestions = (newQuestions) => {
    dispatch(actions.updateQuestions(newQuestions));
  };

  return (
    <div className="deepLove">
      <AreaPlayer
        playerId="1"
        isStart={isStart}
        answerTurn={playerTurn}
        dispatch={dispatch}
      />
      <AreaPlayer
        playerId="2"
        isStart={isStart}
        answerTurn={playerTurn}
        dispatch={dispatch}
      />
      {isShowQuestion && (
        <ModalQuestion
          questions={listQuestions}
          onUpdateQuestions={handleUpdateQuestions}
          playerTurn={playerTurn}
        />
      )}
    </div>
  );
}

export default App;
