/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

// import history from './utils/history';

import getCategoriesReducer from './GetCategories/reducer';
import getCompaniesReducer from './GetCompanies/reducer';
import formReducer  from './Form/reducer';
import saveAppReducer from './SaveApp/reducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  
  const rootReducer = combineReducers({
    categories: getCategoriesReducer,
    companies :getCompaniesReducer,
    values :formReducer,
    result :saveAppReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
