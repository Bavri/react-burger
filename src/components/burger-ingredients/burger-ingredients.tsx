/* eslint-disable max-len */

import styles from './_burger-ingredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {  useSelector} from 'react-redux';
import ListItemIngredients from '../list-item-ingredients/list-item-ingredients';
import { getListIngredients,
   getListBurgerConstructor,getBunBurgerConstructor} from '../../services/selectors';
import { useInView } from 'react-intersection-observer';
import { TIngredientDrag } from '../../utils/types';


function BurgerIngredients ():JSX.Element{
   const { data } = useSelector(getListIngredients);

   const  listItem=():Record<string, Array<TIngredientDrag>>=>{
      let sortListItem:Record<string, Array<TIngredientDrag>>={};
      sortListItem['bun'] =  data.filter((item:TIngredientDrag) => item.type === 'bun');
      sortListItem['main'] =   data.filter((item:TIngredientDrag) => item.type === 'main');
      sortListItem['sauce'] =  data.filter((item:TIngredientDrag) => item.type === 'sauce');

      return sortListItem;
   } ;

   const [activeTab, setActiveTab] = React.useState<string>('bun');
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


   const ingredients = useSelector(getListBurgerConstructor);
   const bun = useSelector(getBunBurgerConstructor);

   const countItemConstructor = (id:string):number =>{
      let count=0;
      ingredients.map((item:TIngredientDrag)=>{
         if(item._id==id){
            count+=1;
         }
      });

      return count;
   };

   const countBunConstructor= (id:string):number  =>{
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
                     return (<ListItemIngredients key={element._id}data={element} count={countBunConstructor(element._id)}/>);
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
      </section>
   );
}


export default BurgerIngredients;