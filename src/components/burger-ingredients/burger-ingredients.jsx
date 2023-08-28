import React from "react";
import './burger-ingredients.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ListIngredients from "../list-ingredients/list-ingredients";

function BurgerIngredients (props){
  

  const [current, setCurrent] = React.useState('bun');
  return(
    <section className="mainBurgerIng">
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ListIngredients data={props.data}/>
    </section>
  );
}

export default BurgerIngredients;