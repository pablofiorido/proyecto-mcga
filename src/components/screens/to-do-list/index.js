import ToDoList from "./to-do-list"
//export default ToDoList


  
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, fetchTodos, editTodo, deleteTodo } from "../../../redux/thunks";
import ToDoList from "./to-do-list";

const mapStateToProps = state => ({
    list: state.todos.list,
    error: state.todos.error,
    isLoading: state.todos.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodos,
    editTodo,
    deleteTodo,
    addTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);