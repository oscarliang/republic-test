import WeatherContainer from './weather-container';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/weather-actions'

/*** Mock Google Maps JavaScript API ***/
global.google = {
    maps: {
        places: {
            AutocompleteService: function AutocompleteService() { },
            PlacesServiceStatus: {
                OK: 'OK'
            }
        }
    }
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    weatherState: {
        searchkeywords: '',
        searchkeywordsRefresh: true
    }
}

describe('weatherContainer default', () => {
    let store;
    let wrapper;

    beforeAll(() => {
        let curState = JSON.parse(JSON.stringify(initialState));
        store = mockStore(curState);
        wrapper = mount(
            <WeatherContainer store={store} />
        );
    });

    it('init the default state ', (done) => {
        setTimeout(() => {
            wrapper.update();
            done();
        }, 500);
    });

});

describe('weatherContainer with searchkeywords input field', () => {
    let store;
    let wrapper;
    beforeAll(() => {
        let curState = JSON.parse(JSON.stringify(initialState));
        curState.weatherState.searchkeywords = 'london'
        store = mockStore(curState);
        wrapper = mount(
            <WeatherContainer store={store} />
        );
    });

    it('add search keywords on the component ', () => {
        expect(wrapper.find('#my-input-id').length).toEqual(1)
    });
});

