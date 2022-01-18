import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Album } from './pages/album/Album';
import { Home } from './pages/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:name">
          <Album />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
