import {
   Button,
   EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useCallback, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../../utils/app-routes';
import style from './_forgot-password.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useDispatch, useSelector} from 'react-redux';
import {getAuth} from '../../../services/selectors';
import {AUTH_CLEAR, authForgotPasswordAction,} from '../../../services/actions/auth';
import {useForm} from '../../../hook/use-from';

function ForgotPassword():JSX.Element{
   const dispatch= useDispatch();
   const sendingForm = useCallback((state: any) => {
      //@ts-ignore
      dispatch(authForgotPasswordAction(state));
   }, [dispatch]);
   const nav = useNavigate();
   const { formData, onChange, onSubmit } = useForm({
      email: '',
   }, sendingForm);
   const {isError,isOk} =useSelector(getAuth);
   useEffect(()=>{
      if(isOk) {
         localStorage.setItem('reset','1');
         nav(AppRoutes.resetPassword);
         dispatch({type:AUTH_CLEAR});
      }

      if(isError){
         nav(AppRoutes.notFound);
      }
   },[isOk,nav,isError,dispatch]);


   return (
      <main className={style._main}>
         <form className={style._form} onSubmit={onSubmit}>
            <h1 className={'text text_type_main-smail'}>Восстановление пароля</h1>
            <EmailInput
               onChange={onChange}
               value={formData.email}
               name={'email'}
               placeholder="Укажите e-mail"
               isIcon={false}
            />
            <Button htmlType="submit" type="primary" size="medium">
               Восстановить
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

export default ForgotPassword;