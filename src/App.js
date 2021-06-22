import './App.css';
import Home from './Home'
import './Home.css'
import Navbar from './Navbar'
import {Switch,Route} from 'react-router-dom'
import Sorting from './sorting_algo'
import String from './string_algo'
import ShortestPath from './shortestpath'
import Rng from './rng'
import Error from './Error'

function App() {
  if (window.screen.width < 1280) {
    window.location.href = "error";
  }
  return (
    <div className="main">
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/sorting' component={Sorting}></Route>
          <Route exact path='/string' component={String}></Route>
          <Route exact path='/shortestpath' component={ShortestPath}></Route>
          <Route exact path='/R&G' component={Rng}></Route>
          <Route exact path='/error' component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
