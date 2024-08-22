import Preview from './components/Preview';
import logo from './imgs/logo.png'
import theatre from './imgs/theatre.png'

function App() {
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
        <p className='more'>Узнать подробнее</p>
      </div>
      <div className='white-background'></div>
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
    </div>
  );
}

export default App;
