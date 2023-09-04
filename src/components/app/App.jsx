
import styles from './_app.module.scss';
import AppHeader from '../app-header/app-header';
import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {getListIngredientsApi} from '../../utils/api';

function App() {

   const [state, setState] = React.useState({
      isLoading: false,
      hasError: false,
      data: [],
   });

   const getData=(response) =>{
      setState({ ...state, data:response.data, isLoading: false });
   };

   const errorServer=() =>{
      setState({ ...state, hasError: true, isLoading: false });
   };

   const requestServer= async () => {
      setState({ ...state, hasError: false, isLoading: true });
      getListIngredientsApi(getData,errorServer);
   };

   React.useEffect(() => {
      requestServer();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   return (
      <>
         <div className={styles._app}>
            <AppHeader/>
            {state.isLoading && <span>Загрузка</span>}
            {state.hasError && <span>Ошибка</span>}
            {
               !state.isLoading &&
            !state.hasError &&
            state.data.length &&
            <main className={styles._wrapper}>
               <BurgerIngredients data={state.data}/>
               <BurgerConstructor data={state.data}/>
            </main>
            }
         </div>
      </>
   );
}

export default App;
