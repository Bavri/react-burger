import styles from './_list-ingredients.module.scss';
import ListItemIngredients from '../list-item-ingredients/list-item-ingredients';
import React from 'react';
import {arrayOfIngredientsShape} from '../../utils/prop-types';

function ListIngredients(props){

   const arrayBuns = props.data.filter((item) => item.type === 'bun');
   const arrayMain = props.data.filter((item) => item.type === 'main');
   const arraySauce = props.data.filter((item) => item.type === 'sauce');

   return(
      <ul className={`${styles._tabList} pt-10`}>
         <li className="mb-10">
            <h2 className="mb-6 text text_type_main-medium">Булки</h2>
            <div className={styles._grid}>
               {
                  arrayBuns.map((element,index)=>{
                     return(
                        <ListItemIngredients
                           key={index}
                           data={element}
                        />
                     );

                  })
               }
            </div>
         </li>
         <li className="mb-10">
            <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
            <div className={styles._grid}>
               {
                  arraySauce.map((element,index)=>{
                     return(
                        <ListItemIngredients
                           key={index}
                           data={element}
                        />
                     );

                  })
               }
            </div>
         </li>
         <li className="mb-10">
            <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
            <div className={styles._grid}>
               {
                  arrayMain.map((element,index)=>{
                     return(
                        <ListItemIngredients
                           key={index}
                           data={element}
                        />
                     );

                  })
               }
            </div>
         </li>
      </ul>
   );
}



ListIngredients.propTypes={
   data: arrayOfIngredientsShape,
};

export default ListIngredients;