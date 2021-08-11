import React from 'react';
import { TextField } from '../../shared/input/input';
import Button from "../../shared/button/button";
import css from "../SigninForm";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { mapError } from "../../../helpers/error-format";
import { isValidEmail } from "../../../helpers/validations";
import { LOGIN_FULFILLED } from "../../../redux/auth/constants";
import { REGISTER_FULFILLED } from "../../../redux/auth/constants";
import { ErrorLabel } from "../../shared/label/errorLabel";
import { registerFulfilled } from '../../../redux/auth/actions';
import { login } from '../../../redux/auth/thunks';
import { register } from '../../../redux/auth/thunks';




const Signin = ({ register, isLoading, loginError }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();
  
  const handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    if (event.target.name === "password") {
      setUserPassword(value);
    } if (event.target.name === "email") {
      setUserEmail(value);
    } if (event.target.name === "username"){
        setUserName(value);
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
    console.log(userName)
    const response = await register({email: userEmail, password: userPassword, username: userName, isAdmin: true});
    console.log(response);
    if (response.type === REGISTER_FULFILLED) {
      history.push("/login");
    }
  };

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
        <h1>SIGN IN</h1>
        <div className={css.inputsWrapper}>
          <TextField
            label="Email"
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
          />
          <br />
          <TextField
            label="Username"
            onChange={handleChange}
            name="username"
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
          {!isLoading ? "Sign In" : "Loading..."}
        </Button>
      </form>
    </div>
  );
};

export default Signin;
