import logo from './logo.svg';
import './App.css';

function App() {
 
    const food = "pizza";
    return (
       <div className="App">
       <h1>Mobile Operating System</h1>
      <li>BlackBerry</li>
      <li>Android</li>
      <li>iOS</li>
      <li>windows phone</li>
      
      <br></br>
      <h1>Mobile Manufactors</h1>
      <li>SamSung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
