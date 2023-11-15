
import styles from './_app.module.scss';
import AppHeader from '../app-header/app-header';
import React from 'react';
import { getListIngredients } from '../../services/selectors';
import { listIngredientsAction } from '../../services/actions/list-ingredients';
import { useSelector, useDispatch } from 'react-redux';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

   const dispatch = useDispatch();
   const { data, isLoading, isErrors } = useSelector(getListIngredients);
   React.useEffect(() => {
      dispatch(listIngredientsAction());
   }, [dispatch]);

   return (

      <div className={styles._app}>
         <AppHeader/>
         {(isLoading && <span>Загрузка</span>)}
         {(isErrors && <span>Ошибка</span>)}
         {(data &&

            <main className={styles._wrapper}>
               <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients/>
                  <BurgerConstructor/>
               </DndProvider>
            </main>)
         }
      </div>

   );
}

export default App;
