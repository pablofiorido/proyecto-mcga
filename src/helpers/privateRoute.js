  import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


//OBTIENE EL STATE DE REDUX, SI EL USER ESTA AUTENTICADO O NO
const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.isAuthed ? <Component {...props} /> : <Redirect to="/login" />  // // uso esa prop del state de redux para devolver el componente si esta autenticado, sino redirijo al login screen.
    }
  />
);

export default connect(mapStateToProps)(PrivateRoute);    //// este connect hace que las propidades o data q obtengo del state en la funcion de la linea 6, se inyecten como props.