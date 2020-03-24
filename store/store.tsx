import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer'; // combineReducers({..., ...})
type Store = any;

export const storeConfiguration = (initialState) => {

  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store: Store = createStore(
    rootReducer(),
    initialState,
    composedEnhancer,
  );

  // Extensions
  sagaMiddleware.run(rootSaga);
  // store.injectedReducers = {}; // Reducer registry
  // store.injectedSagas = {rootSaga}; // Saga registry

  return store;
};
