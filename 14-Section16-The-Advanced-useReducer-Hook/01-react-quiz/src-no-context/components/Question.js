import Options from "./Options";
function Question({ questions, dispatch, answers }) {
  return (
    <div>
      <h4>{questions?.question}</h4>
      <Options questions={questions} dispatch={dispatch} answers={answers} />
    </div>
  );
}

export default Question;
