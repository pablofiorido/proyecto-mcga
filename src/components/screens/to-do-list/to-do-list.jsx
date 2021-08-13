import React from "react";
import ToDo from "./to-do";
import Button from "../../shared/button/button"
import { AddIcon } from "../../assets/icons";
import { EditIcon } from "../../assets/icons";
import { DeleteIcon } from "../../assets/icons";
import { CheckmarkIcon } from "../../assets/icons";
import { TextField } from "../../shared/input/input";
import { Overlay } from "../../shared/overlay/overlay";
import css from "./to-do-list.module.css";



class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.inputRef = React.createRef(null);
    this.state = {
      value: "",
      editing: undefined,
      selectedTask: undefined,
    };
  }

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  handleEdit(id, value) {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
    this.setState({ editing: id });
    this.setState({ value });
  }

  handleDelete(id) {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  handleTaskClick(id) {
    const { selectedTodo } = this.state;
    if (selectedTodo !== id) {
      this.setState({ selectedTodo: id });
    }
  }

  renderList() {
    const { list } = this.props;
    const { selectedTodo } = this.state;
    return (
      <ul className={css.listContainer}>
        
        {list.map((todo) => {
          console.log(todo._id)
          console.log("entro al map ToDos", todo)
          const {_id, description } = todo;
          
          return (
            <ToDo
              onClick={() => this.handleTaskClick(_id)}
              key={_id}
              description={description}
              onDelete={() => this.handleDelete(_id)}
              onEdit={() => this.handleEdit(_id, description)}
              isSelected={_id === selectedTodo} 
            />
          );
        })}
      </ul>
    );
  }

  handleChange(e) {
    e.persist();
    this.setState({ value: e.target.value });
  }

  resetForm() {
    this.setState({ value: "", editing: undefined, selectedTodo: undefined });
  }

  handleSubmit(e) {
    const { editing, value } = this.state;
    const { addTodo, editTodo } = this.props;
    // previene que recargue la pagina
    e.preventDefault();

    if (!!editing) {
      editTodo(editing, value);
    } else {
      addTodo({ description: value });
    }
    this.resetForm();
  }

  render() {
    const { value, editing } = this.state;
    const { isLoading, error } = this.props;
    return (
      <>
        <div className={css.container}>
          {!!error && <Overlay message={error} />}
          {isLoading && <Overlay message="Loading..." />}
          <form className={css.formContainer} onSubmit={this.handleSubmit}>
            <TextField
              inputRef={this.inputRef}
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Add a new todo"
              required
            />
            <Button
              //agregar texto del boton
              style={{ marginTop: "1px" }}
              type="submit"
              size="small"
              disabled={!!!value}
              icon={editing ? <CheckmarkIcon /> : <AddIcon />}
              
            >
            AGREGAR
            </Button>
           
          </form>
          {this.renderList()}
        </div>
      </>
    );
  }
}

export default ToDoList;




/*

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: "dsadsadsa", description: "descrip xxxx" }],
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState({ value: e.target.value });
  }

  renderList() {
    return (
      <ul>
        {this.state.list.map((item) => (
          <ToDo id={item.id} description={item.description} />
        ))}
      </ul>
    );
  }




  
  render() {
    return (
      <div>

        <div>
          <input value={this.state.value} onChange={this.handleChange} />
          <Button type="add">Add</Button>
        </div>

        <div>
        <input value={this.state.value} onChange={this.handleChange} />
          <Button type="edit">Edit</Button>
        </div>

        <div>
        <input value={this.state.value} onChange={this.handleChange} />
          <Button type="delete">Delete</Button>
        </div>

        <div>
        <input value={this.state.value} onChange={this.handleChange} />
          <Button type="disabled">Disabled</Button>
        </div>

        {this.renderList()}
      </div>
    );
  }
}

export default ToDoList;


*/