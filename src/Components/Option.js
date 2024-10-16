import { useQuiz } from '../contexts/QuizContext';

function Option({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payLoad: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
