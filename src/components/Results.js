const Results = ({ time, wordsCorrect, wordsTotal }) => {
  return (
    <div className="p-5 m-5  flex">
      <h3>Typing Speed (wpm): {Math.ceil(wordsTotal / (time / 60))}</h3>
      <h3>Accuracy: {Math.ceil((wordsCorrect / wordsTotal) * 100)}</h3>
      <h3>
        Net Speed (wpm):{" "}
        {Math.ceil((wordsTotal / (time / 60)) * (wordsCorrect / wordsTotal))}
      </h3>
    </div>
  );
};

export default Results;
