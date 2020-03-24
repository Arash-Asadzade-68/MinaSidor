/*
 * Activity Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
 SAVE_APP_ACTION,
 SAVE_APP_SUCCESS_ACTION,
 SAVE_APP_FAIL_ACTION
} from '../Constants';

// The initial state of the App
export const initialState = {
  getRequestParams: null,
  requestStatus:null,
  listDto: null,
  error: null,
  loading: false,
};

const saveAppReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {

      case  SAVE_APP_ACTION:
        draft.getRequestParams = action.getRequestParams;
        draft.requestStatus=action.requestStatus;
        draft.listDto = null;
        draft.error = null;
        draft.loading = true;
        break;
      case SAVE_APP_SUCCESS_ACTION:
        draft.getRequestParams = null;
        draft.requestStatus=null;
        draft.listDto = action.data.data;
        draft.error = null;
        draft.loading = false;
        break;
      case  SAVE_APP_FAIL_ACTION:
        draft.getRequestParams = null;
        draft.requestStatus=null;
        draft.listDto = null;
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default saveAppReducer;
