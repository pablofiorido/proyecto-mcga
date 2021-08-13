//import ToDoList from "./to-do-list"
//export default ToDoList


  
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { addTodo, fetchTodos, editTodo, deleteTodo } from "../../../redux/todos/thunks";

import ToDoList from "./to-do-list";

//ESTA SCREEN CONTIENE LA LISTA DE TAREAS, CONECTADA CON REDUX, PARA PODER LEER LA LISTA O ESTA CARGANDO LA UI DEL STATE DE REDUX

const mapStateToProps = state => ({
    list: state.todos.list,
    error: state.todos.error,
    isLoading: state.todos.isLoading
})


// el primer parametro de la funcion connect es el mapStatToProps --> inyecta el state de redux como props al componente.
// esta funcion va como segundo parametro en la funcion connect y te permite despachar acciones o thunks.
// en este caso son todos thunks, estan importados en la linea 3.
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodos,
    editTodo,
    deleteTodo,
    addTodo
}, dispatch)        //COMPONENTE


// el componente es lo q va en el segundo parentesis.
// gracias al connect, voy a recibir tanto el state y los thunks/actions como props en el componente asi lo puedo usar accediendo a this.props o haciendo destructuring de this.props
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);