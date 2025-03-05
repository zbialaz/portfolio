import image from './images/foto_minha.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="Eduardo Bialas"style={{ height: '222', width:'222'}}></img>
        <p>
          This going to be my <strong>portfolio</strong>! 
        </p>

        <h1>Eduardo Bialas</h1>
      </header>
    </div>
  );
}

export default App;
