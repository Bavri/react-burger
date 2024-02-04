import {
   EmailInput,
   PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import style from './_profile.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {AppRoutes} from '../../utils/app-routes';

function Profile(){
   const [value, setValue] = useState('bob@example.com');
   const onChange = e => {
      setValue(e.target.value);
   };

   const [valuePassword, setValuePassword] = useState('password');
   const onChangePassword = e => {
      setValuePassword(e.target.value);
   };

   return (
      <main className={style._main}>
         <div className={style._leftBar}>
            <div className={style._menu}>
               <div className={'text text_type_main-medium'}>Профиль</div>
               <div className={'text text_type_main-medium'}>История заказов</div>
               <div className={'text text_type_main-medium'}><Link to={AppRoutes.login}>Выход</Link></div>
            </div>
            <span>
               В этом разделе вы можете изменить свои персональные данные
            </span>
         </div>

         <form className={style._form}>
            <EmailInput
               onChange={onChange}
               value={value}
               name={'name'}
               placeholder="Имя"
               isIcon={true}
            />
            <EmailInput
               onChange={onChange}
               value={value}
               name={'email'}
               placeholder="Логин"
               isIcon={true}
            />
            <PasswordInput
               onChange={onChangePassword}
               value={valuePassword}
               name={'password'}
               isIcon={true}
            />
         </form>
      </main>

   );

}

export default Profile;