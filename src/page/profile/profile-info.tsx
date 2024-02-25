import {
   Button,
   EmailInput, Input,
   PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useCallback, useEffect} from 'react';

import style from './_profile.module.scss';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import {useDispatch, useSelector} from 'react-redux';
import {getAuth} from '../../services/selectors';
import {authPatchUserAction} from '../../services/actions/auth';
import {useForm} from '../../hook/use-from';

function ProfileInfo(){
   const dispatch= useDispatch();
   const sendingForm = useCallback((state: any) => {
      //@ts-ignore
      dispatch(authPatchUserAction(state));
   }, [dispatch]);
   const { user } = useSelector(getAuth);
   const { formData,setFormData, onChange, onSubmit,onReset } = useForm({
      name: user.name,
      email: user.email,
      password: ''
   }, sendingForm);

   const formValueChange = (
      formData.name !== ''
      && formData.email !==''
      && (formData.name !== user.name
      || formData.email !== user.email
      ||formData.password.length > 0));

   useEffect(() => {
      setFormData({ name: user.name, email: user.email, password: '' });
   }, [dispatch,setFormData,user.name,user.email]);

   return (
      <form className={style._form} onSubmit={onSubmit} onReset={onReset}>
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
            placeholder="Логин"
            isIcon
         />
         <PasswordInput
            onChange={onChange}
            value={formData.password}
            name={'password'}
         />
         {
            formValueChange?
               <div>
                  <Button htmlType="submit" type="primary" size="medium">
                     Сохранить
                  </Button>
                  <Button htmlType="reset" type="primary" size="medium">
                     Отмена
                  </Button>
               </div>:
               null
         }

      </form>
   );

}

export default ProfileInfo;