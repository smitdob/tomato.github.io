import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { itemdetail } from "./dataset"; 

const rootreducer = combineReducers({
    itemdetail, cartreducer
})

export default rootreducer