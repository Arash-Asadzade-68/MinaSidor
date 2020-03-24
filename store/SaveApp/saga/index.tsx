/**
 * Gets the information of the city from server
 */

import { put, call } from 'redux-saga/effects';
import {  saveAppSuccessAction , saveAppErrorAction } from '../actions';
import {saveApp} from '../../../services/http/common'
import _handleErrors from '../../handleErrors';

export function* postFormData(action){  
  try {
    const data = yield call(saveApp, action.getRequestParams,action.requestStatus)
     yield put(saveAppSuccessAction(data));
  } catch (err) {
    yield call(_handleErrors, err,saveAppErrorAction);
  }
};

