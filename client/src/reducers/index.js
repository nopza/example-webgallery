import { combineReducers } from "redux";
import registerReducer from "./register.reducer";
import myregisterReducer from "./myregister.reducer";
import myloginReducer from "./mylogin.reducer";
import loginReducer from "./login.reducer";
import stockReducer from "./stock.reducer";
import shopReducer from "./shop.reducer";
import transactionReducer from "./transaction.reducer";
import galleryReducer from "./gallery.reducer";


export default combineReducers({
  registerReducer,
  myregisterReducer,
  myloginReducer,
  loginReducer,
  stockReducer,
  shopReducer,
  transactionReducer,
  galleryReducer,
});
