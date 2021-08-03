import './style.css';
import React from 'react';
import Button from "../../shared/button/button"
import ToDoList from '../to-do-list';
import LoginForm from '../LoginForm';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'



class Home extends React.Component {

    constructor(props) {

        super(props)

    }

    
    handleChange(e) {
        e.persist()
     this.setState({[e.target.name]: e.target.value})
    }
  

    render() {

        return (


            <div className="container">

                <h1>HOME SCREEN !!!</h1>

                        <BrowserRouter>
                        <div className="App">
                        <Redirect to="/Home" />

                        <Button type="menu"><Link to="/todos">TO DO LIST</Link></Button>
                        <Button type="menu"><Link to="/login">SIGN UP</Link></Button>

                        <Route exact path="/login"><LoginForm /></Route>
                        <Route exact path="/todos"><ToDoList /></Route>

                        </div>
                        </BrowserRouter>
            </div>
                
            );
    }
}   

export default Home;
