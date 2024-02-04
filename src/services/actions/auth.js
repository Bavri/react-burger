import {
   APIFORGOTPASSWORD,
   APILOGIN,
   APILOGOUT,
   APIREGISTER, APIRESETPASSWORD, APITOKEN, APIUSER,
   checkResponse,
} from '../../utils/api';


export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_ERROR = 'AUTH_LOGOUT_ERROR';
export const AUTH_FORGOT_PASSWORD_REQUEST = 'AUTH_FORGOT_PASSWORD_REQUEST';
export const AUTH_FORGOT_PASSWORD_SUCCESS = 'AUTH_FORGOT_PASSWORD_SUCCESS';
export const AUTH_FORGOT_PASSWORD_ERROR = 'AUTH_FORGOT_PASSWORD_ERROR';
export const AUTH_RESET_PASSWORD_REQUEST = 'AUTH_RESET_PASSWORD_REQUEST';
export const AUTH_RESET_PASSWORD_SUCCESS = 'AUTH_RESET_PASSWORD_SUCCESS';
export const AUTH_RESET_PASSWORD_ERROR = 'AUTH_RESET_PASSWORD_ERROR';
export const AUTH_GET_USER_REQUEST = 'AUTH_GET_USER_REQUEST';
export const AUTH_GET_USER_SUCCESS = 'AUTH_GET_USER_SUCCESS';
export const AUTH_GET_USER_ERROR = 'AUTH_GET_USER_ERROR';
export const AUTH_PATCH_USER_REQUEST = 'AUTH_PATCH_USER_REQUEST';
export const AUTH_PATCH_USER_SUCCESS = 'AUTH_PATCH_USER_SUCCESS';
export const AUTH_PATCH_USER_ERROR = 'AUTH_PATCH_USER_ERROR';
export const AUTH_CLEAR = 'AUTH_CLEAR';

export const SET_AUTH_CHECKED='SET_AUTH_CHECKED';

export function authLoginAction(form) {
   return function (dispatch) {
      dispatch({ type: AUTH_LOGIN_REQUEST });
      fetch(`${APILOGIN}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify({ ...form })
      }).then(response =>checkResponse(response))
         .then(response => {
            const accessToken = response.accessToken.split('Bearer ')[1];
            const refreshToken = response.refreshToken;

            if (accessToken) {
               localStorage.setItem('accessToken', accessToken);
               localStorage.setItem('refreshToken', refreshToken);
            }
            dispatch({ type: AUTH_LOGIN_SUCCESS, user: response.user });

         })
         .catch(err => {
            dispatch({ type: AUTH_LOGIN_ERROR, message: err.message });
         });
   };
}
export function authRegisterAction(form) {
   return function (dispatch) {
      dispatch({ type: AUTH_REGISTER_REQUEST });
      fetch(`${APIREGISTER}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify({ ...form })
      }).then(response =>checkResponse(response))
         .then(response => {
            const accessToken = response.accessToken.split('Bearer ')[1];
            const refreshToken = response.refreshToken;

            if (accessToken) {
               localStorage.setItem('accessToken', accessToken);
               localStorage.setItem('refreshToken', refreshToken);
            }

            dispatch({ type: AUTH_REGISTER_SUCCESS, user: response.user });
         })
         .catch(err => {
            dispatch({ type: AUTH_REGISTER_ERROR, message: err.message });
         });
   };
}

export function authLogoutAction() {
   return function (dispatch) {
      dispatch({ type: AUTH_LOGOUT_REQUEST });
      fetch(`${APILOGOUT}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
         })
      }).then(response =>checkResponse(response))
         .then(() => {
            dispatch({ type: AUTH_LOGOUT_SUCCESS });
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
         })
         .catch(err => {
            dispatch({ type: AUTH_LOGOUT_ERROR, message: err.message });
         });
   };
}

export function authForgotPasswordAction(form) {
   return function (dispatch) {
      dispatch({ type: AUTH_FORGOT_PASSWORD_REQUEST });
      fetch(`${APIFORGOTPASSWORD}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify({ ...form })
      }) .then(response =>checkResponse(response))
         .then(() => {
            dispatch({ type: AUTH_FORGOT_PASSWORD_SUCCESS });
         })
         .catch(err => {
            dispatch({ type: AUTH_FORGOT_PASSWORD_ERROR, message: err.message });
         });
   };
}

export function authResetPasswordAction(form) {
   return function (dispatch) {
      dispatch({ type: AUTH_RESET_PASSWORD_REQUEST });
      fetch(`${APIRESETPASSWORD}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify({ ...form })
      }) .then(response =>checkResponse(response))
         .then(() => {
            dispatch({ type: AUTH_RESET_PASSWORD_SUCCESS });
         })
         .catch(err => {
            dispatch({ type: AUTH_RESET_PASSWORD_ERROR, message: err.message });
         });
   };
}



export function refreshToken() {
   return fetch(`${APITOKEN}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
         token: localStorage.getItem('refreshToken')
      })
   }).then(checkResponse);
}

export const setAuthChecked = (value) => ({
   type: SET_AUTH_CHECKED,
   payload: value,
});

export function authGetUserAction() {
   return function (dispatch) {
      if(localStorage.getItem('accessToken')){
         dispatch({ type: AUTH_GET_USER_REQUEST });
         let request= {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json;charset=utf-8',
               Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
         };
         fetch(`${APIUSER}`, request)
            .then(checkResponse)
            .catch(err => {
               if (err.message === 'jwt expired') {
                  return refreshToken().then(refreshData => {
                     if (!refreshData.success) {
                        return Promise.reject(refreshData);
                     }
                     localStorage.setItem('refreshToken', refreshData.refreshToken);
                     localStorage.setItem('accessToken', refreshData.accessToken);
                     request.headers.Authorization = refreshData.accessToken;

                     return  fetch(`${APIUSER}`,request)
                        .then(checkResponse);
                  });
               } else {
                  return Promise.reject(err);
               }
            })
            .then(response => {
               dispatch({ type: AUTH_GET_USER_SUCCESS, user: response.user });
            })
            .catch(err => {
               dispatch({ type: AUTH_GET_USER_ERROR, message: err.message });
            });
      }
      else {
         setAuthChecked(false);
      }
   };
}

export function authPatchUserAction(form) {
   return function (dispatch) {
      dispatch({ type: AUTH_PATCH_USER_REQUEST });
      let request={
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
         },
         body: JSON.stringify({ ...form })
      };
      fetch(`${APIUSER}`, request)
         .then(checkResponse)
         .catch(err => {
            if (err.message === 'jwt expired') {
               return refreshToken().then(refreshData => {
                  if (!refreshData.success) {
                     return Promise.reject(refreshData);
                  }
                  localStorage.setItem('refreshToken', refreshData.refreshToken);
                  localStorage.setItem('accessToken', refreshData.accessToken);
                  request.headers.Authorization = refreshData.accessToken;

                  return  fetch(`${APIUSER}`,request)
                     .then(checkResponse);
               });
            } else {
               return Promise.reject(err);
            }
         })
         .then(response => {
            dispatch({ type: AUTH_PATCH_USER_SUCCESS, user: response.user });
         })
         .catch(err => {
            dispatch({ type: AUTH_PATCH_USER_ERROR, message: err.message });
         });
   };
}

