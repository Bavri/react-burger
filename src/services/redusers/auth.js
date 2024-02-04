import {
   AUTH_CLEAR,
   AUTH_FORGOT_PASSWORD_ERROR,
   AUTH_FORGOT_PASSWORD_REQUEST,
   AUTH_FORGOT_PASSWORD_SUCCESS, AUTH_GET_USER_ERROR, AUTH_GET_USER_REQUEST, AUTH_GET_USER_SUCCESS,
   AUTH_LOGIN_ERROR,
   AUTH_LOGIN_REQUEST,
   AUTH_LOGIN_SUCCESS,
   AUTH_LOGOUT_ERROR,
   AUTH_LOGOUT_REQUEST,
   AUTH_LOGOUT_SUCCESS, AUTH_PATCH_USER_ERROR, AUTH_PATCH_USER_REQUEST, AUTH_PATCH_USER_SUCCESS,
   AUTH_REGISTER_ERROR,
   AUTH_REGISTER_REQUEST,
   AUTH_REGISTER_SUCCESS, AUTH_RESET_PASSWORD_ERROR,
   AUTH_RESET_PASSWORD_REQUEST,
   AUTH_RESET_PASSWORD_SUCCESS,
   SET_AUTH_CHECKED
} from '../actions/auth';


const initialState = {
   isLoad: false,
   isError: null,
   isOk: false,
   userLogin: false,
   user: {
      name: '',
      email: ''
   },
};

export function authReducer(state = initialState, action) {
   switch (action.type) {
   case AUTH_REGISTER_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_REGISTER_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true, userLogin: true };
   case AUTH_REGISTER_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false, userLogin: false };
   case AUTH_LOGIN_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true, userLogin: true,
         user: { name: action.user.name, email: action.user.email }};
   case AUTH_LOGIN_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false, userLogin: false };
   case AUTH_LOGOUT_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_LOGOUT_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true, userLogin: false };
   case AUTH_LOGOUT_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false, userLogin: false };
   case AUTH_FORGOT_PASSWORD_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_FORGOT_PASSWORD_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true};
   case AUTH_FORGOT_PASSWORD_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false};
   case AUTH_RESET_PASSWORD_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_RESET_PASSWORD_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true, };
   case AUTH_RESET_PASSWORD_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false };
   case AUTH_GET_USER_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false, user: initialState.user };
   case AUTH_GET_USER_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true,
         user: { name: action.user.name, email: action.user.email }, userLogin: true };
   case AUTH_GET_USER_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false, user: initialState.user, userLogin: false };
   case AUTH_PATCH_USER_REQUEST:
      return { ...state, isLoad: true, isError: null, isOk: false };
   case AUTH_PATCH_USER_SUCCESS:
      return { ...state, isLoad: false, isError: null, isOk: true,
         user: { name: action.user.name, email: action.user.email } };
   case AUTH_PATCH_USER_ERROR:
      return { ...state, isLoad: false, isError: action.message, isOk: false };
   case AUTH_CLEAR:
      return { ...state, isLoad: false, isError: null, isOk: false };
   case SET_AUTH_CHECKED:
      return { ...state, isLoad: false, isError: null, isOk: false, userLogin: action.payload};
   default:
      return state;
   }
}