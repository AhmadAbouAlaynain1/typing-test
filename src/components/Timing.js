const Timing = ({ started, toggleStarted, setTimer }) => {
  return (
    <div>
      <select
        name="timing"
        id="timing"
        className="timing-select"
        onChange={(e) => {
          setTimer(e.target.value * 60);
        }}
      >
        <option value={0}>Select Timing</option>
        <option value={1}>1 minute</option>
        <option value={3}>3 minutes</option>
        <option value={5}>5 minutes</option>
        <option value={10}>10 minutes</option>
      </select>
      <button className="btn" onClick={() => toggleStarted()}>
        {started ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Timing;
