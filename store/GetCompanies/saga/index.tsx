/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import { getCompaniesSuccessAction , getCompaniesErrorAction } from '../actions';
import {getCompaniesApi} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* getCompanies(action){  
  try {
    const companies = yield call(getCompaniesApi, action.getRequestParams,action.requestStatus)
    console.log(companies,'ssss')
     yield put(getCompaniesSuccessAction(companies));
  } catch (err) {
    yield call(_handleErrors, err,getCompaniesErrorAction);
  }
};

