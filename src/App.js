import News from './components/News';
import Preview from './components/Preview';
import logo from './imgs/logo.png'
import theatre from './imgs/theatre.png'
import MoreInfo from './components/MoreInfo';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/MoreInfo'); // Переход на страницу "Подробнее"
    console.log('ИДИ НАХУЙ')
  };

  return (
    <div className="app">
      <header>
        <img src={logo}></img>
        <div className="menu">
          <p>Главная</p>
          <p>Афиша</p>
          <p>Новости</p>
          <p>О театре</p>
        </div>
      </header>
      <img className='theatre' src={theatre}></img>
      <p className='name'>Казанский театр юного зрителя</p>
      <div className='theatre-info-background'></div>
      <div className='theatre-info'>
        <p className='h1 h'>Дата основания</p>
        <p className='info1 info'>1932 год</p>
        <p className='h2 h'>2020-2021 год</p>
        <p className='info2 info'>34 спекталя</p>
        <p className='h3 h'>Абсолютно для всех</p>
        <p className='info3 info'>0+</p>
        <p className='more' onClick={handleButtonClick}>Узнать подробнее</p>
      </div>
      <div className='white-background'></div>
      <p className='up-slider-text'>Ближайшие премьеры</p>
      <div className='slider-pos'>
        <div className='slider'>
          <Preview />
        </div>
      </div>
      <div className='red-background'></div>
      <div className='more-info'>
        <button>Правила поведения</button>
        <button>Панорама зала</button>
        <button>История театра</button>
        <button>Коллектив театра</button>
      </div>
      <p className='theatre-news'>Новости театра</p>
      <p className='more-news'>Показать все<svg width="61" height="12" viewBox="0 0 61 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.5303 6.53034C60.8232 6.23744 60.8232 5.76257 60.5303 5.46968L55.7574 0.696704C55.4645 0.403811 54.9896 0.403811 54.6967 0.696704C54.4038 0.989597 54.4038 1.46447 54.6967 1.75736L58.9393 6.00001L54.6967 10.2426C54.4038 10.5355 54.4038 11.0104 54.6967 11.3033C54.9896 11.5962 55.4645 11.5962 55.7574 11.3033L60.5303 6.53034ZM-6.55671e-08 6.75L60 6.75001L60 5.25001L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="#282828"/>
      </svg>
      </p>
      <News />
    </div>
  );
}

export default App;
