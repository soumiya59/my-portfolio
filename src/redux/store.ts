import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
export const store = createStore(reducer, composeWithDevTools())
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )

export type RootState = ReturnType<typeof store.getState>;  