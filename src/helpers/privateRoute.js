  import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.isAuthed ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default connect(mapStateToProps)(PrivateRoute);