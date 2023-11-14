import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redusers';
export default configureStore({
   reducer: rootReducer,
});
