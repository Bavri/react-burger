import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './_list-item-ingredients..module.scss';
import React from 'react';
import {ingredientsShape} from '../../utils/prop-types';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_INGREDIENT } from '../../services/actions/ingredient-active';
import { useDrag } from 'react-dnd';

function ListItemIngredients (props){

   const dispatch = useDispatch();

   const handleOpenModal=() =>{
      dispatch({type:SET_ACTIVE_INGREDIENT,ingredient:props.data});
   };

   const type  = () =>{
      if(props.data.type=='bun'){
         return props.data.type;
      }
      else{
         return 'ingredient';
      }
   };

   const [{opacity}, dragRef] = useDrag({
      type: type(),
      item: props.data,
      collect: (monitor) => ({
         opacity: monitor.isDragging() ? 0.4 : 1,
      }),
   });

   return(
      <>

         <div onClick={handleOpenModal} className={styles._item} ref={dragRef} style={{opacity}}>
            {(props.count!=0&&props.count&&(<Counter count={props.count} size="default" extraClass="m-1" />))}
            <img src={props.data.image} alt={props.data.name} className="mb-2" />
            <div className={`${styles._flexAlginCenter}`}>
               <span className="mr-2 text text_type_main-small">{(props.data.price)}</span>
               <CurrencyIcon type={'primary'}/>
            </div>
            <span className="text text_type_main-small">{(props.data.name)}</span>
         </div>
      </>
   );
}



ListItemIngredients.propTypes={
   data: PropTypes.shape(ingredientsShape),
   count: PropTypes.number.isRequired,
};

export default ListItemIngredients;
