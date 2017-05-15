import reducer from './location-reducer';
import { SET_LOCATION_SEARCHKEYWORDS } from '../../actions/action-types'

const initialState = {
  'searchkeywords': '',
  'searchkeywordsRefresh': true
}

describe('State should change after reducer triggered', () => {
  it('should change searchkeywords of the state', () => {
    const stateAfter = {
      'searchkeywords': 'london',
      'searchkeywordsRefresh': true
    };
    const action = {
      type: SET_LOCATION_SEARCHKEYWORDS,
      searchkeywords: 'london'
    }
    expect(
      reducer(initialState, action)
    ).toEqual(stateAfter);
  });
});
