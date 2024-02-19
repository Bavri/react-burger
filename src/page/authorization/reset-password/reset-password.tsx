import {
   Button,
   Input,
   PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useCallback, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../../utils/app-routes';
import style from './_reset-password.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useDispatch, useSelector} from 'react-redux';

import { authResetPasswordAction} from '../../../services/actions/auth';
import {useForm} from '../../../hook/use-from';
import {getAuth} from '../../../services/selectors';

function ResetPassword():JSX.Element{
   const dispatch= useDispatch();
   const sendingForm = useCallback((state: any) => {
      //@ts-ignore
      dispatch(authResetPasswordAction(state));
   }, [dispatch]);
   const { formData, onChange, onSubmit } = useForm({
      password: '',
      token: '',
   }, sendingForm);
   const nav = useNavigate();
   const {isError,isOk} =useSelector(getAuth);
   useEffect(()=>{
      if(localStorage.getItem('reset')!=='1'){
         nav(AppRoutes.forgotPassword);
      }

      if(isOk) {
         localStorage.removeItem('reset');
         nav(AppRoutes.login);
      }

      if(isError){
         nav(AppRoutes.notFound);
      }
   },[isOk,nav,isError]);



   return (
      <main className={style._main}>
         <form className={style._form} onSubmit={onSubmit}>
            <h1 className={'text text_type_main-smail'}>Восстановление пароля</h1>
            <PasswordInput
               onChange={onChange}
               value={formData.password}
               name={'password'}
               placeholder={'Введите новый пароль'}
            />
            <Input
               onChange={onChange}
               value={formData.token}
               name={'token'}
               placeholder="Введите код из письма"
            />
            <Button htmlType="submit" type="primary" size="medium">
               Cохранить
            </Button>
         </form>
         <div className={style._links}>
            <p className="text text_type_main-default text_color_inactive">
               Вспомнили пароль?
               <Link className={style._link} to={AppRoutes.login}>Войти</Link>
            </p>
         </div>
      </main>

   );

}

export default ResetPassword;