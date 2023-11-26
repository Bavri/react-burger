import { ORDER_ERROR, ORDER_SUCCESS, ORDER_REQUEST, DELETE_ORDER } from '../actions/order';


const initialState ={
   number:null,
   isErorr: false,
   isLoading: false,
};


export function orderReducer(state = initialState, action) {
   switch (action.type) {
   case ORDER_SUCCESS:
      return { ...state, isLoading: true, isErorr: false };
   case ORDER_REQUEST:
      return { ...state, isLoading: false, isErorr: false, number: action.number };
   case ORDER_ERROR:
      return { ...state, isLoading: false, isErorr: true, number: null };
   case DELETE_ORDER:
      return initialState;

   default:
      return state;
   }
}