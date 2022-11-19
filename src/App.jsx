import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import BtDisparo from './components/btDisparo.jsx';
import Select from './components/select.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <div>
        <h1>Disparador</h1>
        <div className="card">
          <div className="card-body">
            <Select />
          </div>
          <span>Ou cole os seus contatos:</span>
          <textarea placeholder="Cole os seus contatos"></textarea>
        </div>

        <textarea placeholder="Digite a sua mensagem"></textarea>
        {/* <button style={{ 'background-color': '#1a1a1a', color: 'white' }}>
          Começar disparo
        </button> */}

        <p>
          <span className="">Imagem </span>
          <input id="imagemInput" type="file"></input>
        </p>

        <p>
          <span className="">Video </span>
          <input id="imagemInput" type="file"></input>
        </p>

        <p>
          <span className="">Audio </span>
          <input id="imagemInput" type="file"></input>
        </p>
      </div>

      <BtDisparo />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
