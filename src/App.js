import './App.css';
import ToDoList from './components/screens/to-do-list';
import LoginForm from './components/screens/LoginForm';
import Home from './components/screens/Home';

import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import Button from './components/shared/button/button';

function App() {

  return (
    <div className="App">




<BrowserRouter>
        <div className="App">
          <Redirect to="/login" />

          <Button type="menu"><Link to="/todos">TO DO LIST</Link></Button>
          <Button type="menu"><Link to="/login">SIGN UP</Link></Button>
          <Button type="menu"><Link to="/home">HOME</Link></Button>

          <Route exact path="/login"><LoginForm /></Route>
          <Route exact path="/todos"><ToDoList /></Route>
          <Route exact path="/home"><Home /></Route>
          
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
