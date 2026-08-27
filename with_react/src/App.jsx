import { useState } from 'react';

const quizData = [
  {
    question: 'which language runs in a web browser',
    a: 'Java',
    b: 'C',
    c: 'python',
    d: 'Javascript',
    correct: 'd',
  },
  {
    question: 'what does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'what year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the above',
    correct: 'b',
  },
  {
    question: 'which HTML tag is used to define an internal stylesheets?',
    a: '<css>',
    b: '<script>',
    c: '<style>',
    d: '<linkl>',
    correct: 'c',
  },
  {
    question: 'which property is used to change background color in css?',
    a: 'color',
    b: 'bgcolor',
    c: 'background-color',
    d: 'background',
    correct: 'c',
  },
];

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizData[currentQuiz];

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert('please select an answer!');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correct;
    const nextScore = isCorrect ? score + 1 : score;

    if (currentQuiz === quizData.length - 1) {
      setScore(nextScore);
      setIsFinished(true);
      return;
    }

    setScore(nextScore);
    setCurrentQuiz((prev) => prev + 1);
    setSelectedAnswer('');
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.id);
  };

  return (
    <div className="quiz-container" id="quiz">
      {!isFinished ? (
        <>
          <h2 id="question">{currentQuestion.question}</h2>

          <ul>
            {['a', 'b', 'c', 'd'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="answer"
                  id={option}
                  className="answer"
                  checked={selectedAnswer === option}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={option} id={`${option}_text`}>
                  {currentQuestion[option]}
                </label>
              </li>
            ))}
          </ul>

          <button id="submit" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <div className="result" id="result">
          🎉 You Scored {score}/{quizData.length}
        </div>
      )}
    </div>
  );
}

export default App;
