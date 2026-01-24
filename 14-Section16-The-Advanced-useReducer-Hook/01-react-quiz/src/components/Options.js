function Options({ questions, dispatch, answers }) {
  const hasAnswered = answers !== null;
  return (
    <div className="options">
      {questions?.options.map((option, index) => (
        <button
          className={`btn btn-option ${answers === index ? "answer" : ""} ${hasAnswered ? (index === questions.correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
