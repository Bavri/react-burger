
import {NavLink, Outlet} from 'react-router-dom';

import style from './_profile.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {AppRoutes} from '../../utils/app-routes';


const navLinks = [
   {
      name: 'Профиль',
      path: AppRoutes.profileInfo
   },
   {
      name: 'Выход',
      path: AppRoutes.profileLogout,
   },
   {
      name: 'История заказов',
      path: AppRoutes.profileOrder,
   },
];

function ProfileMain(){

   return (
      <main className={style._main}>
         <div className={style._leftBar}>
            <ul className={style._menu}>
               {
                  navLinks.map((navLink) =>
                     (
                        <li key={navLink.name}>
                           <NavLink
                              to={`${AppRoutes.profile}${navLink.path}`}
                              className={
                                 ({isActive}) => isActive ?
                                    'text text_type_main-medium text_color_primary':
                                    'text text_type_main-medium text_color_inactive'
                              }
                           >
                              {navLink.name}
                           </NavLink>
                        </li>
                     ),
                  )
               }
            </ul>
            <span className={'text text_type_main-small text_color_inactive'}>
               В этом разделе вы можете изменить свои персональные данные
            </span>
         </div>
         <Outlet/>
      </main>

   );

}

export default ProfileMain;