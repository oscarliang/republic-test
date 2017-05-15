'use strict';

import * as actions from './location-actions';
import {SET_LOCATION_SEARCHKEYWORDS, SET_LOCATION_REFRESH} from './action-types'

describe('Set keywords search actions', () => {
  it('should dispatch an action to set keywords search actions', () => {
    const expectedAction = {
      type: SET_LOCATION_SEARCHKEYWORDS,
    };
    expect(
      actions.setLocationSearchkeywords()
    ).toEqual(expectedAction);
  });
});

describe('Set to click refresh buttion action', () => {
  it('should dispatch an action to set to click refresh buttion action', () => {
    const expectedAction = {
      type: SET_LOCATION_REFRESH,
    };
    expect(
      actions.setLocationRefresh()
    ).toEqual(expectedAction);
  });
});
