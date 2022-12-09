import {createStore} from "redux";
import rootreduceritem from "./Redux/datareducer/datamain";
const storedata = createStore( rootreduceritem , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default storedata