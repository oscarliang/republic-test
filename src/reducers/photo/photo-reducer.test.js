import reducer from './photo-reducer';
import {SET_PHOTO_FILTER_TITLE} from '../../actions/action-types'

const initialState = {
	'records': [],
	'filterTitle' : '',
	'filterAlbumId' : ''
}

describe('State should change after reducer triggered', () => {
    it('should change filterTitle of the state', () => {
      const stateAfter = {
        'records': [],
      	'filterTitle' : 'pre',
      	'filterAlbumId' : ''
      };
      const action = {
          type: SET_PHOTO_FILTER_TITLE,
          filterTitle: 'pre'
      }
      expect(
        reducer(initialState, action)
      ).toEqual(stateAfter);
    });
});
