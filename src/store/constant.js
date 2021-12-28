const API_KEY =
  "https://deep-love-app-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json";

const INITIAL_STATE = {
  isReady: 0,
  isStart: false,
  playerTurn: null,
  isShowQuestion: false,
  listQuestions: [],
};

const RESTART = "RESTART";
const SHOW_QUESTION = "SHOW_QUESTION";
const READY = "READY";
const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export {
  API_KEY,
  INITIAL_STATE,
  RESTART,
  SHOW_QUESTION,
  READY,
  UPDATE_QUESTIONS,
};
