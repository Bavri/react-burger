import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';

import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../utils/app-routes';
import style from './_login.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useDispatch} from 'react-redux';
//import {getAuth, getUserOk} from '../../../services/selectors';
import { authLoginAction} from '../../../services/actions/auth';
import {useForm} from '../../../hook/use-from';
import {useCallback} from 'react';

function Login(): JSX.Element{
   const dispatch= useDispatch();
   const sendingForm = useCallback((state: any) => {
      //@ts-ignore
      dispatch(authLoginAction(state));
   }, [dispatch]);

   const { formData, onChange, onSubmit } = useForm({
      email: '',
      password: ''
   }, sendingForm);



   return (
      <main className={style._main}>
         <form className={style._form} onSubmit={onSubmit}>
            <h1 className={'text text_type_main-smail'}>Вход</h1>
            <EmailInput
               onChange={onChange}
               value={formData.email}
               name={'email'}
               placeholder="Логин"
               isIcon={false}
            />
            <PasswordInput
               onChange={onChange}
               value={formData.password}
               name={'password'}
            />
            <Button htmlType="submit" type="primary" size="medium">
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

export default Login;