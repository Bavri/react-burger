import styles from './_app-header.module.scss';
import {BurgerIcon,ListIcon, Logo,ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import React from 'react';

function AppHeader() {
   return(
      <header className={styles._header}>
         <nav className={styles._bar}>
            <div className={styles._wrapper}>
               <a className={`${styles._link} p-4 mr-2`}>
                  <BurgerIcon type="primary" className={styles._icon}/>
                  <span className={`${styles._textPrimary} text text_type_main-smail ml-2`}>Конструктор</span>
               </a>
               <a className={`${styles._link} p-4 mr-2`}>
                  <ListIcon type="secondary" className={styles._icon}/>
                  <span className={`${styles._textSecondary} text text_type_main-smail ml-2`}>Лента заказов</span>
               </a>
            </div>
            <Logo />
            <a className={`${styles._link} p-4 mr-2`}>
               <ProfileIcon  type="secondary" className={styles._icon}/>
               <span className={`${styles._textSecondary} text text_type_main-smail ml-2`}>Личный кабинет</span>
            </a>
         </nav>
      </header>
   );

}

export default AppHeader;