export const getListIngredients = (state) => state.listIngredients;
export const getActiveIngredient = (state) => state.modalIngredient.activeIngredient;
export const getListBurgerConstructor = (state) => state.listBurgerConstructor.ingredients;
export const getBunBurgerConstructor= (state) => state.listBurgerConstructor.typeBun;
export const getTotalBurgerConstructor = (state) => state.listBurgerConstructor.total;
export const getOrder=(state) => state.order;