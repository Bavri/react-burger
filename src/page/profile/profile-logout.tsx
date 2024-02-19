import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './_profile.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getAuth} from '../../services/selectors';
import {AUTH_CLEAR, authLogoutAction} from '../../services/actions/auth';
import {useEffect} from 'react';

function ProfileLogout(){
   const dispatch= useDispatch();
   const {isError} =useSelector(getAuth);
   const onClick=()=>{
      //@ts-ignore
      dispatch(authLogoutAction());
   };
   useEffect(
      ()=>{

         if(isError){
            alert(isError);
            dispatch({type:AUTH_CLEAR});
         }
      }
      ,[isError, dispatch]
   );


   return (
      <div className={style._logout}>
         <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
            Выйти
         </Button>
      </div>

   );

}

export default ProfileLogout;