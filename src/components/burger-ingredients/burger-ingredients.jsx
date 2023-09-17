import styles from './_burger-ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ListIngredients from '../list-ingredients/list-ingredients';
import React from 'react';
import {arrayOfIngredientsShape} from '../../utils/prop-types';

function BurgerIngredients (props){


   const [current, setCurrent] = React.useState('bun');

   return(
      <section className={styles._main}>
         <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
         <div className={styles._wrapper}>
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

BurgerIngredients.propTypes={
   data: arrayOfIngredientsShape,
};

export default BurgerIngredients;