

export const PATH='https://norma.nomoreparties.space/api';
export const PATHLOGIN=`${PATH}/auth`;
export const API = `${PATH}/ingredients`;
export const APIORDER = `${PATH}/orders`;

export const APILOGIN=`${PATHLOGIN}/login`;
export const APILOGOUT=`${PATHLOGIN}/logout`;
export const APITOKEN=`${PATHLOGIN}/token`;
export const APIREGISTER=`${PATHLOGIN}/register`;
export const APIUSER=`${PATHLOGIN}/user`;

export const APIFORGOTPASSWORD = `${PATH}/password-reset`;

export const APIRESETPASSWORD = `${PATH}/password-reset/reset`;

export const checkResponse =<T>(response: Response):Promise<T>=>{
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

