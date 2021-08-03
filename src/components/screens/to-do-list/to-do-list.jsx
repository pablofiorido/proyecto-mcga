import React from "react";
import ToDo from "./to-do";
import Button from "../../shared/button/button"

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
