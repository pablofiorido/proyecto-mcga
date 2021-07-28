
import './style.css';
import React from 'react';



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
            <div className="LoginForm">
                <h1>Formulario de Log In</h1>
                <div class="formulariostyle">
                <h2>Usuario</h2>
                <input value={this.state.username} name="username" onChange={this.handleChange} />

                <h2>Contraseña</h2>
                <input value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
                <button className="LoginButton">INICIAR SESION</button>
                
            </div>
        
            );
    }
}   

export default LoginForm;
