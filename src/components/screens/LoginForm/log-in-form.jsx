
// import './style.css';
import React from 'react';
import { TextField } from '../../shared/input/input';
import Button from "../../shared/button/button";
import css from "./login.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { mapError } from "../../../helpers/error-format";
import { isValidEmail } from "../../../helpers/validations";
import { LOGIN_FULFILLED } from "../../../redux/auth/constants";
import { ErrorLabel } from "../../shared/label/errorLabel";
import { loginFulfilled } from '../../../redux/auth/actions';
import { login } from '../../../redux/auth/thunks';
import SigninForm from '../SigninForm';



const Login = ({ login, isLoading, loginError }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();
  const handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    if (event.target.name === "password") {
      setUserPassword(value);
    } else {
      setUserEmail(value);
    }
  };

  useEffect(() => {
    if (userEmail && !isValidEmail(userEmail)) {
      setError("InvalidEmail");
    } else {
      setError("");
    }
    if (!error && userEmail && userPassword) {
      setError("");
    }
  }, [userEmail, userPassword, error]);

  const handleBlur = (event) => {
    event.persist();
    if (event.target.name === "password") {
      setPasswordFocused(true);
    } else {
      setEmailFocused(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ email: userEmail, password: userPassword });
    console.log(response);
    if (response.type === LOGIN_FULFILLED) {
      history.push("/todos");
    }
  };

const SigninScreen = (event) => {
  history.push("/Signin");
}
  

  useEffect(() => {
    if (wasInputFocused && (!!!userEmail || !!!userPassword)) {
      setError("Incompleted");
    }
  }, [error, userEmail, userPassword, emailFocused, passwordFocused]);

  const isButtonDisabled = !!!userEmail || !!!userPassword || error;
  const wasInputFocused = emailFocused && passwordFocused;



  return (

    
    <div className={css.container}>
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <h1>LOG IN</h1>
        <div className={css.inputsWrapper}>
          <TextField
            label="Email"
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            onBlur={handleBlur}
          />
          <br />
          <ErrorLabel message={mapError[error] || loginError} />
          <br />
        </div>
        <Button
          type="submit"
          size="height"
          disabled={isButtonDisabled || isLoading}
        >
          {!isLoading ? "Login" : "Loading..."}
        </Button>

        <Button
          type="signin"
          size="height"
          disabled={isButtonDisabled || isLoading}
          onClick={SigninScreen}
        >
          Registrate
        </Button>


      </form>
    </div>
  );
};

export default Login;



        /*
        <span onClick={SigninScreen}> No tienes una cuenta? Crea una aqui </span>

        <button onClick= {SigninScreen}>SIGN IN FORM</button>
        */

/*

class LoginForm extends React.Component {




    constructor(props) {

        super(props)

        this.state = {
            username: "",
            password: "",
       }

       this.handleChange = this.handleChange.bind(this);

       

    }

    
    handleChange(e) {
        e.persist()
     this.setState({[e.target.name]: e.target.value})
    }


  


    render() {

        return (

            <div className="main">

                <div className="Container">

                    
                <form onSubmit={console.log(this.state.username, this.state.password)}>

                <div className="FormStyle">


            <div className="FormUser">
               <h2 className="FormData">USUARIO</h2>
              <TextField
                  value={this.state.username}
                  name="username"
                   placeholder="usuarios"
                   onChange={this.handleChange}
               />

  
            </div>

            <div className="FormPass">
             <h2 className="FormData">CONTRASEÑA</h2>
             <TextField
                  value={this.state.password}
                  name="password"
                  placeholder="******"
                  onChange={this.handleChange}
             />

            </div>
            </div>

            <div className="FormButton">

            <Button type="submit">LOG IN</Button>
            </div>

        </form>

                
                </div>
            </div>

            );
    }
}   

export default LoginForm;

*/


/*

     <h1 className="FormTitle">Log In</h1>
                <div className="FormStyle">

                <div className="FormUser">
                <h2 className="FormData">Usuario</h2>
                <input value={this.state.username} name="username" onChange={this.handleChange} />
                </div>

                <div className="FormPass">
                <h2 className="FormData">Contraseña</h2>

                <input value={this.state.password} name="password" placeholder="******" onChange={this.handleChange} />
                    
                            

                <input value={this.state.password} name="password" onChange={this.handleChange} />
                </div>

                </div>
                <div className="FormButton">
                <button className="LoginButton">INICIAR SESION</button>
                </div>

                */