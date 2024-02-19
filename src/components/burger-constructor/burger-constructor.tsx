
import React, { useCallback } from 'react';
import styles from './_burger-constructor.module.scss';
import { ConstructorElement, CurrencyIcon,Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, getBunBurgerConstructor,
   getListBurgerConstructor, getOrder, getTotalBurgerConstructor } from '../../services/selectors';
import { useDrop } from 'react-dnd/dist/hooks';
import { ADD_INGREDIENT,ADD_BUN, SOTR_INGREDIENTS,
   TOTAL_ADD_INGREDIENT,TOTAL_SWAP_BUN,TOTAL_ADD_BUN} from '../../services/actions/burger-constructor';
import { DELETE_ORDER, orderAction } from '../../services/actions/order';
import BurgerConstructorItemSort from '../burger-constructor-item-sort/burger-constructor-item-sort';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import {AppRoutes} from '../../utils/app-routes';
import { TDropProps, TIngredient, TIngredientDrag } from '../../utils/types';


function BurgerConstructor(): JSX.Element{
   const dispatch = useDispatch();
   const ingredients = useSelector(getListBurgerConstructor);
   const bun=useSelector(getBunBurgerConstructor);
   const total= useSelector(getTotalBurgerConstructor);
   const {userLogin}=useSelector(getAuth);
   const nav=useNavigate();
   const [, dropIngredientRef] = useDrop<TIngredientDrag,unknown,TDropProps>({
      accept: 'ingredient',
      drop(item){
         dispatch({ type: ADD_INGREDIENT, item: {...item, dragId: nanoid() }});
         dispatch({type:TOTAL_ADD_INGREDIENT,price:item.price});
      }
   });

   const [, dropBunUpRef] = useDrop<TIngredientDrag,unknown,TDropProps>({
      accept: 'bun',
      drop(item){
         if(bun){
            dispatch({type:TOTAL_SWAP_BUN,price:item.price});
         }
         else{
            dispatch({type:TOTAL_ADD_BUN,price:item.price});
         }
         dispatch({ type: ADD_BUN, item: item });
      }
   });
   const [, dropBunDownRef] = useDrop<TIngredientDrag,unknown,TDropProps>({
      accept: 'bun',
      drop(item:TIngredient){
         if(bun){
            dispatch({type:TOTAL_SWAP_BUN,price:item.price});
         }
         else{
            dispatch({type:TOTAL_ADD_BUN,price:item.price});
         }
         dispatch({ type: ADD_BUN, item: item });
      }
   });

   const orderIdList=(): Array<number>=>{
      let arrayID =[];

      if(bun){
         arrayID.push(bun._id);
         arrayID.push(bun._id);
      }

      if(ingredients){
         ingredients.map((item:TIngredient)=>{
            arrayID.push(item._id);
         });
      }

      return arrayID;
   };

   const { isLoading, isErrors } = useSelector(getOrder);

   const [modal,setModal]= React.useState<boolean>(false);
   const handleOpenModal = () => {
      if(orderIdList().length>0){
         //@ts-ignore
         dispatch(orderAction(orderIdList()));
      }
      !isLoading&&!isErrors&& setModal(true);
   };

   const sendingOrder=()=>{
      if(userLogin){
         handleOpenModal();
      }
      else{
         nav(AppRoutes.login);
      }
   };

   const handleCloseModal = () => {
      dispatch({type:DELETE_ORDER});
      setModal(false);
   };

   const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch({
         type: SOTR_INGREDIENTS,
         ingredients: newCards,
      });
   }, [ingredients, dispatch]);


   return(
      <section className={styles._main}>
         {modal&&(<Modal onClose={handleCloseModal}><OrderDetails /></Modal>)}
         <div className={styles._wrapperConstructor}>
            <div ref={dropBunUpRef} className={styles._wrapperDrag}>
               {(
                  bun?
                     (<ConstructorElement
                        text={bun.name+' (вверх)'}
                        price={bun.price}
                        thumbnail={bun.image}
                        type="top"
                        isLocked={true}
                     />)
                     :
                     (
                        <div className={styles._constructorElement}>
                           <span>Перетащите булку</span>
                        </div>
                     )
               )}
            </div>
            <div ref={dropIngredientRef} className={styles._wrapperDrag}>
               {(
                  ingredients && ingredients.length > 0 ?
                     ( ingredients.map((item:TIngredientDrag,index: number) =>{
                        return (<BurgerConstructorItemSort
                           item={item}
                           key={item.dragId}
                           index={index}
                           moveCard={moveCard}
                        />);
                     }
                     ))
                     :
                     (
                        <div className={styles._constructorElement}>
                           <span>Перетащите ингредиент</span>
                        </div>
                     )
               )
               }


            </div>
            <div ref={dropBunDownRef} className={styles._wrapperDrag}>
               {(
                  bun?
                     (<ConstructorElement
                        text={bun.name+' (низ)'}
                        price={bun.price}
                        thumbnail={bun.image}
                        type="bottom"
                        isLocked={true}
                     />)
                     :
                     (
                        <div className={styles._constructorElement}>
                           <span>Перетащите булку</span>
                        </div>
                     )
               )}
            </div>
         </div>
         <div className={styles._wrapperDecoration}>
            <div className={styles._wrapperCost}>
               <span className="text text_type_main-large">{total}</span>
               <CurrencyIcon type={'primary'}/>
            </div>
            <div className={styles._over}>
               <Button htmlType="button" type="primary" size="large" onClick={sendingOrder}>
                  Оформить заказ
               </Button>
            </div>
         </div>
      </section>

   );
}



export default BurgerConstructor;