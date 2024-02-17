
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

export const checkResponse =(response)=>{
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export function setCookie(name, value, props) {
   props = props || {};
   let exp = props.expires;

   if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
   }

   if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
   }
   value = encodeURIComponent(value);
   let updatedCookie = name + '=' + value;

   for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];

      if (propValue !== true) {
         updatedCookie += '=' + propValue;
      }
   }
   document.cookie = updatedCookie;
}

export function deleteCookie(name) {
   setCookie(name, null, { expires: -1 });
}

export function getCookie(name) {
   const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
   );

   return matches ? decodeURIComponent(matches[1]) : undefined;
}

