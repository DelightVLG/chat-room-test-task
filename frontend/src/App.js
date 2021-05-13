import { Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Join />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
    </div>
  );
}

export default App;
