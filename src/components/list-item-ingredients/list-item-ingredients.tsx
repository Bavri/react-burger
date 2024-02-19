import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './_list-item-ingredients..module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { SET_ACTIVE_INGREDIENT } from '../../services/actions/ingredient-active';
import { useDrag } from 'react-dnd';
import {Link, useLocation} from 'react-router-dom';
import { TDragObject, TDragProps, TIngredientDrag,} from '../../utils/types';



type TListItemIngredients={
   data: TIngredientDrag,
   count: number,
};

function ListItemIngredients ({data,count}:TListItemIngredients){

   const dispatch = useDispatch();
   const location = useLocation();

   const ingredientId = data._id;
   const handleOpenModal=() =>{
      dispatch({type:SET_ACTIVE_INGREDIENT,ingredient:data});
   };

   const type  = (): string =>{
      if(data.type==='bun'){
         return data.type;
      }
      else{
         return 'ingredient';
      }
   };


   const [{opacity}, dragRef] = useDrag<TDragObject,unknown,TDragProps>({
      type: type(),
      item: data,
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
         opacity: monitor.isDragging() ? 0.4 : 1,
      }),
   });

   return(
      <Link
         key={ingredientId}
         to={`/ingredients/${ingredientId}`}
         state={{ background: location }}
      >
         <div onClick={handleOpenModal} className={styles._item} ref={dragRef} style={{opacity}}>
            {(count!==0&&count&&(<Counter count={count} size="default" extraClass="m-1" />))}
            <img src={data.image} alt={data.name} className="mb-2" />
            <div className={`${styles._flexAlginCenter}`}>
               <span className="mr-2 text text_type_main-small">{(data.price)}</span>
               <CurrencyIcon type={'primary'}/>
            </div>
            <span className="text text_type_main-small">{data.name}</span>
         </div>
      </Link>
   );
}



export default ListItemIngredients;
