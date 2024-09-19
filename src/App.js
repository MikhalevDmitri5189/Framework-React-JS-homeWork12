import logo from './logo.svg';
import './App.css';
import CommentsList from './components/CommentsList/CommentsList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HomeWork 2 
        </p>
        
      </header>

      <div>
       <CommentsList />
      </div>
    </div>
  );
}

export default App;