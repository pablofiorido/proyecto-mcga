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
    super(props);     //SUPER HEREDA METODOS DEL PADRE, EN ESTE CASO EL PADRE ES REACT.COMPONENTE 

    //BINDEO LAS FUNCIONES PARA PODER USARLAS
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.resetForm = this.resetForm.bind(this);

    //USO LA REF DEL INPUT PARA VER SI ESTA FOCUSEADO, POR EJEMPLO SI YA ESCRIBI EN EL
    this.inputRef = React.createRef(null);
    this.state = {
      value: "",
      editing: undefined,
      selectedTask: undefined,
    };
  }

  componentDidMount() {     //CUANDO SE MONTA EL COMPONENTE ENVIO UNA REQ AL BACK USANDO EL THUNK QUE VIENE COMO PROP
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  handleEdit(id, value) {     //FUNCION PARA MANEJAR EL BOTON DE EDITAR
    if (this.inputRef.current) {        //HACE FOCO EN EL INPUT CUANDO SE APRETA EL BOTON ASI PUEDE ESCRIBIR DIRECTAMENTE
      this.inputRef.current.focus();
    }
    this.setState({ editing: id });     //SETEO EL ID EN EL STATE PARA LUEGO USARLO EN LA REQUEST.
    this.setState({ value });           //SETEO EN EL STATE DE VALUE EL VALOR DE LA TAREA SELECCIONADA
  }

  handleDelete(id) {        
    const { deleteTodo } = this.props;
    deleteTodo(id);         //EJECUTO EL THUNK PARA ELIMINAR LA TAREA Y LE PASO EL ID
  }

  handleTaskClick(id) {       //OBTIENE LA TASK SELECCIONADA DEL STATE
    const { selectedTodo } = this.state;
    if (selectedTodo !== id) {          //CHEQUEA SI LA TAREA SELECCIONADA NO SEA LA MISMA SELECCIONADA ANTES, SI ES DIFERENTE ACTUALIZA EL STATE.  POR DEFECTO EL STATE INICIAL ESTA VACIO O UNDF.
      this.setState({ selectedTodo: id });
    }
  }

  renderList() {          
    const { list } = this.props;      //LA LISTA VIENE COMO PROPS Y ESTA MAPEADA EN EL INDEX DE ESTA CARPETA
    const { selectedTodo } = this.state;      //OBTIENE LA TAREA SELECCIONADA


    /* mapeo la lista para devolver todos componentes task por cada item de esa lista en donde voy a chequear la q coincida
        q esta seleccionada, tmb le voy a pasar a cada task, las funciones q agregan y editan para q se la asignen a los botones q las Task renderizan.
        Le paso la key ya q react me la pide y la toma de referencia y si cambia la lista, no vuelve a renderizar una task q no se modifico o ya existia.
        onEdit es una prop, q recibe una funcion (en este caso esa funcion va a ser handleEdit), esa funcion se va a asignar al onClick del boton q esta dentro del compomnente Task (el boton azul con icono de edicion)
        onDelete es lo mismo q edit nomas q sirve para eliminar.
        La prop isSelected es una prop booleana q se usa para saber si la task esta seleccionada o no,
        lo cual va a pintar de un color mas claro simulando una seleccion y tmb va a mostrar los botones para eliminar y editar.
        Si el id de la task seleccionada q guarde en el state coincide con el id de la task q estoy mapeando en ese momento,
        esta propiedad se va a poner en true, por lo tanto se va a "seleccionar" la task.
        onClick va a guardar en el state el id de la task seleccionada, el cual uso para saber q task seleccione de la lista (en la comparacion q hago de _id === selectedTask)
         */
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

  handleChange(e) {       //PERSISTE LA DATA DEL EVENTO
    e.persist();
    this.setState({ value: e.target.value });   //EL TARGET.VALUE ES EL VALOR DE LO QUE ESCRIBO CUANDO TECLEO Y LO GUARDA EN EL STATE QUE SE LO VOY A PASAR
  }                                             //COMO PROP AL INPUT PARA QUE MUESTRE EL VALOR,  CUALQUIER COSA CHEQUEAR EL METODO RENDER PARA VER COMO PASO LA PROP

  resetForm() {
    this.setState({ value: "", editing: undefined, selectedTodo: undefined });    //RESET AL STATE DEL COMPONENTE PARA VACIAR EL INPUT LA TARREA Y SI ESTABA EDITANDO.
  }

  handleSubmit(e) {                                     //SUBMIT DEL BOTON, EJECUTA EL METODO ONSUBMIT DE LA ETIQUETA </FORM>
    const { editing, value } = this.state;
    const { addTodo, editTodo } = this.props;
    // previene que recargue la pagina
    e.preventDefault();

    if (!!editing) {      //SI ESTA EDITANDO, MANDO REQUEST CON EL NUEVO VALOR QUE ESTA EN VALUE Y EL ID ALMACENADO EN EDITING
      editTodo(editing, value);
    } else {
      addTodo({ description: value });    //SI NO ESTABA EDITANDO AGREGA UNA NUEVA
    }
    this.resetForm();     //POR ULTIMO RESETEA AL FORM ASI LIMPIA EL STATE DEL COMPONENTE.
  }

  render() {
    const { value, editing } = this.state;      //EL STATE LO USO PARA SABER SI ESTOY EDITANDO, VALUE ES PARA PASALE EL VALOR AL INPUT Y QUE MUESTRE LO QUE SE ESCRIBIO 
    const { isLoading, error } = this.props;        //PORPS DE REDUX, ISLOADING SE VA A PONER EN TRUE CADA VEZ QUE ESTE UNA REQUEST EN PENDING
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
//EL METODO RENDERLIST SE EJECUTA PARA MOSTRAR LA LISTA CONN EL MAP 
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