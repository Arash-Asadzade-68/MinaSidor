import {takeLatest, all} from 'redux-saga/effects'
//functions in saga 
import {getCaegories} from './GetCategories/saga'
import {getCompanies} from './GetCompanies/saga'
import {postFormData} from './SaveApp/saga'
//actions for get request

import { GET_CATEGORIES_ACTION } from './GetCategories/Constants';
import { GET_COMPANIES_ACTION } from './GetCompanies/Constants';
import {SAVE_APP_ACTION } from './SaveApp/Constants'
export default function* sagaIndex() {

  yield all([
    takeLatest(GET_CATEGORIES_ACTION, getCaegories),
    takeLatest(GET_COMPANIES_ACTION, getCompanies),
    takeLatest(SAVE_APP_ACTION, postFormData),
  ])
}