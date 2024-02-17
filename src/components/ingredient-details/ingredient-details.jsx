import styles from './_ingredient-details.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useSelector} from 'react-redux';
import {getListIngredients} from '../../services/selectors';
import {useLocation} from 'react-router-dom';

function IngredientDetails (){
   const location=useLocation();
   const id = location.pathname.match(/\/(\w+)$/)[1];
   const {data}= useSelector(getListIngredients);
   const activeIngredient=data.find(item=>item._id===id);

   return(
      <>
         {activeIngredient &&
         <ul className={styles._main}>
            <li>
               <img className={styles._image} src={activeIngredient.image} alt={activeIngredient.name} />
            </li>
            <li>
               <span className="text text_type_main-medium ">{(activeIngredient.name)}</span>
            </li>
            <li>
               <ul className={styles._list}>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Калории,ккал</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(activeIngredient.calories)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Белки, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(activeIngredient.proteins)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Жиры, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(activeIngredient.fat)}
                     </span>
                  </li>
                  <li className={styles._listItem}>
                     <span className='text text_type_main-small text_color_inactive mb-2'>Углеводы, г</span>
                     <span className='text text_type_digits-default text_color_inactive mb-2'>
                        {(activeIngredient.carbohydrates)}
                     </span>
                  </li>
               </ul>
            </li>
         </ul>}
      </>
   );
}



export default IngredientDetails ;