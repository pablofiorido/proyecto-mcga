
import './style.css';
import React from 'react';
import Button from "../../shared/button/button"


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

                    <div className="FormStyle">

                        <div className="FormUser">
                            <h2 className="FormData">USUARIO</h2>
                            <input value={this.state.username} name="username" placeholder="usuario" onChange={this.handleChange} />
                        </div>

                        <div className="FormPass">
                            <h2 className="FormData">CONTRASEÑA</h2>
                            <input value={this.state.password} name="password" placeholder="******" onChange={this.handleChange} />
                        </div>

                    </div>

                    <div className="FormButton">
                        <Button type="login">LOG IN</Button>

                        <Button type="login">SIGN UP</Button>
                    </div>
                
                </div>
            </div>

            );
    }
}   

export default LoginForm;


/*

     <h1 className="FormTitle">Log In</h1>
                <div className="FormStyle">

                <div className="FormUser">
                <h2 className="FormData">Usuario</h2>
                <input value={this.state.username} name="username" onChange={this.handleChange} />
                </div>

                <div className="FormPass">
                <h2 className="FormData">Contraseña</h2>
                <input value={this.state.password} name="password" onChange={this.handleChange} />
                </div>

                </div>
                <div className="FormButton">
                <button className="LoginButton">INICIAR SESION</button>
                </div>

                */