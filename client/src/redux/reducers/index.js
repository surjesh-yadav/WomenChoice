import {addItems, reducer , top,kurti,cartReducer} from "./addItem";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    item:addItems, reduce:reducer ,tops:top,kurtis:kurti,cartdata:cartReducer
})


export default rootReducers;