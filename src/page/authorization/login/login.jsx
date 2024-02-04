import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../utils/app-routes';
import style from './_login-page.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';

function LoginPage(){
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
         <form className={style._form}>
            <h1 className={'text text_type_main-smail'}>Вход</h1>
            <EmailInput
               onChange={onChange}
               value={value}
               name={'email'}
               placeholder="Логин"
               isIcon={false}
            />
            <PasswordInput
               onChange={onChangePassword}
               value={valuePassword}
               name={'password'}
            />
            <Button htmlType="button" type="primary" size="medium">
               Войти
            </Button>
         </form>
         <div className={style._links}>
            <p className="text text_type_main-default text_color_inactive">
               Вы — новый пользователь?
               <Link className={style._link} to={AppRoutes.register}>Зарегистрироваться</Link>
            </p>
            <p className="text text_type_main-default text_color_inactive">
               Забыли пароль?
               <Link className={style._link} to={AppRoutes.forgotPassword}>Восстановить пароль</Link>
            </p>

         </div>
      </main>

   );

}

export default LoginPage;