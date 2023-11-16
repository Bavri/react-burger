/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import styles from './_burger-ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ListItemIngredients from '../list-item-ingredients/list-item-ingredients';
import { getListIngredients,getActiveIngredient,
   getListBurgerConstructor,getBunBurgerConstructor} from '../../services/selectors';
import { useInView } from 'react-intersection-observer';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { DELETE_ACTIVE_INGREDIENT } from '../../services/actions/ingredient-active';

function BurgerIngredients (){
   const dispatch = useDispatch();
   const { data } = useSelector(getListIngredients);
   const activeIngredient = useSelector(getActiveIngredient);

   const  listItem=()=>{
      let sortListItem=[];
      sortListItem['bun'] =  data.filter((item) => item.type === 'bun');
      sortListItem['main'] =   data.filter((item) => item.type === 'main');
      sortListItem['sauce'] =  data.filter((item) => item.type === 'sauce');

      return sortListItem;
   } ;

   const [activeTab, setActiveTab] = React.useState('bun');
   const [refBun, inViewBun] = useInView({
      threshold: 1
   });
   const [refMain, inViewMain] = useInView({
      threshold: 0.5
   });
   const [refSauce, inViewSauce] = useInView({
      threshold: 0.5
   });

   const setTabScroll = () => {
      if(inViewBun){
         setActiveTab('bun');
      }
      else
         if (inViewSauce && !inViewBun) {
            setActiveTab('sauce');
         };

      if(inViewMain&& !inViewBun && !inViewSauce){
         setActiveTab('main');
      }

   };

   const handleCloseModal = () => {
      dispatch({type : DELETE_ACTIVE_INGREDIENT});
   };

   const ingredients = useSelector(getListBurgerConstructor);
   const bun = useSelector(getBunBurgerConstructor);

   const countItemConstructor = (id) =>{
      let count=0;
      ingredients.map((item)=>{
         if(item._id==id){
            count+=1;
         }
      });

      return count;
   };

   const countBunConstructor= (id) =>{
      if(bun && bun._id==id){
         return 2;
      }

      return 0;
   };

   return(
      <section className={styles._main}>
         <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
         <div className={styles._wrapper}>
            <Tab value="bun" active={activeTab === 'bun'}  onClick={setActiveTab}>
               Булки
            </Tab>
            <Tab value="sauce" active={activeTab === 'sauce'} onClick={setActiveTab}>
               Соусы
            </Tab>
            <Tab value="main" active={activeTab === 'main'} onClick={setActiveTab}>
               Начинки
            </Tab>
         </div>
         <ul className={`${styles._tabList} pt-10`} onScroll={setTabScroll}>
            <li className="mb-10" ref={refBun}>
               <h2 className="mb-6 text text_type_main-medium">Булки</h2>
               <div className={styles._grid}>
                  {(listItem()['bun'].map((element) => {
                     return (<ListItemIngredients key={element._id} data={element} count={countBunConstructor(element._id)}/>);
                  }))}
               </div>
            </li>
            <li className="mb-10">
               <h2 className="mb-6 text text_type_main-medium" ref={refSauce}>Соусы</h2>
               <div className={styles._grid}>
                  {(listItem()['sauce'].map((element) => {
                     return (<ListItemIngredients key={element._id} data={element} count={countItemConstructor(element._id)} />);
                  }))}
               </div>
            </li>
            <li className="mb-10">
               <h2 className="mb-6 text text_type_main-medium"  ref={refMain}>Начинка</h2>
               <div className={styles._grid}>
                  {(listItem()['main'].map((element) => {
                     return (<ListItemIngredients key={element._id} data={element} count={countItemConstructor(element._id)}/>);
                  }))}
               </div>
            </li>
         </ul>
         {
            activeIngredient&&<Modal onClose={handleCloseModal} header={'Детали ингредиента'}>
               <IngredientDetails
                  data={activeIngredient}
               />
            </Modal>}

      </section>
   );
}


export default BurgerIngredients;