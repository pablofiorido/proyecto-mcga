//import Login from "./log-in-form";
import Login from "./log-in-form";
import { login } from "../../../redux/auth/thunks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  loginError: state.auth.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);


//import LoginForm from "./log-in-form"
//export default LoginForm
