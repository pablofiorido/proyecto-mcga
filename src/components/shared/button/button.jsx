import React from "react";
import { render } from "react-dom";
import css from "./button.module.css";



class Button extends React.Component {
  render() {
    return (
      <button
        className={`${css.button} ${css[this.props.type]}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
};

export default Button;
