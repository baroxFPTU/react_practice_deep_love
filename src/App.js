import "./App.css";
import React, { useReducer, useEffect } from "react";
import AreaPlayer from "./components/AreaPlayer";
import ModalQuestion from "./components/ModalQuestion";
import { actions, GameReducer } from "./store";
import { INITIAL_STATE, API_KEY } from "./store/constant";

function App() {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
  const { isStart, isShowQuestion, listQuestions, playerTurn } = state;

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch(API_KEY);
      const data = await response.json();

      dispatch(actions.updateQuestions(data));
    }
    try {
      getQuestions();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
