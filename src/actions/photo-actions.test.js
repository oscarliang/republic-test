'use strict';

import * as actions from './photo-actions';
import {SET_PHOTO_RECORDS, SET_PHOTO_FILTER_TITLE} from './action-types'

describe('Set photo records actions', () => {
  it('should dispatch an action to set photo records action', () => {
    const expectedAction = {
      type: SET_PHOTO_RECORDS,
    };
    expect(
      actions.setPhotoRecords()
    ).toEqual(expectedAction);
  });
});

describe('Set photo fitler title action', () => {
  it('should dispatch an action to set photo filter title action', () => {
    const expectedAction = {
      type: SET_PHOTO_FILTER_TITLE,
    };
    expect(
      actions.setPhotoFilterTitle()
    ).toEqual(expectedAction);
  });
});
