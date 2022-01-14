import {combineReducers} from "redux";
import currency from "./currencyReducer";
import listProduct from "./charReducer";
export const rootReducer = combineReducers({
        currency, listProduct,
    }
)





