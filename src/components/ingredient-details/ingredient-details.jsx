import styles from './_ingredient-details.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import PropTypes from 'prop-types';

function IngredientDetails (props){
   return(
      <>
         <ul className={styles._main}>
            <li>
               <img className={styles._image} src={props.image} alt={props.name} />
            </li>
            <li>
               <span className="text text_type_main-medium ">{props.name}</span>
            </li>
            <li>
               <ul className={styles._list}>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Калории,ккал</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {props.calories}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Белки, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {props.proteins}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Жиры, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {props.fat}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Углеводы, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {props.carbohydrates}
                     </span>
                  </li>
               </ul>
            </li>
         </ul>
      </>
   );
}



IngredientDetails.propTypes={
   name: PropTypes.string.isRequired,
   proteins: PropTypes.number.isRequired,
   fat: PropTypes.number.isRequired,
   carbohydrates: PropTypes.number.isRequired,
   calories: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired,
};

export default IngredientDetails ;