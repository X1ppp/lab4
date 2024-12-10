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
      </header>
    </div>
  );
}

export default App;
