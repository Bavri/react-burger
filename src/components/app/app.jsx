import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Home from '../../page/home/home';
import {AppRoutes} from '../../utils/app-routes';
import Login from '../../page/authorization/login/login';
import Register from '../../page/authorization/register/register';
import ForgotPassword from '../../page/authorization/forgot-password/forgot-password';
import ResetPassword from '../../page/authorization/reset-password/reset-password';
import ProfileMain from '../../page/profile/profile-main';
import ProfileInfo from '../../page/profile/profile-info';
import ProfileOrders from '../../page/profile/profile-orders';
import ProfileLogout from '../../page/profile/profile-logout';
import {OnlyAuth, OnlyUnAuth} from '../protected-route/protected-route';
import {useDispatch} from 'react-redux';
import {authGetUserAction} from '../../services/actions/auth';
import NotFund from '../../page/not-found/not-fund';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modals/modal/modal';
import AppHeader from '../app-header/app-header';
import {listIngredientsAction} from '../../services/actions/list-ingredients';


function App() {
   const location = useLocation();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const background = location.state && location.state.background;

   const handleModalClose = () => {
      // Возвращаемся к предыдущему пути при закрытии модалки
      navigate(-1);
   };
   useEffect(() => {
      dispatch(authGetUserAction());
      dispatch(listIngredientsAction());
   }, [dispatch]);

   return(
      <>
         <AppHeader/>
         <Routes location={background || location}>
            <Route path={AppRoutes.root} element={<Home/>}/>
            <Route path={AppRoutes.login} element={<OnlyUnAuth component={<Login/>}/>}/>
            <Route path={AppRoutes.register} element={<OnlyUnAuth component={<Register/>}/>}/>
            <Route path='/ingredients/:ingredientId' element={<IngredientDetails />} />
            <Route path={AppRoutes.forgotPassword} element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
            <Route path={AppRoutes.resetPassword} element={<OnlyUnAuth component={<ResetPassword/>}/>}/>
            <Route path={AppRoutes.profile}
               element={<OnlyAuth component={<ProfileMain/>}></OnlyAuth>}>
               <Route path={'profile-info'} element={<ProfileInfo/>}/>
               <Route path={'profile-logout'} element={<ProfileLogout/>}/>
               <Route path={'profile-order'} element={<ProfileOrders/>}/>
            </Route>
            <Route path={AppRoutes.notFound} element={<NotFund/>}></Route>
         </Routes>

         {background && (
            <Routes>
               <Route
                  path='/ingredients/:ingredientId'
                  element={
                     <Modal onClose={handleModalClose}>
                        <IngredientDetails/>
                     </Modal>
                  }
               />
            </Routes>
         )}
      </>
   );
}

export default App;
