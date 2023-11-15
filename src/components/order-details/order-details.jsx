import styles from './_order-details.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import image from '../../images/done.png';
import {  useSelector } from 'react-redux';
import { getOrderNumber } from '../../services/selectors';





function OrderDetails(){
   const id=useSelector(getOrderNumber);

   return(
      <ul className={styles._main}>
         <li>
            <span className={`${styles._numberOrder} mb-8 text text_type_digits-large`}>{(id)}</span>
         </li>
         <li>
            <span className="text text_type_main-small mb-15">идентификатор заказа</span>
         </li>
         <li>
            <img src={image} alt="done" className={styles._done} />
         </li>
         <li>
            <span className={`${styles._textPrimary} text text_type_main-small`}>Ваш заказ начали готовить</span>
         </li>
         <li>
            <span className={`${styles._textSecondary} text text_type_main-small`}>
               Дождитесь готовности на орбитальной станции
            </span>
         </li>
      </ul>
   );
}




export default OrderDetails;