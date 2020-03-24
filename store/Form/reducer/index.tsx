/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_FORM_VALUES_ACTION, POST_CV_ACTION } from '../Constants';

// The initial state of the App
export const initialState = {
  values: null,
  cvData: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */

const formReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {
      case FETCH_FORM_VALUES_ACTION:
        draft.values = action.values;
        break;
      case POST_CV_ACTION:
        draft.cvData = action.cvData;
        break;
    }
  });

export default formReducer;
