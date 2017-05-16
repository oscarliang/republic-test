'use strict';

import * as actions from './weather-actions';
import {SET_WEATHER_SEARCHKEYWORDS, SET_WEATHER_REFRESH} from './action-types'

describe('Set keywords search actions', () => {
  it('should dispatch an action to set keywords search actions', () => {
    const expectedAction = {
      type: SET_WEATHER_SEARCHKEYWORDS,
    };
    expect(
      actions.setWeatherSearchkeywords()
    ).toEqual(expectedAction);
  });
});

describe('Set to click refresh buttion action', () => {
  it('should dispatch an action to set to click refresh buttion action', () => {
    const expectedAction = {
      type: SET_WEATHER_REFRESH,
    };
    expect(
      actions.setWeatherRefresh()
    ).toEqual(expectedAction);
  });
});
