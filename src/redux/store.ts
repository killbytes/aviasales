import { applyMiddleware, combineReducers, createStore } from "redux";
import aviasalesReducer from "src/redux/reducers/aviasalesReducer.ts";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  aviasales: aviasalesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
