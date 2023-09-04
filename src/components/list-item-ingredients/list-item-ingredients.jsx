import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './_list-item-ingredients..module.scss';
import React from 'react';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {ingredientsShape} from '../../utils/prop-types';
import PropTypes from 'prop-types';

function ListItemIngredients (props){
   const [modal,setModal]= React.useState(false);
   const handleOpenModal = () => {
      setModal(true);
   };

   const handleCloseModal = () => {
      setModal(false);
   };

   return(
      <>
         {
            modal&&<Modal onClose={handleCloseModal} header={'Детали ингредиента'}>
               <IngredientDetails
                  name={props.data.name}
                  calories={props.data.calories}
                  proteins={props.data.proteins}
                  fat={props.data.fat}
                  carbohydrates={props.data.carbohydrates}
                  image={props.data.image}
               />
            </Modal>}

         <div onClick={handleOpenModal} className={styles._item}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={props.data.image} alt={props.data.name} className="mb-2" />
            <div className={`${styles._flexAlginCenter}`}>
               <span className="mr-2 text text_type_main-small">{props.data.price}</span>
               <CurrencyIcon type={'primary'}/>
            </div>
            <span className="text text_type_main-small">{props.data.name}</span>
         </div>
      </>
   );
}



ListItemIngredients.propTypes={
   data: PropTypes.shape(ingredientsShape)
};

export default ListItemIngredients;
