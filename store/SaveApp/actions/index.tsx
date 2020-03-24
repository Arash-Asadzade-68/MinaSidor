/*
 * Activity Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SAVE_APP_ACTION,
  SAVE_APP_FAIL_ACTION,
  SAVE_APP_SUCCESS_ACTION
} from '../Constants';

//GET ACTIONS

export function saveAppAction(getRequestParams:object,requestStatus:RequestStatus): { type: string, getRequestParams,requestStatus:RequestStatus } {
  
  return {
    type: SAVE_APP_ACTION,
    getRequestParams,
    requestStatus
  };
}
export function saveAppSuccessAction(data: any): { type: string, data: any } {
  return {
    type: SAVE_APP_SUCCESS_ACTION,
    data,
  };
}
export function saveAppErrorAction(error: string): { type: string, error: string } {
  return {
    type: SAVE_APP_FAIL_ACTION,
    error,
  };
}
