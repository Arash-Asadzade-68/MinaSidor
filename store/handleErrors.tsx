import {put , call} from 'redux-saga/effects';
import forwardTo from 'utils/history';

export default function* _handleErrors (err , cb){
    switch (err.response.status) {  
        case 400: {
          yield call(forwardTo ,'/errors', 400);
          return;
        }
        case 500: {
          yield call(forwardTo,'/errors',500);
          return;
        }
        default: {
          yield put(cb(err));
        }
    }
}