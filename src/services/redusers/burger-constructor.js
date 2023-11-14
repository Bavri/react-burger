import { ADD_INGREDIENT,DELETE_INGREDIENT,SOTR_INGREDIENTS, ADD_BUN, TOTAL_DELETE_INGREDIENT, TOTAL_ADD_BUN,
   TOTAL_SWAP_BUN,TOTAL_ADD_INGREDIENT }
   from '../actions/burger-constructor';


const initialState = {
   ingredients: [],
   total: 0,
   typeBun:null,
};




export function burgerConstructorReducer(state = initialState, action) {
   switch (action.type) {
   case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.item] };
   case ADD_BUN:
      return { ...state, typeBun:action.item};
   case DELETE_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients].filter((_item, index) => index !== action.index) };
   case SOTR_INGREDIENTS:
      return {...state, ingredients: action.ingredients};
   case TOTAL_ADD_INGREDIENT:
      return { ...state, total: state.total+action.price };
   case TOTAL_ADD_BUN:
      return { ...state,  total: state.total+action.price*2};
   case TOTAL_DELETE_INGREDIENT:
      return { ...state, total: state.total-action.price };
   case TOTAL_SWAP_BUN:
      return { ...state, total: state.total-state.typeBun.price*2+action.price*2};
   default:
      return state;
   }
}

