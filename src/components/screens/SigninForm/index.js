import Signin from "../SigninForm/SigninForm";
import { register } from "../../../redux/auth/thunks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  loginError: state.auth.error,
});
  

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

