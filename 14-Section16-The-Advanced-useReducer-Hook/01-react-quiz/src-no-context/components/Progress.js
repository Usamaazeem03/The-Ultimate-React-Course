function Progress({ index, numQuestions, points, maxPossiblePoints, answers }) {
  return (
    <header className="progress">
      <progress value={index} max={numQuestions} />

      <p>
        Question <strong>{index + Number(answers !== null)}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}{" "}
      </p>
    </header>
   
    
  );
}

export default Progress;
