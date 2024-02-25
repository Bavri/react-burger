import styles from './_app-header.module.scss';
import {BurgerIcon,ListIcon, Logo,ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../utils/app-routes';

function AppHeader() : JSX.Element {
   return(
      <header className={styles._header}>
         <nav className={styles._bar}>
            <div className={styles._wrapper}>
               <NavLink className={`${styles._link} p-4 mr-2`} to={AppRoutes.root}>
                  {({isActive}) => (
                     <>
                        <BurgerIcon type={isActive? 'primary': 'secondary'}/>
                        <span className={
                           isActive?
                              `${styles._textPrimary} text text_type_main-smail ml-2`:
                              `${styles._textSecondary} text text_type_main-smail ml-2`
                        }> Конструктор</span>
                     </>
                  )}
               </NavLink>
               <NavLink className={`${styles._link} p-4 mr-2`} to={AppRoutes.root}>
                  {({isActive}) => (
                     <>
                        <ListIcon type={isActive? 'primary': 'secondary'}/>
                        <span className={
                           isActive?
                              `${styles._textPrimary} text text_type_main-smail ml-2`:
                              `${styles._textSecondary} text text_type_main-smail ml-2`
                        }>Лента заказов</span>
                     </>
                  )}
               </NavLink>
            </div>
            <Logo />
            <NavLink className={`${styles._link} p-4 mr-2`} to={`${AppRoutes.profile}${AppRoutes.profileInfo}`}>
               {({isActive}) => (
                  <>
                     <ProfileIcon type={isActive? 'primary': 'secondary'}/>
                     <span className={
                        isActive?
                           `${styles._textPrimary} text text_type_main-smail ml-2`:
                           `${styles._textSecondary} text text_type_main-smail ml-2`
                     }>Личный кабинет</span>
                  </>
               )}
            </NavLink>
         </nav>
      </header>
   );

}

export default AppHeader;