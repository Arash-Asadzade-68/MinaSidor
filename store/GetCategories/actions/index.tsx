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
  GET_CATEGORIES_ACTION,
  GET_CATEGORIES_FAIL_ACTION,
  GET_CATEGORIES_SUCCESS_ACTION
} from '../Constants';

//GET ACTIONS

export function getCategoriesAction(getRequestParams:string,requestStatus:RequestStatus): { type: string, getRequestParams,requestStatus:RequestStatus } {
  return {
    type: GET_CATEGORIES_ACTION,
    getRequestParams,
    requestStatus
  };
}
export function getCategoriesSuccessAction(catObject: any): { type: string, catObject: any } {
  return {
    type: GET_CATEGORIES_SUCCESS_ACTION,
    catObject,
  };
}
export function getCategoriesErrorAction(error: string): { type: string, error: string } {
  return {
    type: GET_CATEGORIES_FAIL_ACTION,
    error,
  };
}
