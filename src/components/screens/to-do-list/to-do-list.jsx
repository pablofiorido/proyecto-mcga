import React from "react";
import ToDo from "./to-do";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: "dsadsadsa", description: "descrip xxxx" }],
    };
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
    return <div>{this.renderList()}</div>;
  }
}

export default ToDoList;
