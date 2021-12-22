import { READY, RESTART, SHOW_QUESTION, UPDATE_QUESTIONS } from "./constant";

export const restart = () => {
  return {
    type: RESTART,
  };
};

export const showQuestion = (payload) => {
  return {
    type: SHOW_QUESTION,
    playerTurn: payload,
  };
};

export const isReady = () => {
  return {
    type: READY,
  };
};

export const updateQuestions = (payload) => {
  return {
    type: UPDATE_QUESTIONS,
    newQuestions: payload,
  };
};
