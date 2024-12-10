import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Колтыпанов Константин Евгеньевич";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
         <p>
          Это тестовый текст, для проверки нового workflow - для деплоя на github pages
         </p>
         <p>
          Это тестовый коммит, для проверли нового workflow - для семантического релиза
         </p>
         <p>
          Ура! Новая минорная версия 1.1.0
         </p>
      </header>
    </div>
  );
}

export default App;
