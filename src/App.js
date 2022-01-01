import Timing from "./components/Timing";
import WritingText from "./components/WritingText";
import TypingInput from "./components/TypingInput";
import Results from "./components/Results";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(
    "Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other’s experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. They also inspire us to face the hardships of life courageously. Nowadays there are innumerable books and time is scarce. So we should read only the best and the greatest among them. With the help of books we shall be able to make our thinking mature and our life more meaningful and worthwhile. Recently, an exhibition ‘Building A New India’ was held in the capital. It was organized by the Ministry of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian cultural inheritance. First of all, I visited the general section of the exhibition where different charts and photographs depicting India’s development in various fields were set. Most impressive photographs among these were those showing India’s nuclear development. The second section dealt with India’s magnificent historical background. I was fascinated by the pictures of Mohanjodaro excavation. Then I saw the most beautiful and colorful section of the exhibition i.e. the cultural section. It consisted of paintings, sculptures, photographs etc. The Rajasthani and Gujarati paintings were very colourful and attractive. This exhibition, inaugurated by the Prime Minister, lasted for a week. It proved to be of great educational value. It brushed up my knowledge about India as my motherland. It enhanced my respect for my great country, India. I would very much appreciate if the Indian government organized some more such exhibitions."
  );
  const [started, setStarted] = useState(false);
  const [timingElapsed, setTimingElapsed] = useState(-10000000);
  const [timer, setTimer] = useState(0);
  const [typed, setTyped] = useState("");
  const [wordsCorrect, setWordsCorrect] = useState(0);
  const [wordsUsed, setWordsUsed] = useState(0);
  const [time, setTime] = useState(0);

  //Check if button is pressed to start timer
  const toggleStarted = () => {
    setTimingElapsed(0);
    setTyped("");
    setStarted((state) => {
      stopTimer(state);
      return !state;
    });
  };

  //Save values when stopping the timer
  const stopTimer = (stop) => {
    if (stop === true) {
      setText((state) => state.replaceAll("===", ""));
      let typedList = typed.split(" ");
      let textList = text.split(" ");
      let correct = 0;
      let total = 0;
      for (let i = 0; i < typedList.length - 1; i++) {
        if (typedList[i] === textList[i]) {
          correct++;
        }
        total++;
      }
      setWordsCorrect(correct);
      setWordsUsed(total);
      setTime(timingElapsed);
    }
  };

  //Check if timer has ended
  useEffect(() => {
    if (timer - timingElapsed === 0) {
      setTimingElapsed(-10000000);
      setStarted((state) => {
        stopTimer(state);
        return !state;
      });
    }
  }, [timingElapsed]);

  //Start the time clock for the application
  useEffect(() => {
    setInterval(() => {
      setTimingElapsed((state) => state + 1);
    }, 1000);
  }, []);

  //Check correct words whenever user types
  useEffect(() => {
    let typedList = typed.split(" ");
    let textList = text.split(" ");
    if (typed[typed.length - 1] === " " || typed.length === 0) {
      textList[typedList.length - 1] =
        "===" + textList[typedList.length - 1] + "===";
      if (typedList.length > 1) {
        textList[typedList.length - 2] = textList[typedList.length - 2].slice(
          3,
          -3
        );
      }
    }

    setText(textList.join(" "));
  }, [typed]);

  return (
    <div className="container">
      <header className="header">
        <h2>Typing Test | Timer: {started ? timer - timingElapsed : ""}</h2>
        <Timing
          started={started}
          toggleStarted={toggleStarted}
          setTimer={setTimer}
        />
      </header>
      <div className="typing-test-area">
        <h4>We use === word === to identify current word</h4>
        <p className="p-5 m-5">{text}</p>
        <TypingInput setTyped={setTyped} typed={typed} started={started} />
        {!started && (
          <Results
            wordsCorrect={wordsCorrect}
            wordsTotal={wordsUsed}
            time={time}
          />
        )}
      </div>
    </div>
  );
}

export default App;
