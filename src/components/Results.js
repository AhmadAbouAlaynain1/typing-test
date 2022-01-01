const Results = ({ time, wordsCorrect, wordsTotal }) => {
  return (
    <div className="p-5 m-5  flex">
      <h3>Typing Speed (wpm): {wordsTotal / (time / 60)}</h3>
      <h3>Accuracy: {(wordsCorrect / wordsTotal) * 100}</h3>
      <h3>
        Net Speed (wpm):{" "}
        {(wordsTotal / (time / 60)) * (wordsCorrect / wordsTotal)}
      </h3>
    </div>
  );
};

export default Results;
