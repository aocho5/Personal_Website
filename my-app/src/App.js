import logo from './logo.svg';
import './App.css';
import screenshot from './images/screenshot-2025-04-15.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={screenshot} alt="Screenshot" className="Profile-image" />
        <a
          className="App-name"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anahi Ochoa
        </a>
      </header>
    </div>
  );
}

export default App;
