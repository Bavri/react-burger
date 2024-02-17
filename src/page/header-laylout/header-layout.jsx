import AppHeader from '../../components/app-header/app-header';
import {Outlet} from 'react-router-dom';
import styles from './_header-layout.module.scss';



function  HeaderLayout(){
   return(
      <div className={styles._main}>
         <AppHeader/>
         <Outlet/>
      </div>
   );
}

export default HeaderLayout;