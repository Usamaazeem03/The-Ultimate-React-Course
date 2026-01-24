import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import "./App.css";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import FinishScreen from "./components/FinishScreen";
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
        timeRemaining: 10,
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
function App() {
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
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "setQuestions", payload: data }))
      .catch((error) => dispatch({ type: "setError", payload: "error" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answers={answers}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answers={answers}
            />
            <Footer>
              <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
              <NextButton
                dispatch={dispatch}
                answers={answers}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
