
import './style.css';
import React from 'react';

import { TextField } from '../../shared/input/input';

import Button from "../../shared/button/button";




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