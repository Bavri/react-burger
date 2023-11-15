
import {API,checkResponse} from '../../utils/api';

export const LIST_INGREDIENS_REQUEST = 'LIST_INGREDIENS_REQUEST';
export const LIST_INGREDIENS_SUCCESS = 'LIST_INGREDIENS_SUCCESS';
export const LIST_INGREDIENS_ERROR = 'LIST_INGREDIENS_ERROR';

export const listIngredientsAction =()=> {
   return (dispatch)=>{
      dispatch({ type: LIST_INGREDIENS_REQUEST });
      fetch(API)
         .then(response =>checkResponse(response))
         .then(response =>dispatch({ type: LIST_INGREDIENS_SUCCESS, data: response.data }))
         .catch(() => {
            dispatch({ type: LIST_INGREDIENS_ERROR });
         });
   };
};
