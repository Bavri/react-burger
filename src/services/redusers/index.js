
import { combineReducers } from 'redux';
import { listIngredientsReducer } from './list-ingredients';
import { modalIngredientReducer } from './ingredient-modal';
import { burgerConstructorReducer } from './burger-constructor';
import { orderReducer } from './order';


export default combineReducers({
   listIngredients: listIngredientsReducer,
   modalIngredient:modalIngredientReducer,
   listBurgerConstructor:burgerConstructorReducer,
   order: orderReducer,
});