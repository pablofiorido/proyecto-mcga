import React from "react";

class ToDo extends React.Component {

  render() {
    return (
        <li key={this.props.id}>{this.props.description}</li>
    )

}
}

export default ToDo
