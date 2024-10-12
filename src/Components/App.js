import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Questions from './Questions';
import NextQuestion from './NextQuestion';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';

const App = () => {
  const { status } = useQuiz();
  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              <NextQuestion />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
};

export default App;
