import { questions } from "./data";

const INITIAL_STATE = {
  isReady: 0,
  isStart: false,
  playerTurn: null,
  isShowQuestion: false,
  listQuestions: [...questions],
};

const RESTART = "RESTART";
const SHOW_QUESTION = "SHOW_QUESTION";
const READY = "READY";
const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export { INITIAL_STATE, RESTART, SHOW_QUESTION, READY, UPDATE_QUESTIONS };
