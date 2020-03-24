/**
 * Test selectors
*/

import { createSelector } from 'reselect';
import { initialState } from '../reducer';

const selectTest = state => state.test || initialState;

const makeSelectTest = () =>
  createSelector(
    selectTest,
    State => State,
  );

export { selectTest, makeSelectTest };
