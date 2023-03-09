import logo from './logo.svg';
import './App.css';
import QuestionBox from './QuestionBox';

import questions from './questions'

function App() {
  return (
    <div className="App">
      <h1>ALTCAMPUS FAQ</h1>
      {questions.map((question) => 
      <div className='question-cont'>
        <QuestionBox
        className="question-box"
        question = {question.Q}
        answer = {question.A}
        />
      </div>
      )}

      
    </div>
  );
}

export default App;
