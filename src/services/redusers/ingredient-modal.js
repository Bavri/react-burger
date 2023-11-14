import { SET_ACTIVE_INGREDIENT,DELETE_ACTIVE_INGREDIENT } from '../actions/ingredient-active';

const initialState = {
   activeIngredient: null
};

export function modalIngredientReducer(state = initialState, action) {
   switch (action.type) {
   case SET_ACTIVE_INGREDIENT:
      return { ...state,  activeIngredient: action.ingredient };
   case DELETE_ACTIVE_INGREDIENT:
      return { ...state,  activeIngredient: null };
   default:
      return state;
   }
}
