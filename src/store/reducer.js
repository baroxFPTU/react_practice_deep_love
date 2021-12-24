import {
  INITIAL_STATE,
  READY,
  RESTART,
  SHOW_QUESTION,
  UPDATE_QUESTIONS,
} from "./constant";

function reducer(state, action) {
  switch (action.type) {
    case RESTART:
      return {
        ...state,
        isShowQuestion: false,
        playerTurn: null,
      };
    case SHOW_QUESTION:
      return {
        ...state,
        isReady: 0,
        isStart: false,
        isShowQuestion: true,
        playerTurn: action.playerTurn,
      };
    case READY:
      if (state.isReady !== 2) {
        return {
          ...state,
          isReady: (state.isReady += 1),
        };
      }

      return {
        ...state,
        isShowQuestion: false,
        isStart: true,
      };
    case UPDATE_QUESTIONS:
      return {
        ...state,
        listQuestions: [...action.newQuestions],
      };
    default:
      throw new Error("Invalid action");
  }
}

export default reducer;
