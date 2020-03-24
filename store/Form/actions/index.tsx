/*
 * test Actions
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

import { FETCH_FORM_VALUES_ACTION, POST_CV_ACTION } from '../Constants';
type values ={
  orgNumber:string,
  orgName: string,
  personalNumber: string,
  amount: number,
  amourtizationPeriod: number,
  need:string[],
  needDescription: string,
  lastName: string,
  broker_id:string
  }

export function fetchFormValuesAction(values:values): { type: string, values:values } {
  return {
    type: FETCH_FORM_VALUES_ACTION,
    values,
  };
}
export function postCVAction(cvData:any): { type: string, cvData: string[] } {
  return {
    type: POST_CV_ACTION,
    cvData,
  };
}


