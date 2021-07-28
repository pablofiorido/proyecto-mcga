import './App.css';
import ToDoList from './components/screens/to-do-list';
import LoginForm from './components/screens/LoginForm';

import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'

function App() {




  return (
    <div className="App">

<BrowserRouter>
<Switch>
        <Route exact path="/login" component={<LoginForm />} />
       <Route exact path="/todos" component={<ToDoList />} />


       <button><Link to="/todos">link a TO DO LIST</Link></button>

       </Switch>

</BrowserRouter>

<LoginForm/>


    </div>
  );
}

export default App;
