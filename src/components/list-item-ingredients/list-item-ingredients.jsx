import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './_list-item-ingredients..module.scss';
import React from 'react';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
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
            modal&&<Modal onClose={handleCloseModal}
               header={'Детали ингредиента'}
               children={<IngredientDetails
                  name={props.data.name}
                  calories={props.data.calories}
                  proteins={props.data.proteins}
                  fat={props.data.fat}
                  carbohydrates={props.data.carbohydrates}
                  image={props.data.image}
               />}/>}

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

ListItemIngredients.propTypes={
   data: PropTypes.shape(objectShape)
};

export default ListItemIngredients;
