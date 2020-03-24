/**
 * Activity selectors
*/

import { createSelector } from 'reselect';
import { initialState } from '../reducer';

const selectActivity = state => state.Activity || initialState;

const makeSelectActivity = () =>
  createSelector(
    selectActivity,
    State => State,
  );

export { selectActivity, makeSelectActivity };