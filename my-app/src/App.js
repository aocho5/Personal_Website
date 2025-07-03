import './App.css';
import screenshot from './images/screenshot-2025-04-15.png';
import image from './images/projectIcon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Profile-container">
          <div className="Profile-info">
            <img src={screenshot} alt="Screenshot" className="Profile-image" />
            <a
              className="App-name"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
             Anahi Ochoa
            </a>
          </div>
          <div className="Rectangle" />
            <div className="Circle Circle1">
              <img src={image} alt="Project Icon" className="Circle-image" />
            </div>
            <div className="Circle Circle2"></div>
            <div className="Circle Circle3"></div>
            <div className="Circle Circle4"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
