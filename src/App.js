import './App.css';
import ToDoList from './components/screens/to-do-list';
import LoginForm from './components/screens/LoginForm';
import Home from './components/screens/Home';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/screens/LoginForm";
import PrivateRoute from "./helpers/privateRoute";
import Button from './components/shared/button/button';
import SigninForm from './components/screens/SigninForm';
import { useHistory } from "react-router";



const SigninScreen = async (event) => {
  event.preventDefault();
  let history = useHistory();
    history.push("/Signin");
}

<button onClick= {SigninScreen}>SIGN IN FORM</button>

function App() {
  return (

      // el provider es para inyectar el state de redux como props a todos los componentes dentro de App,
    // pero si no conectas el componente con la funcion connect en el index de cada componente, no funciona.
    <Provider store={store}>
      <BrowserRouter>
        <Switch>           {/* switch se usa para cambiar entre una ruta u otra */}
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/todos" component={ToDoList} />      {/* el private route chequea q el user este autenticado, si no lo esta, redirige al login, sino devuelve el componente q le pases en la prop component */}
          <Route exact path="/Signin" component={SigninForm} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// <SigninForm />

/*

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


*/