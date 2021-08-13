import React from "react";
import { DeleteIcon, EditIcon } from "../../../assets/icons";
import Button from "../../../shared/button/button";
import css from "./to-do.module.css";
//import css from "./to-do.module.css";
//import Button from "../../../shared/button";

class ToDo extends React.Component {

  render() {
    const { isSelected, description, onClick, onEdit, onDelete} = this.props;
    return (
        
      //<li key={this.props.id}>{this.props.description}</li>

<li className={isSelected ? css.selected : css.item} onClick={onClick}>
        <div className={css.description}>{description}</div>
        {isSelected && (
          <div className={css.options}>
            <Button
              size="small"
              type="edit"
              icon={<EditIcon stroke="#fff" />}
              onClick={onEdit}
            >
EDITAR
</Button>
            <Button
              size="small"
              type="delete"
              icon={<DeleteIcon fill="#fff" />}
              onClick={onDelete}
            >
ELIMINAR
</Button>
          </div>
        )}
      </li>

    )

}





/*
render() {
  const { isSelected, description, onClick, onEdit, onDelete } = this.props;
  return (
    <li className={isSelected ? css.selected : css.item} onClick={onClick}>
      <div className={css.description}>{description}</div>
      {isSelected && (
        <div className={css.options}>
          <Button
            size="small"
            type="edit"
            icon={<EditIcon stroke="#fff" />}
            onClick={onEdit}
          />
          <Button
            size="small"
            type="delete"
            icon={<DeleteIcon fill="#fff" />}
            onClick={onDelete}
          />
        </div>
      )}
    </li>
  );
}
*/

}


export default ToDo
