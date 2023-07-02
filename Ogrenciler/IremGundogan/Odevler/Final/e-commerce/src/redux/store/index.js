import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import cartLengthReducer from "../slices/cartLengthSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cartLength: cartLengthReducer,
});

export default rootReducer;
