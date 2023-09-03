import styles from './_list-ingredients.module.scss';
import ListItemIngredients from '../list-item-ingredients/list-item-ingredients';
import PropTypes from 'prop-types';
import React from 'react';

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

ListIngredients.propTypes={
   data:  PropTypes.arrayOf(PropTypes.shape(objectShape)),
};

export default ListIngredients;