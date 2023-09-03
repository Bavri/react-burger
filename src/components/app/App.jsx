
import styles from './_app.module.scss';
import AppHeader from '../app-header/app-header';
import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
   const api ='https://norma.nomoreparties.space/api/ingredients';
   const [state, setState] = React.useState({
      isLoading: false,
      hasError: false,
      data: [],
   });


   const getData= async () => {
      setState({ ...state, hasError: false, isLoading: true });
      await fetch(api)
         .then(res => res.json())
         .then(res => setState({ ...state, data:res.data, isLoading: false }))
         .catch(() => {
            setState({ ...state, hasError: true, isLoading: false });
         });
   };

   React.useEffect(() => {
      getData();
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
