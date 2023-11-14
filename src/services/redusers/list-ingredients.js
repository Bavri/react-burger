import { LIST_INGREDIENS_REQUEST,LIST_INGREDIENS_SUCCESS,LIST_INGREDIENS_ERROR } from '../actions/list-ingredients';


const initState = {
   data: [],
   isLoading:false,
   isEror: false,
};

export function listIngredientsReducer(state = initState,action){
   switch (action.type) {
   case LIST_INGREDIENS_REQUEST:
      return {...state, isLoading:true, isEror:false};

   case LIST_INGREDIENS_SUCCESS:
      return { ...state, isLoading:false, isEror: false, data: action.data };

   case LIST_INGREDIENS_ERROR:
      return { ...state, dataLoading: false, dataHasErrors: true, data: state.data };

   default :
      return state;
   }


}