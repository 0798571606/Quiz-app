import React from 'react';
import { useQuiz } from '../contexts/QuizContext';

const StartScreen = () => {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className='start'>
      <h2>Welcome to the react quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'start' })}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
