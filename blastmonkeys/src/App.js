import logo from './logo.svg';
import './App.css';
import circle from './imgs/crayoncircle.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="title">THE BLAST MONKEYS</div>
        <div class="enterContainer">
          <img src={circle} class="circle"/>
          <div class="enter">ENTER</div>
          </div>
      </header>
    </div>
  );
}

export default App;
