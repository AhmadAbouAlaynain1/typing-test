const TypingInput = ({ typed, setTyped, started }) => {
  return (
    <div className="p-5 m-5">
      {started && (
        <textarea
          className="form-control"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder="Start Typing Here"
        />
      )}
    </div>
  );
};

export default TypingInput;
