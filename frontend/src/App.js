import { Route } from 'react-router-dom';
import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

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
