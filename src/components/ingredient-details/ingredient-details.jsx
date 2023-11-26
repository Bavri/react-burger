import styles from './_ingredient-details.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import PropTypes from 'prop-types';
import {  ingredientsShape } from '../../utils/prop-types';

function IngredientDetails (props){
   return(
      <>
         <ul className={styles._main}>
            <li>
               <img className={styles._image} src={props.data.image} alt={props.data.name} />
            </li>
            <li>
               <span className="text text_type_main-medium ">{(props.data.name)}</span>
            </li>
            <li>
               <ul className={styles._list}>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Калории,ккал</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(props.data.calories)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Белки, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(props.data.proteins)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Жиры, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(props.data.fat)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Углеводы, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(props.data.carbohydrates)}
                     </span>
                  </li>
               </ul>
            </li>
         </ul>
      </>
   );
}



IngredientDetails.propTypes={
   data: PropTypes.shape(ingredientsShape),
};

export default IngredientDetails ;