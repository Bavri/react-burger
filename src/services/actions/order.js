import {APIORDER,checkResponse} from '../../utils/api';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';
export const DELETE_ORDER = 'DELETE_ORDER';

export const orderAction =(arrayID)=> {
   return (dispatch)=>{
      dispatch({ type: ORDER_SUCCESS });
      fetch(APIORDER, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ingredients:arrayID})
      }
      )
         .then(response =>checkResponse(response))
         .then((response) =>dispatch({ type:  ORDER_REQUEST,number:response.order.number}))
         .catch(() => {
            dispatch({ type:  ORDER_ERROR });
         });
   };
};