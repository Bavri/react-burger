import styles from './_burger-ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ListIngredients from '../list-ingredients/list-ingredients';
import React from 'react';
import PropTypes from 'prop-types';

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

const objectShape = {
   _id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   proteins: PropTypes.number.isRequired,
   fat: PropTypes.number.isRequired,
   carbohydrates: PropTypes.number.isRequired,
   calories: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired,
   image_mobile: PropTypes.string.isRequired,
   image_large: PropTypes.string.isRequired,
   __v: PropTypes.number.isRequired
};

BurgerIngredients.propTypes={
   data:  PropTypes.arrayOf(PropTypes.shape(objectShape)),
};

export default BurgerIngredients;