import {
   Button,
   EmailInput,
   PasswordInput,
   Input
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../utils/app-routes';
import style from './_register.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useDispatch} from 'react-redux';
import {useForm} from '../../../hook/use-from';
import {authRegisterAction} from '../../../services/actions/auth';

function Register():JSX.Element{

   const dispatch= useDispatch();
   const sendingForm = useCallback((state: any) => {
      //@ts-ignore
      dispatch(authRegisterAction(state));
   }, [dispatch]);

   const { formData, onChange, onSubmit } = useForm({
      name: '',
      email: '',
      password: ''
   }, sendingForm);



   return (
      <main className={style._main}>
         <form className={style._form} onSubmit={onSubmit}>
            <h1 className={'text text_type_main-smail'}>Регистрация</h1>
            <Input
               onChange={onChange}
               value={formData.name}
               name={'name'}
               placeholder="Имя"
            />
            <EmailInput
               onChange={onChange}
               value={formData.email}
               name={'email'}
               placeholder="Email"

            />
            <PasswordInput
               onChange={onChange}
               value={formData.password}
               name={'password'}
            />
            <Button htmlType="submit" type="primary" size="medium">
               Зарегистрироваться
            </Button>
         </form>
         <div className={style._links}>
            <p className="text text_type_main-default text_color_inactive">
               Уже зарегистрированы?
               <Link className={style._link} to={AppRoutes.login}>Войти</Link>
            </p>
         </div>
      </main>

   );

}

export default Register;