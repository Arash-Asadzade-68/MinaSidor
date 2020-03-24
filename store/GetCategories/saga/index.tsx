/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import { getCategoriesErrorAction , getCategoriesSuccessAction } from '../actions';
import {getCategoriesApi} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* getCaegories(action){  
 
  try {
    const categories = yield call(getCategoriesApi, action.getRequestParams,action.requestStatus)
     yield put(getCategoriesSuccessAction(categories));
  } catch (err) {
    yield call(_handleErrors, err,getCategoriesErrorAction);
  }
};

