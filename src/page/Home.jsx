import React, { useReducer, useEffect } from 'react';
import AreaPlayer from '../components/AreaPlayer';
import ModalQuestion from '../components/ModalQuestion';
import { actions, GameReducer } from '../store';
import { INITIAL_STATE, API_KEY } from '../store/constant';

function Home(props) {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
  const { isStart, isShowQuestion, listQuestions, playerTurn } = state;

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch(`${API_KEY}/questions.json`);
      const responseData = await response.json();
      const transformedData = [];
      for (const key in responseData) {
        transformedData.push(responseData[key]);
      }

      dispatch(actions.updateQuestions(transformedData));
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
    <>
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
    </>
  );
}

export default Home;