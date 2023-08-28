import React from "react";
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './list-item-ingredients.css'

function ListItemIngredients (props){
  return(
    <div className="item">
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={props.image} alt={props.name} className="mb-2" />
      <div className="mb-2 flexalgincenter">
        <span className="mr-2 text text_type_main-small">{props.price}</span>
        <CurrencyIcon/>
      </div>
      <span className="text text_type_main-small">{props.name}</span>
    </div>
  )
}

export default ListItemIngredients;
