import { combineReducers } from "redux";
import LoanReducer from "./loanReducer/LoanReducer";

const reducers = combineReducers({
    loan:LoanReducer,
});
export default reducers