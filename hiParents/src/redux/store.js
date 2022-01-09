import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/indexRed"

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/indexSaga"

const sagaMiddleware = createSagaMiddleware();

const storeRedux = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default storeRedux;