import React from "react";
import './app-header.css';
import {BurgerIcon,ListIcon, Logo,ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';


function AppHeader() {
  return(
    <header className="header">
      <nav className="bar">
        <div className="wrapper">
          <button className="button p-4 mr-2">
            <BurgerIcon type="primary" className="icon"/>
            <span className="textprimary text text_type_main-smail ml-2">Конструктор</span>
          </button>
          <button className="button p-4 mr-2">
            <ListIcon type="secondary" className="icon"/>
            <span className="textsecondary text text_type_main-smail ml-2">Лента заказов</span>
          </button>
        </div>
        <Logo />
        <button className="button p-4 mr-2">
          <ProfileIcon  type="secondary" className="icon"/>
          <span className="textsecondary text text_type_main-smail ml-2">Личный кабинет</span>
        </button>
      </nav>
    </header>
  );

}

export default AppHeader;