import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {AppRoutes} from '../../utils/app-routes';
import PropTypes from 'prop-types';


const Protected = ({ onlyUnAuth, component }) => {

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

Protected.propTypes={
   onlyUnAuth: PropTypes.bool.isRequired,
   component: PropTypes.element.isRequired
};


export const OnlyUnAuth = ({ component }) => (
   <Protected onlyUnAuth={true} component={component} />
);

export const OnlyAuth = ({ component }) => (
    <Protected onlyUnAuth={false} component={component} />
);





