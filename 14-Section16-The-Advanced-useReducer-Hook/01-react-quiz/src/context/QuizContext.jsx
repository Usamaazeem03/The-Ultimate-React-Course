import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answers: null,
  points: 0,
  highscore: 0,
  timeRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        timeRemaining: action.payload.length * SECS_PER_QUESTION,
      };
    case "setError":
      return { ...state, status: action.payload };
    case "setStart":
      return { ...state, status: action.payload };
    case "newAnswer":
      return {
        ...state,
        answers: action.payload,
        points:
          action.payload === state.questions[state.index].correctOption
            ? state.points + state.questions[state.index].points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answers: null };
    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answers: null,
        points: 0,
        timeRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}
function QuizContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answers,
    points,
    highscore,
    timeRemaining,
  } = state;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "setQuestions", payload: data }))
      .catch((error) => dispatch({ type: "setError", payload: "error" }));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answers,
        points,
        highscore,
        timeRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

const useQuiz = function () {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside QuizContextProvider");
  return context;
};

export { QuizContextProvider, useQuiz };
