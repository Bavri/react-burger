import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {AppRoutes} from '../../utils/app-routes';

import { ReactNode } from 'react';


type TProtectedProps={
   onlyUnAuth: boolean,
   component: ReactNode
};


const Protected = ({ onlyUnAuth, component }:TProtectedProps) => {
   //@ts-ignore
   const {isLoad,userLogin}= useSelector((store) => store.auth);
   const location = useLocation();

   if (isLoad) {
      return (<div>загрузка</div>);
   }


   if (onlyUnAuth && userLogin) {

      const { from } = location.state || { from: { pathname: '/' } };

      return <Navigate to={from} />;
   }

   if (!onlyUnAuth && !userLogin) {
      return <Navigate to={AppRoutes.login} state={{ from: location }} replace={true} />;
   }




   return (
      <>
         {isLoad && <div>загрузка</div>}
         {!isLoad && component}
      </>
   );
};



export const OnlyUnAuth = ({ component }:Pick<TProtectedProps, 'component'>) => (
   <Protected onlyUnAuth={true} component={component} />
);

export const OnlyAuth = ({ component }:Pick<TProtectedProps, 'component'>) => (
   <Protected onlyUnAuth={false} component={component} />
);





