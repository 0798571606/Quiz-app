import { useQuiz } from '../contexts/QuizContext';
import Option from './Option';

const Questions = () => {
  const { questions, index } = useQuiz();
  const question1 = questions.at(index);

  return (
    <div>
      <h4>{question1.question}</h4>
      <Option question={question1} />
    </div>
  );
};

export default Questions;
