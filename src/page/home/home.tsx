import {useDispatch, useSelector} from 'react-redux';
import {getListIngredients} from '../../services/selectors';
import React from 'react';
import {listIngredientsAction} from '../../services/actions/list-ingredients';
import styles from './_home.module.scss';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';


function Home():JSX.Element {
   const dispatch = useDispatch();

   const {data, isLoading, isErrors} = useSelector(getListIngredients);
   React.useEffect(() => {
      //@ts-ignore
      dispatch(listIngredientsAction());
   }, [dispatch]);

   return (

      <>
         {(isLoading && (<span>Загрузка</span>))}
         {(isErrors && (<span>Ошибка</span>))}
         {(data &&
                (<main className={styles._wrapper}>
                   <DndProvider backend={HTML5Backend}>
                      <BurgerIngredients/>
                      <BurgerConstructor/>
                   </DndProvider>
                </main>)
         )
         }
      </>

   );
}

export default Home;