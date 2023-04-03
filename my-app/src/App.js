import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <form className="form">
      <h1>Basic Form Setup</h1>
      <label for=""> Name :
        <input type="text"></input>
      </label>
      <label for=""> Email :
        <input type="email"></input>
      </label>
      <label for=""> Contact :
        <input type="contact"></input>
      </label>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
