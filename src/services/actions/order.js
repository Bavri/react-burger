import {APIORDER,serverValid} from '../../utils/api';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';
export const DELETE_ORDER = 'DELETE_ORDER';

export const orderAction =(arrayID)=> {
   return (dispatch)=>{
      dispatch({ type:  ORDER_REQUEST });
      fetch(APIORDER, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ID:arrayID})
      }
      )
         .then(response =>serverValid(response))
         .then((response) =>dispatch({ type:  ORDER_REQUEST_SUCCESS,id:response}))
         .catch(() => {
            dispatch({ type:  ORDER_ERROR });
         });
   };
};